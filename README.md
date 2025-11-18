# TalkTopic Admin Dashboard

A comprehensive, modern admin dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This full-featured admin panel provides complete management capabilities for a content platform.

## Features

### 📊 Dashboard & Analytics
- **Overview Dashboard**: Real-time statistics, charts, and recent activity
- **Advanced Analytics**: User growth trends, traffic sources, content performance metrics
- **Interactive Charts**: Built with Recharts for beautiful data visualization
- **Key Metrics**: Page views, unique visitors, bounce rate, session duration

### 👥 User Management
- **Complete CRUD Operations**: Create, read, update, and delete users
- **Advanced Filtering**: Filter by role, status, and search functionality
- **Pagination**: Navigate through large datasets efficiently
- **User Roles**: Admin, Moderator, and User roles with visual badges
- **Status Management**: Active, Inactive, and Pending user states

### 📝 Content Management
- **Post Management**: Full CRUD for blog posts and content
- **Category Organization**: Organize content across 10+ categories
- **Status Workflow**: Draft, Published, and Archived states
- **Rich Statistics**: Track views, likes, and comments per post
- **Bulk Operations**: Manage multiple posts at once

### ⚙️ Settings & Configuration
- **General Settings**: Site name, description, URL, timezone, language
- **Notification Preferences**: Email, push, and system notifications
- **Security Controls**: Two-factor auth, session timeout, IP whitelist
- **Maintenance Mode**: Toggle site maintenance with one click
- **Email Configuration**: SMTP settings for transactional emails

### 🔔 Notifications System
- **Real-time Updates**: Stay informed of platform activities
- **Type Filtering**: Info, Success, Warning, and Error notifications
- **Read/Unread Management**: Mark individual or all as read
- **Detailed Stats**: Track notification counts by type

### 👤 Profile Management
- **Personal Information**: Update name, email, bio, phone, location
- **Avatar Management**: Upload and manage profile pictures
- **Password Security**: Change password with validation
- **Activity Log**: Track recent administrative actions

### 🎨 Design & UX
- **Dark/Light Mode**: System-aware theme with manual toggle
- **Fully Responsive**: Perfect on desktop, tablet, and mobile
- **Professional UI**: Consistent design system with proper spacing and alignment
- **Smooth Animations**: Subtle transitions and loading states
- **Empty States**: Helpful messages when no data is available
- **Loading States**: Visual feedback during data operations

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **Server Components**: Optimized performance with React Server Components
- **Modular Architecture**: Reusable components and utilities
- **Clean Code**: Well-organized file structure and naming conventions
- **Accessible**: WCAG-compliant UI components
- **Optimized**: Fast page loads and smooth interactions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Forms**: React Hook Form
- **Validation**: Zod
- **Notifications**: Sonner

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd talktopic
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The application will automatically redirect to the admin dashboard at `/admin`.

## Project Structure

```
talktopic/
├── app/
│   ├── admin/              # Admin pages
│   │   ├── analytics/      # Analytics & reports
│   │   ├── content/        # Content management
│   │   ├── notifications/  # Notifications center
│   │   ├── profile/        # User profile
│   │   ├── settings/       # Settings & configuration
│   │   ├── users/          # User management
│   │   ├── layout.tsx      # Admin layout with sidebar
│   │   └── page.tsx        # Dashboard overview
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home (redirects to admin)
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── empty-state.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── loading.tsx
│   │   ├── modal.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   └── textarea.tsx
│   ├── sidebar.tsx         # Navigation sidebar
│   ├── stat-card.tsx       # Statistics card
│   ├── theme-provider.tsx  # Theme context
│   └── top-nav.tsx         # Top navigation bar
├── lib/
│   ├── constants.ts        # App constants
│   ├── data.ts            # Mock data
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript types
└── tailwind.config.ts     # Tailwind configuration
```

## Available Pages

- **Dashboard** (`/admin`) - Overview with stats and charts
- **Users** (`/admin/users`) - User management with CRUD
- **Content** (`/admin/content`) - Post management
- **Analytics** (`/admin/analytics`) - Detailed analytics and reports
- **Notifications** (`/admin/notifications`) - Notification center
- **Profile** (`/admin/profile`) - User profile management
- **Settings** (`/admin/settings`) - Application settings

## Features in Detail

### Responsive Design
The entire dashboard is fully responsive:
- **Desktop**: Full sidebar navigation with expanded content
- **Tablet**: Collapsible sidebar with optimized layouts
- **Mobile**: Hamburger menu with touch-optimized interactions

### Theme System
- Light and dark modes with smooth transitions
- System preference detection
- Persistent theme selection
- Custom color variables for easy customization

### Data Tables
All data tables include:
- Search functionality
- Multiple filter options
- Sortable columns
- Pagination controls
- Row actions (edit, delete)
- Empty states

## Customization

### Colors
Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... more variables */
}
```

### Mock Data
Replace mock data in `lib/data.ts` with real API calls to connect to your backend.

### Components
All UI components are in `components/ui/` and can be easily customized or extended.

## Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server
```bash
npm start
# or
yarn start
# or
pnpm start
```

### Deploy
Deploy to Vercel, Netlify, or any platform that supports Next.js:
```bash
vercel deploy
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and TypeScript
# talktopic
