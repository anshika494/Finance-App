import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    // Check if migrations table exists
    const migrationsTableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'drizzle_migrations'
      );
    `;

    if (!migrationsTableExists[0].exists) {
      await sql`
        CREATE TABLE drizzle_migrations (
          id SERIAL PRIMARY KEY,
          hash text NOT NULL,
          created_at bigint
        );
      `;
    }

    // Check if accounts table exists (indicating first migration was applied)
    const accountsTableExists = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'accounts'
      );
    `;

    // Get applied migrations
    const appliedMigrations = await sql`SELECT hash FROM drizzle_migrations ORDER BY created_at`;
    const appliedHashes = new Set(appliedMigrations.map(m => m.hash));

    // If accounts table exists but no migrations recorded, mark first migration as applied
    if (accountsTableExists[0].exists && appliedHashes.size === 0) {
      console.log("📝 Marking existing tables migration as applied...");
      await sql`INSERT INTO drizzle_migrations (hash, created_at) VALUES ('0000_majestic_lester', ${Date.now()})`;
      appliedHashes.add('0000_majestic_lester');
    }

    // Read migration files
    const migrationsDir = join(process.cwd(), "drizzle");
    const migrationFiles = readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort();

    for (const file of migrationFiles) {
      const hash = file.replace('.sql', '');
      
      if (appliedHashes.has(hash)) {
        console.log(`⏭️  Skipping already applied migration: ${file}`);
        continue;
      }

      console.log(`🔄 Applying migration: ${file}`);
      
      const migrationContent = readFileSync(join(migrationsDir, file), 'utf-8');
      
      // Split by semicolon and filter out empty statements
      const statements = migrationContent
        .split(';')
        .map(stmt => stmt.trim())
        .filter(stmt => stmt.length > 0);

      // Execute each statement individually
      for (const statement of statements) {
        await sql.query(statement);
      }

      // Record the migration as applied
      await sql`INSERT INTO drizzle_migrations (hash, created_at) VALUES (${hash}, ${Date.now()})`;
      
      console.log(`✅ Applied migration: ${file}`);
    }

    console.log("✅ All migrations complete!");
  } catch (error) {
    console.error("❌ Error during migration:", error);
    process.exit(1);
  }
};

main();