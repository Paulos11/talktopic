import type { User, Notification, ChartData, Analytics } from "@/types";

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "active",
    createdAt: new Date("2024-01-15"),
    lastActive: new Date("2024-11-18"),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "moderator",
    status: "active",
    createdAt: new Date("2024-02-20"),
    lastActive: new Date("2024-11-17"),
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    status: "active",
    createdAt: new Date("2024-03-10"),
    lastActive: new Date("2024-11-16"),
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "user",
    status: "pending",
    createdAt: new Date("2024-11-15"),
    lastActive: new Date("2024-11-15"),
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "user",
    status: "inactive",
    createdAt: new Date("2024-01-05"),
    lastActive: new Date("2024-09-10"),
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana@example.com",
    role: "moderator",
    status: "active",
    createdAt: new Date("2024-04-12"),
    lastActive: new Date("2024-11-18"),
  },
  {
    id: "7",
    name: "Edward Norton",
    email: "edward@example.com",
    role: "user",
    status: "active",
    createdAt: new Date("2024-05-18"),
    lastActive: new Date("2024-11-17"),
  },
  {
    id: "8",
    name: "Fiona Green",
    email: "fiona@example.com",
    role: "user",
    status: "active",
    createdAt: new Date("2024-06-22"),
    lastActive: new Date("2024-11-18"),
  },
];

// Mock Posts Data - Removed (using Q&A system now)
export const mockPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    content: "Next.js 14 brings amazing new features...",
    author: mockUsers[0],
    category: "Technology",
    status: "published",
    views: 1234,
    likes: 89,
    comments: 23,
    createdAt: new Date("2024-10-15"),
    updatedAt: new Date("2024-10-16"),
  },
  {
    id: "2",
    title: "The Future of AI in Business",
    content: "Artificial Intelligence is transforming...",
    author: mockUsers[1],
    category: "Business",
    status: "published",
    views: 2345,
    likes: 156,
    comments: 45,
    createdAt: new Date("2024-10-20"),
    updatedAt: new Date("2024-10-21"),
  },
  {
    id: "3",
    title: "Healthy Living Tips for 2024",
    content: "Start your health journey with these tips...",
    author: mockUsers[2],
    category: "Health",
    status: "draft",
    views: 0,
    likes: 0,
    comments: 0,
    createdAt: new Date("2024-11-10"),
    updatedAt: new Date("2024-11-12"),
  },
  {
    id: "4",
    title: "Top Travel Destinations",
    content: "Explore the world's most beautiful places...",
    author: mockUsers[5],
    category: "Travel",
    status: "published",
    views: 3456,
    likes: 234,
    comments: 67,
    createdAt: new Date("2024-09-05"),
    updatedAt: new Date("2024-09-06"),
  },
  {
    id: "5",
    title: "Understanding React Server Components",
    content: "Server components are changing how we build...",
    author: mockUsers[0],
    category: "Technology",
    status: "published",
    views: 1890,
    likes: 123,
    comments: 34,
    createdAt: new Date("2024-11-01"),
    updatedAt: new Date("2024-11-02"),
  },
];

// Mock Comments Data - Removed (using Q&A system now)
export const mockComments = [
  {
    id: "1",
    postId: "1",
    author: mockUsers[2],
    content: "Great article! Very helpful.",
    status: "approved",
    createdAt: new Date("2024-10-16"),
  },
  {
    id: "2",
    postId: "1",
    author: mockUsers[3],
    content: "Thanks for sharing this information.",
    status: "approved",
    createdAt: new Date("2024-10-17"),
  },
  {
    id: "3",
    postId: "2",
    author: mockUsers[4],
    content: "Interesting perspective on AI.",
    status: "pending",
    createdAt: new Date("2024-10-21"),
  },
  {
    id: "4",
    postId: "2",
    author: mockUsers[6],
    content: "This is spam content...",
    status: "spam",
    createdAt: new Date("2024-10-22"),
  },
];

