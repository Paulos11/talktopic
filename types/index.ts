// ============================================
// QUESTION & ANSWER PLATFORM TYPES
// ============================================

export interface Question {
  id: string;
  title: string;
  slug: string;
  question: string;
  answer: string;
  category: Category;
  tags: string[];
  relatedQuestions: string[];
  views: number;
  helpful: number;
  notHelpful: number;
  featured: boolean;
  status: "published" | "draft" | "pending";
  seoTitle?: string;
  seoDescription?: string;
  createdAt: Date;
  updatedAt: Date;
  author?: User;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  color?: string;
  questionCount: number;
  order: number;
  parentId?: string;
  children?: Category[];
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  questionCount: number;
}

export interface SearchResult {
  questions: Question[];
  totalResults: number;
  query: string;
}

// ============================================
// USER & ADMIN TYPES
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator";
  status: "active" | "inactive" | "pending";
  avatar?: string;
  createdAt: Date;
  lastActive: Date;
}

export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  newUsers: number;
  returningUsers: number;
}

export interface DashboardStats {
  totalQuestions: number;
  totalCategories: number;
  totalViews: number;
  pendingQuestions: number;
  questionGrowth: number;
  viewGrowth: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: Date;
}

export interface Settings {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  adminEmail: string;
  timezone: string;
  language: string;
  theme: "light" | "dark" | "system";
  emailNotifications: boolean;
  pushNotifications: boolean;
  maintenanceMode: boolean;
}

export type SortDirection = "asc" | "desc";

export interface TableFilter {
  field: string;
  value: string | string[];
  operator: "equals" | "contains" | "in" | "gt" | "lt";
}

export interface PaginationData {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: any;
}
