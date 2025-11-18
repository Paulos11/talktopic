export const SITE_NAME = "TalkTopic Admin";
export const SITE_DESCRIPTION = "Admin Dashboard for TalkTopic";

export const USER_ROLES = ["admin", "user", "moderator"] as const;
export const USER_STATUSES = ["active", "inactive", "pending"] as const;
export const POST_STATUSES = ["published", "draft", "archived"] as const;
export const COMMENT_STATUSES = ["approved", "pending", "spam"] as const;

export const NOTIFICATION_TYPES = ["info", "success", "warning", "error"] as const;

export const ITEMS_PER_PAGE = 10;
export const CHART_COLORS = [
  "#3b82f6", // blue
  "#10b981", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
];

export const CATEGORIES = [
  "Technology",
  "Business",
  "Health",
  "Entertainment",
  "Sports",
  "Politics",
  "Science",
  "Education",
  "Travel",
  "Food",
] as const;

export const TIMEZONES = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Paris",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Australia/Sydney",
] as const;

export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ar", name: "Arabic" },
] as const;

export const DATE_FORMATS = {
  short: "MMM d, yyyy",
  long: "MMMM d, yyyy",
  full: "EEEE, MMMM d, yyyy",
  time: "h:mm a",
  datetime: "MMM d, yyyy h:mm a",
} as const;
