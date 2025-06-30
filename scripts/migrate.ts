import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neonConfig, neon } from "@neondatabase/serverless";

config({ path: ".env.local" });

// Use fetch for neon driver
neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL!); // Correct usage
const db = drizzle(sql); // Drizzle initialized

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("✅ Migration complete!");
  } catch (error) {
    console.error("❌ Error during migration:", error);
    process.exit(1);
  }
};

main();