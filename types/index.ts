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

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  category: string;
  status: "published" | "draft" | "archived";
  views: number;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  author: User;
  content: string;
  status: "approved" | "pending" | "spam";
  createdAt: Date;
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
  totalUsers: number;
  totalPosts: number;
  totalComments: number;
  totalRevenue: number;
  userGrowth: number;
  postGrowth: number;
  commentGrowth: number;
  revenueGrowth: number;
}

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: any;
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
