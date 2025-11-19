import type { Question, Category, User } from "@/types";

// Mock admin user
const adminUser: User = {
  id: "1",
  name: "Admin",
  email: "admin@talktopic.com",
  role: "admin",
  status: "active",
  createdAt: new Date("2024-01-01"),
  lastActive: new Date(),
};

// Categories for Q&A
export const mockCategories: Category[] = [
  {
    id: "1",
    name: "God",
    slug: "god",
    description: "Questions about God, His nature, and attributes",
    icon: "👑",
    color: "#3b82f6",
    questionCount: 245,
    order: 1,
  },
  {
    id: "2",
    name: "Jesus Christ",
    slug: "jesus-christ",
    description: "Questions about Jesus, His life, death, and resurrection",
    icon: "✝️",
    color: "#ef4444",
    questionCount: 312,
    order: 2,
  },
  {
    id: "3",
    name: "The Bible",
    slug: "bible",
    description: "Questions about Scripture, interpretation, and application",
    icon: "📖",
    color: "#10b981",
    questionCount: 458,
    order: 3,
  },
  {
    id: "4",
    name: "Salvation",
    slug: "salvation",
    description: "Questions about being saved, grace, and eternal life",
    icon: "🕊️",
    color: "#f59e0b",
    questionCount: 189,
    order: 4,
  },
  {
    id: "5",
    name: "The Holy Spirit",
    slug: "holy-spirit",
    description: "Questions about the Holy Spirit and spiritual gifts",
    icon: "🔥",
    color: "#8b5cf6",
    questionCount: 156,
    order: 5,
  },
  {
    id: "6",
    name: "Prayer",
    slug: "prayer",
    description: "Questions about prayer, worship, and communion with God",
    icon: "🙏",
    color: "#ec4899",
    questionCount: 134,
    order: 6,
  },
  {
    id: "7",
    name: "Christian Living",
    slug: "christian-living",
    description: "Questions about daily life, ethics, and discipleship",
    icon: "🌟",
    color: "#14b8a6",
    questionCount: 289,
    order: 7,
  },
  {
    id: "8",
    name: "Heaven and Hell",
    slug: "heaven-hell",
    description: "Questions about eternity, afterlife, and judgment",
    icon: "☁️",
    color: "#6366f1",
    questionCount: 167,
    order: 8,
  },
];

