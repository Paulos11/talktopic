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
  questionOfTheDay?: boolean;
  status: "published" | "draft" | "pending";
  seoTitle?: string;
  seoDescription?: string;
  scriptureReferences?: ScriptureReference[];
  audioUrl?: string;
  videoUrl?: string;
  translations?: { [languageCode: string]: QuestionTranslation };
  createdAt: Date;
  updatedAt: Date;
  author?: User;
}

export interface QuestionTranslation {
  title: string;
  question: string;
  answer: string;
}

export interface ScriptureReference {
  book: string;
  chapter: number;
  verseStart: number;
  verseEnd?: number;
  text: string;
  version: string; // e.g., "NIV", "KJV", "ESV"
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

// ============================================
// NEW FEATURES TYPES
// ============================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  author: User;
  views: number;
  featured: boolean;
  status: "published" | "draft" | "pending";
  seoTitle?: string;
  seoDescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Language {
  code: string; // e.g., "en", "es", "fr"
  name: string; // e.g., "English", "Español", "Français"
  nativeName: string; // e.g., "English", "Español", "Français"
  flag?: string; // emoji or icon
  enabled: boolean;
}

export interface NetworkSite {
  id: string;
  name: string;
  description: string;
  url: string;
  icon?: string;
  category: "main" | "youth" | "kids" | "reference" | "other";
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: Date;
  confirmed: boolean;
  preferences: {
    daily: boolean;
    weekly: boolean;
    questionOfTheDay: boolean;
  };
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  content: string;
  rating?: number;
  featured: boolean;
  createdAt: Date;
}
