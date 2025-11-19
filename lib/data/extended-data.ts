import type { Language, NetworkSite, FAQ, Testimonial, BlogPost } from "@/types";

// ============================================
// LANGUAGES
// ============================================
export const supportedLanguages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", enabled: true },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", enabled: true },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", enabled: true },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", enabled: true },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", enabled: true },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳", enabled: true },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", enabled: true },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", enabled: true },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", enabled: true },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", enabled: true },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", enabled: true },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", enabled: true },
];

// ============================================
// NETWORK SITES
// ============================================
export const networkSites: NetworkSite[] = [
  {
    id: "1",
    name: "Bible Reference",
    description: "In-depth Bible commentary and verse-by-verse analysis",
    url: "/bible-reference",
    icon: "📖",
    category: "reference",
  },
  {
    id: "2",
    name: "Compelling Truth",
    description: "Exploring Christian worldview and apologetics",
    url: "/compelling-truth",
    icon: "🎯",
    category: "main",
  },
  {
    id: "3",
    name: "Truth Podcast",
    description: "Listen to biblical teaching and Q&A sessions",
    url: "/podcast",
    icon: "🎙️",
    category: "main",
  },
  {
    id: "4",
    name: "412 Teens",
    description: "Biblical answers for teenagers and youth",
    url: "/412teens",
    icon: "👥",
    category: "youth",
  },
  {
    id: "5",
    name: "GQ Kidz",
    description: "Teaching children about God and the Bible",
    url: "/gqkidz",
    icon: "🧒",
    category: "kids",
  },
];

// ============================================
// FAQ
// ============================================
export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I submit a question?",
    answer: "You can submit your question through our contact form. Our team of biblical scholars will review it and provide a comprehensive answer within 3-5 business days.",
    category: "General",
    order: 1,
  },
  {
    id: "2",
    question: "Are all answers based on the Bible?",
    answer: "Yes, all our answers are firmly rooted in biblical teaching. We use Scripture as our primary source and reference multiple Bible translations to ensure accuracy.",
    category: "General",
    order: 2,
  },
  {
    id: "3",
    question: "Can I translate content into my language?",
    answer: "We currently offer content in 100+ languages. If you'd like to help translate content into a language not yet available, please contact us.",
    category: "General",
    order: 3,
  },
  {
    id: "4",
    question: "How can I support this ministry?",
    answer: "You can support us through prayer, financial donations, or by sharing our content with others who may benefit from biblical answers to their questions.",
    category: "Support",
    order: 4,
  },
  {
    id: "5",
    question: "Do you offer resources for youth and children?",
    answer: "Yes! Check out our network sites: 412 Teens for teenagers and GQ Kidz for children. Both sites provide age-appropriate biblical teaching.",
    category: "Resources",
    order: 5,
  },
  {
    id: "6",
    question: "Can I use your content for my church or ministry?",
    answer: "Yes, our content is available for non-commercial use. Please provide attribution and link back to the original source.",
    category: "Usage",
    order: 6,
  },
];

// ============================================
// TESTIMONIALS
// ============================================
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "Texas, USA",
    content: "This site helped me understand the Trinity in a way I never had before. The clear, biblical explanations changed my faith journey.",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "California, USA",
    content: "As a new Christian, I had so many questions. This platform provided answers that were both thorough and easy to understand.",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    location: "Florida, USA",
    content: "The scriptural references and related questions feature helped me dive deeper into topics I was curious about. Highly recommend!",
    rating: 5,
    featured: true,
    createdAt: new Date("2024-03-10"),
  },
];

// ============================================
// BLOG POSTS
// ============================================
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Prayer in the Modern World",
    slug: "understanding-prayer-modern-world",
    excerpt: "How can we maintain a vibrant prayer life in our fast-paced, technology-driven world?",
    content: "Prayer is the foundation of our relationship with God. In today's busy world, it's easy to let prayer fall by the wayside. This article explores practical ways to deepen your prayer life and maintain consistent communication with God...",
    category: "Prayer",
    tags: ["prayer", "spiritual-growth", "daily-devotion"],
    author: {
      id: "1",
      name: "Dr. John Smith",
      email: "john@example.com",
      role: "admin",
      status: "active",
      createdAt: new Date("2023-01-01"),
      lastActive: new Date(),
    },
    views: 12500,
    featured: true,
    status: "published",
    seoTitle: "Understanding Prayer in the Modern World | Biblical Guide",
    seoDescription: "Discover practical ways to deepen your prayer life and maintain consistent communication with God in today's busy world.",
    createdAt: new Date("2024-10-15"),
    updatedAt: new Date("2024-10-15"),
  },
  {
    id: "2",
    title: "The Historical Reliability of the Bible",
    slug: "historical-reliability-bible",
    excerpt: "Examining the archaeological and historical evidence supporting the Bible's accuracy.",
    content: "The Bible has been scrutinized more than any other ancient text. This article examines the archaeological discoveries, manuscript evidence, and historical corroboration that supports the Bible's reliability...",
    category: "Bible Study",
    tags: ["bible", "archaeology", "apologetics"],
    author: {
      id: "1",
      name: "Dr. John Smith",
      email: "john@example.com",
      role: "admin",
      status: "active",
      createdAt: new Date("2023-01-01"),
      lastActive: new Date(),
    },
    views: 18200,
    featured: true,
    status: "published",
    createdAt: new Date("2024-09-20"),
    updatedAt: new Date("2024-09-20"),
  },
  {
    id: "3",
    title: "Finding Hope in Difficult Times",
    slug: "finding-hope-difficult-times",
    excerpt: "Biblical encouragement for those facing trials and challenges.",
    content: "Life brings many challenges, but the Bible offers hope and comfort in every situation. This article explores biblical principles for finding peace and strength during difficult seasons...",
    category: "Christian Living",
    tags: ["hope", "encouragement", "faith"],
    author: {
      id: "2",
      name: "Pastor Sarah Williams",
      email: "sarah@example.com",
      role: "admin",
      status: "active",
      createdAt: new Date("2023-01-01"),
      lastActive: new Date(),
    },
    views: 9800,
    featured: false,
    status: "published",
    createdAt: new Date("2024-11-01"),
    updatedAt: new Date("2024-11-01"),
  },
];

// Helper functions
export function getFeaturedBlogPosts() {
  return mockBlogPosts.filter((post) => post.featured && post.status === "published");
}

export function getBlogPostBySlug(slug: string) {
  return mockBlogPosts.find((post) => post.slug === slug);
}

export function getFeaturedTestimonials() {
  return testimonials.filter((t) => t.featured);
}

export function getFAQsByCategory(category?: string) {
  if (category) {
    return faqs.filter((faq) => faq.category === category).sort((a, b) => a.order - b.order);
  }
  return faqs.sort((a, b) => a.order - b.order);
}
