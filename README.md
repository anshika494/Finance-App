# 💰 Finance App

A comprehensive, full-stack personal finance management application built with Next.js 15 and React 19, featuring advanced data visualization, transaction management, and real-time analytics with a modern, responsive interface.

## ✨ Key Features

### 📊 **Advanced Data Visualization**
- **Interactive Charts**: Multiple chart types (Area, Bar, Line, Pie, Radar, Radial)
- **Financial Dashboard**: Real-time overview of income vs expenses
- **Spending Analytics**: Category-wise spending breakdown with pie charts
- **Trend Analysis**: Historical data visualization with customizable time periods

### 💳 **Account & Transaction Management**
- **Multi-Account Support**: Create and manage multiple financial accounts
- **Smart Transaction Tracking**: Add, edit, categorize, and bulk manage transactions
- **CSV Import/Export**: Seamless bulk import of transactions from CSV files
- **Advanced Filtering**: Filter by date ranges, accounts, categories, and amounts
- **Search & Sort**: Powerful search capabilities with sortable data tables

### 🏷️ **Category Management**
- **Custom Categories**: Create and organize transactions with personalized categories
- **Category Analytics**: Track spending patterns by category
- **Bulk Categorization**: Efficiently categorize multiple transactions

### 🔐 **Security & Authentication**
- **Secure Authentication**: Powered by Clerk with social login options
- **User Session Management**: Persistent and secure user sessions
- **Protected Routes**: Role-based access control

### 🎨 **Modern User Experience**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme switching with next-themes
- **Real-time Updates**: Optimistic UI updates with TanStack Query
- **Loading States**: Skeleton loaders and smooth transitions
- **Toast Notifications**: User-friendly feedback with Sonner

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Turbopack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS 4** - Utility-first CSS framework with latest features
- **shadcn/ui** - Beautiful, accessible UI components built on Radix UI
- **React Hook Form** - Performant forms with easy validation
- **Zod** - Runtime type validation and schema parsing
- **TanStack Query** - Powerful data fetching, caching, and synchronization
- **Zustand** - Lightweight state management
- **Recharts** - Composable charting library for React
- **React PapaParse** - CSV parsing and processing
- **Lucide React** - Beautiful, customizable icons

### Backend & Database
- **Hono** - Ultra-fast web framework for API routes
- **Drizzle ORM** - Type-safe SQL ORM with excellent TypeScript support
- **PostgreSQL** - Robust relational database (Neon serverless)
- **Clerk** - Complete authentication and user management
- **@neondatabase/serverless** - Serverless PostgreSQL driver