// Sample Questions
export const mockQuestions: Question[] = [
  {
    id: "1",
    title: "Who is God?",
    slug: "who-is-god",
    question: "Who is God? What is God like?",
    answer: `God is the eternal, supreme being who created and sustains all things. The Bible reveals God as the one true God who exists in three persons: Father, Son, and Holy Spirit (the Trinity).

### God's Nature

God is described in Scripture as:
- **Eternal**: He has no beginning or end (Psalm 90:2)
- **Omnipotent**: All-powerful, able to do anything consistent with His nature (Jeremiah 32:17)
- **Omniscient**: All-knowing, with perfect knowledge of all things (Psalm 139:1-6)
- **Omnipresent**: Present everywhere at all times (Psalm 139:7-12)
- **Holy**: Perfectly pure and set apart from sin (Isaiah 6:3)
- **Just**: Perfectly fair and righteous in all His ways (Deuteronomy 32:4)
- **Loving**: The very essence of love (1 John 4:8)

### Knowing God

We can know God personally through Jesus Christ, who said, "I am the way, the truth, and the life. No one comes to the Father except through Me" (John 14:6). God desires a relationship with each of us and has made this possible through faith in His Son.

### Conclusion

God is not a distant, impersonal force but a loving Father who created us for relationship with Him. Through studying His Word, prayer, and walking in obedience to His commands, we can know Him more deeply every day.`,
    category: mockCategories[0],
    tags: ["God", "Nature of God", "Trinity", "Attributes"],
    relatedQuestions: ["2", "3", "4"],
    views: 15432,
    helpful: 1247,
    notHelpful: 23,
    featured: true,
    questionOfTheDay: true,
    status: "published",
    seoTitle: "Who is God? Understanding God's Nature and Character",
    seoDescription: "Discover who God is according to the Bible. Learn about God's nature, attributes, and how you can know Him personally.",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    author: adminUser,
  },
  {
    id: "2",
    title: "What is the Trinity?",
    slug: "what-is-the-trinity",
    question: "What is the Trinity? How can God be three persons in one?",
    answer: `The Trinity is the Christian doctrine that God exists eternally as three distinct persons—Father, Son, and Holy Spirit—yet is one God.

### Understanding the Trinity

The Bible teaches:
1. **There is only one God** (Deuteronomy 6:4; 1 Timothy 2:5)
2. **The Father is God** (John 6:27; Romans 1:7)
3. **Jesus (the Son) is God** (John 1:1, 14; Romans 9:5; Hebrews 1:8)
4. **The Holy Spirit is God** (Acts 5:3-4; 1 Corinthians 3:16)

### Not Three Gods

The Trinity does not mean three separate gods (that would be polytheism). Rather, it means one God who exists in three persons who are co-equal, co-eternal, and of the same essence.

### Mystery and Faith

While the Trinity is difficult to fully comprehend, it is clearly taught in Scripture. We see all three persons present at Jesus' baptism (Matthew 3:16-17) and in the Great Commission (Matthew 28:19).

This doctrine is not meant to be fully understood by human logic but accepted by faith based on God's revelation in His Word.`,
    category: mockCategories[0],
    tags: ["Trinity", "God", "Jesus Christ", "Holy Spirit"],
    relatedQuestions: ["1", "5", "6"],
    views: 12389,
    helpful: 956,
    notHelpful: 45,
    featured: true,
    status: "published",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    author: adminUser,
  },
  {
    id: "3",
    title: "Is Jesus God?",
    slug: "is-jesus-god",
    question: "Is Jesus God? Did Jesus claim to be God?",
    answer: `Yes, Jesus is God. The Bible clearly teaches that Jesus Christ is God in human flesh, the second person of the Trinity who became man to save us from our sins.

### Jesus' Divine Claims

Jesus made numerous claims to deity:
- "I and the Father are one" (John 10:30)
- "Before Abraham was, I AM" (John 8:58) - using God's name from Exodus 3:14
- He accepted worship (Matthew 14:33; John 9:38)
- He claimed to forgive sins (Mark 2:5-7) - something only God can do

### Biblical Evidence

The New Testament is filled with declarations of Jesus' deity:
- John 1:1 - "The Word was God"
- Colossians 2:9 - "In Christ all the fullness of the Deity lives in bodily form"
- Hebrews 1:3 - Jesus is "the exact representation" of God's being
- Thomas called Jesus "My Lord and my God!" (John 20:28)

### Why It Matters

Jesus' deity is essential to Christianity. If Jesus were merely a good teacher or prophet, His death could not pay for our sins. But because He is God, His sacrifice has infinite value and can save all who trust in Him.

### Conclusion

The consistent testimony of Scripture is that Jesus Christ is fully God and fully man - a truth that has been confessed by Christians throughout history and remains central to the Christian faith.`,
    category: mockCategories[1],
    tags: ["Jesus Christ", "Deity of Christ", "Trinity"],
    relatedQuestions: ["1", "2", "7"],
    views: 18945,
    helpful: 1534,
    notHelpful: 67,
    featured: true,
    status: "published",
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
    author: adminUser,
  },
  {
    id: "4",
    title: "How can I be saved?",
    slug: "how-can-i-be-saved",
    question: "How can I be saved? What must I do to go to heaven?",
    answer: `Salvation is received by grace through faith in Jesus Christ. You cannot earn salvation through good works - it is God's free gift to those who believe.

### The Gospel Message

1. **Recognize your sin**: "For all have sinned and fall short of the glory of God" (Romans 3:23)
2. **Understand sin's penalty**: "The wages of sin is death" (Romans 6:23)
3. **Believe in Jesus**: God sent His Son to die for our sins and rise again (1 Corinthians 15:3-4)
4. **Receive by faith**: "For it is by grace you have been saved, through faith" (Ephesians 2:8-9)

### How to Be Saved

To be saved:
1. Admit you are a sinner in need of a Savior
2. Believe that Jesus Christ died for your sins and rose from the dead
3. Call on the Lord: "Everyone who calls on the name of the Lord will be saved" (Romans 10:13)
4. Repent and trust in Christ alone for salvation

### Not by Works

Salvation is not earned by:
- Good deeds
- Religious rituals
- Church membership
- Moral living

It comes only through faith in Jesus Christ (John 14:6; Acts 4:12).

### Assurance

When you trust in Christ, you have eternal life (John 3:16; 1 John 5:13). Nothing can separate you from God's love (Romans 8:38-39).

If you would like to be saved, simply talk to God in prayer, confessing your sin and asking Jesus to be your Savior and Lord.`,
    category: mockCategories[3],
    tags: ["Salvation", "Gospel", "Faith", "Grace"],
    relatedQuestions: ["3", "8", "9"],
    views: 24567,
    helpful: 2134,
    notHelpful: 89,
    featured: true,
    status: "published",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10"),
    author: adminUser,
  },
  {
    id: "5",
    title: "Is the Bible true?",
    slug: "is-the-bible-true",
    question: "Is the Bible true? Can we trust the Bible?",
    answer: `Yes, the Bible is true and trustworthy. It is God's inspired Word, without error in its original manuscripts, and remains the ultimate authority for Christian faith and practice.

### Biblical Claims About Itself

The Bible claims to be:
- God-breathed (2 Timothy 3:16)
- Inspired by the Holy Spirit (2 Peter 1:20-21)
- Living and active (Hebrews 4:12)
- Truth (John 17:17)

### Evidence for Reliability

**Historical Accuracy**
- Archaeological discoveries consistently confirm biblical accounts
- Ancient manuscripts show remarkable preservation
- Eyewitness testimony from the apostles

**Fulfilled Prophecy**
- Hundreds of specific prophecies fulfilled in detail
- Prophecies about Jesus written centuries before His birth

**Internal Consistency**
- 66 books written by 40+ authors over 1,500 years
- One unified message and theme

### Manuscript Evidence

The Bible has:
- More manuscript evidence than any ancient document
- Earlier manuscript copies than other ancient writings
- Remarkable consistency across thousands of manuscripts

### Changed Lives

The Bible's greatest proof is its power to transform lives. Millions testify to its truth based on personal experience of God's Word.

### Conclusion

While faith is required to fully accept the Bible as God's Word, there is abundant evidence supporting its reliability, accuracy, and divine inspiration. We can trust the Bible because we can trust the God who inspired it.`,
    category: mockCategories[2],
    tags: ["Bible", "Scripture", "Inspiration", "Truth"],
    relatedQuestions: ["6", "10"],
    views: 13245,
    helpful: 1089,
    notHelpful: 156,
    featured: true,
    status: "published",
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
    author: adminUser,
  },
  {
    id: "6",
    title: "What is prayer?",
    slug: "what-is-prayer",
    question: "What is prayer? How should I pray?",
    answer: `Prayer is communication with God - talking to Him and listening for His voice. It is one of the most important spiritual disciplines for every believer.

### What Prayer Is

Prayer is:
- Conversation with God (Philippians 4:6)
- Worship and adoration
- Confession of sin (1 John 1:9)
- Thanksgiving (1 Thessalonians 5:18)
- Asking for needs (Matthew 7:7-11)
- Intercession for others

### How to Pray

**The Lord's Prayer** (Matthew 6:9-13) provides a model:
1. Honor God ("Our Father... hallowed be your name")
2. Submit to His will ("Your kingdom come, your will be done")
3. Ask for daily needs ("Give us this day our daily bread")
4. Confess and forgive ("Forgive us... as we forgive")
5. Seek protection ("Lead us not into temptation")

### Important Principles

- Pray in Jesus' name (John 14:13-14)
- Pray according to God's will (1 John 5:14)
- Pray with faith (James 1:6)
- Pray persistently (Luke 18:1)
- Pray humbly (Luke 18:9-14)

### When to Pray

- Continually (1 Thessalonians 5:17)
- In the morning (Psalm 5:3)
- Throughout the day
- In times of trouble
- In times of joy

### God Hears

God promises to hear and answer the prayers of His children (Psalm 34:17; 1 Peter 3:12). Even when answers seem delayed, we can trust His perfect timing and wisdom.`,
    category: mockCategories[5],
    tags: ["Prayer", "Spiritual Disciplines", "Communication with God"],
    relatedQuestions: ["11", "12"],
    views: 9876,
    helpful: 834,
    notHelpful: 45,
    featured: false,
    status: "published",
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-02-20"),
    author: adminUser,
  },
  {
    id: "7",
    title: "What is sin?",
    slug: "what-is-sin",
    question: "What is sin? Why is sin such a big deal?",
    answer: `Sin is any thought, word, or action that falls short of God's perfect standard. It is rebellion against God and His law.

### Defining Sin

The Bible describes sin as:
- Missing the mark (Romans 3:23)
- Lawlessness (1 John 3:4)
- Rebellion against God
- Anything not from faith (Romans 14:23)

### Origin of Sin

Sin entered the world through Adam and Eve's disobedience (Genesis 3; Romans 5:12). Since then, all humans are born with a sinful nature.

### Types of Sin

**Sins of Commission**
- Things we do that we shouldn't (lying, stealing, etc.)

**Sins of Omission**
- Good things we fail to do (James 4:17)

**Sins of Thought**
- Evil thoughts and attitudes (Matthew 5:28)

### Why Sin Matters

Sin is serious because:
- It separates us from Holy God (Isaiah 59:2)
- Its penalty is death and hell (Romans 6:23)
- It affects all creation (Romans 8:20-22)
- It grieves God

### The Solution

Though sin is serious, God has provided the solution through Jesus Christ:
- Jesus died to pay for our sins (1 Peter 2:24)
- His blood cleanses us (1 John 1:7)
- Through faith in Him, we are forgiven (Ephesians 1:7)

### Victory Over Sin

As Christians, we are no longer slaves to sin (Romans 6:6-7). Through the Holy Spirit's power, we can overcome sin and live in holiness.`,
    category: mockCategories[3],
    tags: ["Sin", "Salvation", "Redemption"],
    relatedQuestions: ["4", "8"],
    views: 11234,
    helpful: 945,
    notHelpful: 78,
    featured: false,
    status: "published",
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
    author: adminUser,
  },
  {
    id: "8",
    title: "What happens after death?",
    slug: "what-happens-after-death",
    question: "What happens after we die? Is there really a heaven and hell?",
    answer: `The Bible teaches that after death, every person will spend eternity either in heaven with God or in hell separated from Him.

### Immediate After Death

For believers:
- Present with the Lord (2 Corinthians 5:8)
- In paradise/Abraham's bosom (Luke 16:22; 23:43)

For unbelievers:
- In Hades, a place of torment (Luke 16:23)
- Separated from God

### The Resurrection

The Bible teaches two resurrections:
1. **Resurrection of Life** - for believers (John 5:29)
2. **Resurrection of Judgment** - for unbelievers (Revelation 20:5)

### Final Judgment

- All will stand before God (Hebrews 9:27)
- Believers are judged for rewards (1 Corinthians 3:12-15)
- Unbelievers are judged for works (Revelation 20:12-13)

### Heaven

Heaven is:
- God's dwelling place (Matthew 6:9)
- A real, physical place (John 14:2-3)
- Perfect, with no pain, death, or tears (Revelation 21:4)
- Eternal joy in God's presence (Psalm 16:11)

### Hell

Hell is:
- A real place of punishment (Matthew 25:46)
- Eternal separation from God (2 Thessalonians 1:9)
- Originally prepared for Satan and demons (Matthew 25:41)
- Avoidable through faith in Christ

### The Choice

Our eternal destination is determined in this life by our response to Jesus Christ (John 3:36). God desires all to be saved (2 Peter 3:9), but He respects our free will to choose.`,
    category: mockCategories[7],
    tags: ["Afterlife", "Heaven", "Hell", "Eternity"],
    relatedQuestions: ["4", "7", "13"],
    views: 16789,
    helpful: 1345,
    notHelpful: 234,
    featured: false,
    status: "published",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05"),
    author: adminUser,
  },
];

// Get featured questions
export function getFeaturedQuestions(): Question[] {
  return mockQuestions.filter((q) => q.featured).slice(0, 6);
}

// Get questions by category
export function getQuestionsByCategory(categorySlug: string): Question[] {
  return mockQuestions.filter((q) => q.category.slug === categorySlug);
}

// Get question by slug
export function getQuestionBySlug(slug: string): Question | undefined {
  return mockQuestions.find((q) => q.slug === slug);
}

// Search questions
export function searchQuestions(query: string): Question[] {
  const lowerQuery = query.toLowerCase();
  return mockQuestions.filter(
    (q) =>
      q.title.toLowerCase().includes(lowerQuery) ||
      q.question.toLowerCase().includes(lowerQuery) ||
      q.answer.toLowerCase().includes(lowerQuery) ||
      q.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