// Mock Notifications Data
export const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "New User Registration",
    message: "Alice Williams has registered a new account",
    type: "info",
    read: false,
    createdAt: new Date("2024-11-15"),
  },
  {
    id: "2",
    title: "Server Maintenance Scheduled",
    message: "Scheduled maintenance on Nov 20, 2024",
    type: "warning",
    read: false,
    createdAt: new Date("2024-11-14"),
  },
  {
    id: "3",
    title: "Backup Completed",
    message: "Database backup completed successfully",
    type: "success",
    read: true,
    createdAt: new Date("2024-11-13"),
  },
  {
    id: "4",
    title: "High Memory Usage",
    message: "Server memory usage exceeded 80%",
    type: "error",
    read: false,
    createdAt: new Date("2024-11-12"),
  },
  {
    id: "5",
    title: "New Comment Pending",
    message: "A new comment is waiting for approval",
    type: "info",
    read: true,
    createdAt: new Date("2024-11-11"),
  },
];

// Mock Dashboard Stats
export const mockDashboardStats = {
  totalQuestions: 892,
  totalCategories: 8,
  totalViews: 245678,
  pendingQuestions: 12,
  questionGrowth: 8.3,
  viewGrowth: 15.7,
};

// Mock Analytics Data
export const mockAnalytics: Analytics = {
  pageViews: 156789,
  uniqueVisitors: 45678,
  bounceRate: 42.3,
  avgSessionDuration: 245, // seconds
  newUsers: 12345,
  returningUsers: 33333,
};

// Mock Chart Data - User Growth
export const mockUserGrowthData: ChartData[] = [
  { name: "Jan", users: 120 },
  { name: "Feb", users: 198 },
  { name: "Mar", users: 245 },
  { name: "Apr", users: 312 },
  { name: "May", users: 389 },
  { name: "Jun", users: 467 },
  { name: "Jul", users: 543 },
  { name: "Aug", users: 621 },
  { name: "Sep", users: 702 },
  { name: "Oct", users: 798 },
  { name: "Nov", users: 1247 },
];

// Mock Chart Data - Content Performance
export const mockContentPerformanceData: ChartData[] = [
  { name: "Technology", posts: 245, views: 12345 },
  { name: "Business", posts: 189, views: 9876 },
  { name: "Health", posts: 156, views: 7654 },
  { name: "Travel", posts: 134, views: 6543 },
  { name: "Food", posts: 98, views: 4321 },
  { name: "Sports", posts: 70, views: 3210 },
];

// Mock Chart Data - Revenue
export const mockRevenueData: ChartData[] = [
  { name: "Jan", revenue: 3200 },
  { name: "Feb", revenue: 4100 },
  { name: "Mar", revenue: 3800 },
  { name: "Apr", revenue: 5200 },
  { name: "May", revenue: 6100 },
  { name: "Jun", revenue: 5800 },
  { name: "Jul", revenue: 7200 },
  { name: "Aug", revenue: 8400 },
  { name: "Sep", revenue: 7900 },
  { name: "Oct", revenue: 9200 },
  { name: "Nov", revenue: 10500 },
];

// Mock Chart Data - Traffic Sources
export const mockTrafficSourcesData: ChartData[] = [
  { name: "Direct", value: 4200 },
  { name: "Organic Search", value: 8900 },
  { name: "Social Media", value: 5600 },
  { name: "Referral", value: 3400 },
  { name: "Email", value: 2100 },
];

// Mock Recent Activity
export const mockRecentActivity = [
  {
    id: "1",
    user: "John Doe",
    action: "created a new post",
    target: "Getting Started with Next.js 14",
    timestamp: new Date("2024-11-18T10:30:00"),
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "approved comment",
    target: "on The Future of AI in Business",
    timestamp: new Date("2024-11-18T09:15:00"),
  },
  {
    id: "3",
    user: "Diana Prince",
    action: "updated user role",
    target: "for Bob Johnson",
    timestamp: new Date("2024-11-18T08:45:00"),
  },
  {
    id: "4",
    user: "Alice Williams",
    action: "registered account",
    target: "",
    timestamp: new Date("2024-11-17T16:20:00"),
  },
  {
    id: "5",
    user: "John Doe",
    action: "deleted post",
    target: "Outdated Technology Article",
    timestamp: new Date("2024-11-17T14:10:00"),
  },
];