### Development & Build Tools
- **Drizzle Kit** - Database migrations and schema management
- **ESLint 9** - Code linting with latest configuration
- **TypeScript 5** - Latest TypeScript features
- **PostCSS** - CSS processing and optimization
- **tsx** - TypeScript execution for scripts

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
   
   # Seed database with sample data (optional)
   npm run db:seed
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
├── app/                    # Next.js 15 App Router
│   ├── (auth)/            # Authentication pages (sign-in, sign-up)
│   ├── (dashboard)/       # Protected dashboard pages
│   │   ├── accounts/      # Account management pages
│   │   ├── categories/    # Category management pages
│   │   ├── transactions/  # Transaction management pages
│   │   └── page.tsx       # Main dashboard with charts
│   ├── api/               # API routes with Hono
│   │   └── [[...route]]/  # Catch-all API routes
│   ├── globals.css        # Global Tailwind styles
│   └── layout.tsx         # Root layout with providers
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui base components
│   ├── chart.tsx         # Chart component with variants
│   ├── data-*.tsx        # Dashboard data components
│   └── *.tsx             # Feature-specific components
├── db/                   # Database configuration
│   ├── drizzle.ts        # Drizzle client setup
│   └── schema.ts         # Database schema definitions
├── drizzle/              # Database migrations and metadata
│   ├── *.sql             # Migration files
│   ├── schema.ts         # Generated schema
│   └── meta/             # Migration metadata
├── features/             # Feature-based architecture
│   ├── accounts/         # Account management (API, components, hooks)
│   ├── categories/       # Category management (API, components, hooks)
│   ├── summary/          # Dashboard summary (API, hooks)
│   └── transactions/     # Transaction management (API, components, hooks)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── providers/            # React context providers
│   ├── query-provider.tsx # TanStack Query provider
│   └── sheet-provider.tsx # Sheet state provider
├── scripts/              # Database utility scripts
│   ├── migrate.ts        # Migration runner
│   └── seed.ts           # Database seeding
└── public/               # Static assets
```

## 🏗️ Architecture & Performance

### Modern Architecture
- **App Router**: Leveraging Next.js 15's latest App Router for optimal performance
- **Feature-Based Structure**: Organized by features rather than file types for better maintainability
- **API Routes**: Hono-powered API with type-safe route handling
- **Component Architecture**: Reusable, composable components with clear separation of concerns

### Performance Optimizations
- **Turbopack**: Ultra-fast bundler for development (5x faster than Webpack)
- **Server Components**: Reduced client-side JavaScript with React Server Components
- **Streaming**: Progressive page loading with React 18 Suspense
- **Optimistic Updates**: Instant UI feedback while background requests process
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Image Optimization**: Next.js automatic image optimization and lazy loading

### Developer Experience
- **TypeScript**: Full type safety across the entire application
- **Hot Reload**: Instant feedback during development with Turbopack
- **Database Studio**: Visual database management with Drizzle Studio
- **Type-Safe APIs**: End-to-end type safety from database to frontend
- **Modern Tooling**: Latest versions of all major dependencies

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Drizzle Studio

## 🎨 UI Components & Features

The application leverages a comprehensive set of modern UI components:

### Core Components
- **Data Tables**: Advanced tables with TanStack Table featuring sorting, filtering, and pagination
- **Interactive Charts**: Six different chart variants (Area, Bar, Line, Pie, Radar, Radial) using Recharts
- **Forms**: React Hook Form integration with Zod validation and error handling
- **Modals & Sheets**: Dialog and Sheet components for overlays and side panels
- **Date Picker**: Advanced calendar component with date-fns integration
- **Currency Input**: Specialized input with formatting for monetary values
- **Toast Notifications**: Beautiful notifications with Sonner

### Advanced Features
- **CSV Upload**: Drag-and-drop CSV import with data validation and preview
- **Data Visualization**: Real-time charts with customizable views and filters
- **Responsive Tables**: Mobile-optimized data tables with horizontal scrolling
- **Loading States**: Skeleton loaders and loading indicators throughout the app
- **Theme Support**: Dark/light mode toggle with system preference detection
- **Accessibility**: Full keyboard navigation and screen reader support

## 🔐 Authentication

Authentication is handled by Clerk, providing:
- Sign up/Sign in flows
- User session management
- Protected routes
- User profile management

## 📊 Data Management & Analytics

### State Management
- **TanStack Query**: Advanced server state management with caching, background updates, and error handling
- **Optimistic Updates**: Immediate UI feedback with automatic rollback on failure
- **Zustand**: Lightweight client-side state management for UI state
- **Form State**: React Hook Form with Zod validation for type-safe forms

### Data Processing
- **CSV Import/Export**: Papa Parse integration for bulk transaction processing
- **Data Transformation**: Real-time data aggregation and formatting
- **Financial Calculations**: Automatic income/expense calculations and categorization
- **Date Handling**: Advanced date parsing and formatting with date-fns

### Analytics Features
- **Summary Dashboard**: Real-time financial overview with key metrics
- **Trend Analysis**: Historical data visualization with multiple time periods
- **Category Insights**: Spending breakdown by categories with visual representations
- **Account Comparisons**: Multi-account analysis and reporting

## 🚀 Deployment

The application is optimized for modern deployment platforms:

### Recommended Platforms
- **Vercel** (recommended) - Seamless Next.js deployment with edge functions
- **Netlify** - JAMstack deployment with serverless functions
- **Railway** - Full-stack deployment with PostgreSQL hosting
- **Heroku** - Traditional cloud platform deployment

### Deployment Checklist
1. **Database Setup**: Configure PostgreSQL database (recommend Neon for serverless)
2. **Environment Variables**: Set up all required environment variables
3. **Database Migration**: Run `npm run db:migrate` to set up schema
4. **Authentication**: Configure Clerk authentication keys and URLs
5. **Build Optimization**: Ensure all dependencies are properly installed
6. **Performance**: Enable Next.js optimizations (Image optimization, etc.)

### Environment Variables Required
```env
# Database
DATABASE_URL=your_postgresql_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📸 Screenshots & Demo

> **Note**: Add screenshots of your application here to showcase the key features:
> - Dashboard with charts and analytics
> - Transaction management interface
> - Account and category management
> - CSV import functionality
> - Mobile responsive design

## 🎯 Roadmap

### Upcoming Features
- [ ] **Budget Management**: Set and track budgets by category
- [ ] **Recurring Transactions**: Automated recurring income/expense tracking
- [ ] **Financial Goals**: Set and monitor savings goals
- [ ] **Export Reports**: PDF/Excel export functionality
- [ ] **Multi-Currency**: Support for multiple currencies
- [ ] **Bank Integration**: Connect with bank APIs for automatic transaction import
- [ ] **Mobile App**: React Native mobile application
- [ ] **Advanced Analytics**: Machine learning insights and predictions

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- [Next.js 15](https://nextjs.org/) - The React framework for production
- [React 19](https://react.dev/) - A JavaScript library for building user interfaces
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components built with Radix UI
- [Clerk](https://clerk.com/) - Complete authentication and user management platform
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM that's production ready
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) - Powerful data synchronization for React
- [Recharts](https://recharts.org/) - A composable charting library built on React components
- [Hono](https://hono.dev/) - Ultrafast web framework for the Edges
- [Neon](https://neon.tech/) - Serverless PostgreSQL platform

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ using Next.js 15 and React 19</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>