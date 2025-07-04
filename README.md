# Finance App

A modern, full-stack personal finance management application built with Next.js, featuring account management, transaction tracking, and categorization with a clean, responsive interface.

## 🚀 Features

- **Account Management**: Create and manage multiple financial accounts
- **Transaction Tracking**: Add, edit, and categorize transactions
- **Category Management**: Organize transactions with custom categories
- **Data Tables**: View and manage data with sortable, filterable tables
- **CSV Import**: Bulk import transactions from CSV files
- **Authentication**: Secure user authentication with Clerk
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Optimistic updates with React Query

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management

### Backend
- **Hono** - Web framework for API routes
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database (Neon)
- **Clerk** - Authentication

### Development Tools
- **Drizzle Kit** - Database migrations
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finance-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_postgresql_connection_string
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Set up the database**
   ```bash
   # Generate database schema
   npm run db:generate
   
   # Run migrations
   npm run db:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

### Accounts
- `id` - Primary key
- `name` - Account name
- `userId` - User identifier
- `plaidId` - Optional Plaid integration ID

### Categories
- `id` - Primary key
- `name` - Category name
- `userId` - User identifier
- `plaidId` - Optional Plaid integration ID

### Transactions
- `id` - Primary key
- `amount` - Transaction amount (in cents)
- `payee` - Payee name
- `notes` - Optional notes
- `date` - Transaction date
- `accountId` - Foreign key to accounts
- `categoryId` - Optional foreign key to categories

## 📁 Project Structure

```
finance-app/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── db/                   # Database configuration
├── drizzle/              # Database migrations
├── features/             # Feature-based modules
│   ├── accounts/         # Account management
│   ├── categories/       # Category management
│   └── transactions/     # Transaction management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # React context providers
└── scripts/              # Database scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Drizzle Studio

## 🎨 UI Components

The application uses shadcn/ui components built on top of Radix UI primitives:

- **Forms**: React Hook Form with Zod validation
- **Tables**: TanStack Table with sorting and filtering
- **Modals**: Dialog and Sheet components
- **Date Picker**: Calendar component with date-fns
- **Currency Input**: Specialized input for monetary values
- **Toast Notifications**: Sonner for user feedback

## 🔐 Authentication

Authentication is handled by Clerk, providing:
- Sign up/Sign in flows
- User session management
- Protected routes
- User profile management

## 📊 Data Management

- **React Query**: Handles server state, caching, and synchronization
- **Optimistic Updates**: Immediate UI updates with rollback on failure
- **Form Validation**: Zod schemas for type-safe form validation
- **CSV Import**: Papa Parse for bulk transaction imports

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

Make sure to:
1. Set up your PostgreSQL database
2. Configure environment variables
3. Run database migrations
4. Set up Clerk authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Clerk](https://clerk.com/) - Authentication platform
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework