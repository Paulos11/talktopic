// Comprehensive Topic Index organized by themes (similar to GotQuestions.org)

export interface Topic {
  id: string;
  name: string;
  slug: string;
  questionCount: number;
}

export interface TopicSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: Topic[];
}

export const topicIndex: TopicSection[] = [
  {
    id: "theology",
    title: "Theology",
    description: "Core doctrines and beliefs about God",
    icon: "📚",
    topics: [
      { id: "1", name: "God the Father", slug: "god-father", questionCount: 145 },
      { id: "2", name: "Jesus Christ", slug: "jesus-christ", questionCount: 312 },
      { id: "3", name: "The Holy Spirit", slug: "holy-spirit", questionCount: 156 },
      { id: "4", name: "The Trinity", slug: "trinity", questionCount: 89 },
      { id: "5", name: "Attributes of God", slug: "attributes-of-god", questionCount: 124 },
      { id: "6", name: "Providence", slug: "providence", questionCount: 67 },
      { id: "7", name: "Sovereignty of God", slug: "sovereignty", questionCount: 78 },
    ],
  },
  {
    id: "bible",
    title: "The Bible",
    description: "Understanding Scripture and its authority",
    icon: "📖",
    topics: [
      { id: "8", name: "Bible Inspiration", slug: "bible-inspiration", questionCount: 95 },
      { id: "9", name: "Bible Interpretation", slug: "bible-interpretation", questionCount: 134 },
      { id: "10", name: "Bible Translation", slug: "bible-translation", questionCount: 76 },
      { id: "11", name: "Old Testament", slug: "old-testament", questionCount: 198 },
      { id: "12", name: "New Testament", slug: "new-testament", questionCount: 187 },
      { id: "13", name: "Bible Prophecy", slug: "bible-prophecy", questionCount: 112 },
      { id: "14", name: "Difficult Passages", slug: "difficult-passages", questionCount: 156 },
    ],
  },
  {
    id: "salvation",
    title: "Salvation",
    description: "How to be saved and eternal security",
    icon: "🕊️",
    topics: [
      { id: "15", name: "How to be Saved", slug: "how-to-be-saved", questionCount: 234 },
      { id: "16", name: "Grace", slug: "grace", questionCount: 145 },
      { id: "17", name: "Faith", slug: "faith", questionCount: 167 },
      { id: "18", name: "Repentance", slug: "repentance", questionCount: 98 },
      { id: "19", name: "Justification", slug: "justification", questionCount: 87 },
      { id: "20", name: "Sanctification", slug: "sanctification", questionCount: 94 },
      { id: "21", name: "Eternal Security", slug: "eternal-security", questionCount: 76 },
    ],
  },
  {
    id: "christian-life",
    title: "Christian Living",
    description: "Practical guidance for daily life",
    icon: "🌟",
    topics: [
      { id: "22", name: "Prayer", slug: "prayer", questionCount: 189 },
      { id: "23", name: "Worship", slug: "worship", questionCount: 123 },
      { id: "24", name: "Spiritual Growth", slug: "spiritual-growth", questionCount: 145 },
      { id: "25", name: "Bible Study", slug: "bible-study", questionCount: 167 },
      { id: "26", name: "Evangelism", slug: "evangelism", questionCount: 98 },
      { id: "27", name: "Discipleship", slug: "discipleship", questionCount: 87 },
      { id: "28", name: "Stewardship", slug: "stewardship", questionCount: 65 },
    ],
  },
  {
    id: "church",
    title: "The Church",
    description: "Understanding the body of Christ",
    icon: "⛪",
    topics: [
      { id: "29", name: "Church Identity", slug: "church-identity", questionCount: 98 },
      { id: "30", name: "Church Leadership", slug: "church-leadership", questionCount: 76 },
      { id: "31", name: "Church Ordinances", slug: "church-ordinances", questionCount: 54 },
      { id: "32", name: "Baptism", slug: "baptism", questionCount: 134 },
      { id: "33", name: "Lord's Supper", slug: "lords-supper", questionCount: 67 },
      { id: "34", name: "Church Discipline", slug: "church-discipline", questionCount: 45 },
      { id: "35", name: "Denominations", slug: "denominations", questionCount: 89 },
    ],
  },
  {
    id: "eschatology",
    title: "End Times",
    description: "Prophecy and the last days",
    icon: "🌍",
    topics: [
      { id: "36", name: "Second Coming", slug: "second-coming", questionCount: 134 },
      { id: "37", name: "Rapture", slug: "rapture", questionCount: 98 },
      { id: "38", name: "Tribulation", slug: "tribulation", questionCount: 76 },
      { id: "39", name: "Millennium", slug: "millennium", questionCount: 65 },
      { id: "40", name: "Book of Revelation", slug: "revelation", questionCount: 187 },
      { id: "41", name: "Antichrist", slug: "antichrist", questionCount: 87 },
      { id: "42", name: "Signs of the Times", slug: "signs-times", questionCount: 54 },
    ],
  },
  {
    id: "afterlife",
    title: "Heaven & Hell",
    description: "Eternity and the afterlife",
    icon: "☁️",
    topics: [
      { id: "43", name: "Heaven", slug: "heaven", questionCount: 145 },
      { id: "44", name: "Hell", slug: "hell", questionCount: 134 },
      { id: "45", name: "Judgment", slug: "judgment", questionCount: 98 },
      { id: "46", name: "Resurrection", slug: "resurrection", questionCount: 87 },
      { id: "47", name: "Eternal Life", slug: "eternal-life", questionCount: 112 },
      { id: "48", name: "Death", slug: "death", questionCount: 76 },
      { id: "49", name: "Afterlife", slug: "afterlife", questionCount: 65 },
    ],
  },
  {
    id: "apologetics",
    title: "Apologetics",
    description: "Defending the Christian faith",
    icon: "🛡️",
    topics: [
      { id: "50", name: "Evidence for God", slug: "evidence-god", questionCount: 156 },
      { id: "51", name: "Problem of Evil", slug: "problem-evil", questionCount: 98 },
      { id: "52", name: "Other Religions", slug: "other-religions", questionCount: 134 },
      { id: "53", name: "Atheism", slug: "atheism", questionCount: 87 },
      { id: "54", name: "Evolution", slug: "evolution", questionCount: 76 },
      { id: "55", name: "Science and Faith", slug: "science-faith", questionCount: 112 },
      { id: "56", name: "Historical Jesus", slug: "historical-jesus", questionCount: 65 },
    ],
  },
  {
    id: "sin-forgiveness",
    title: "Sin & Forgiveness",
    description: "Understanding sin and God's forgiveness",
    icon: "💔",
    topics: [
      { id: "57", name: "Nature of Sin", slug: "nature-sin", questionCount: 134 },
      { id: "58", name: "Original Sin", slug: "original-sin", questionCount: 87 },
      { id: "59", name: "Forgiveness", slug: "forgiveness", questionCount: 156 },
      { id: "60", name: "Confession", slug: "confession", questionCount: 76 },
      { id: "61", name: "Temptation", slug: "temptation", questionCount: 98 },
      { id: "62", name: "Spiritual Warfare", slug: "spiritual-warfare", questionCount: 67 },
      { id: "63", name: "Satan and Demons", slug: "satan-demons", questionCount: 112 },
    ],
  },
  {
    id: "relationships",
    title: "Relationships",
    description: "Biblical guidance for relationships",
    icon: "❤️",
    topics: [
      { id: "64", name: "Marriage", slug: "marriage", questionCount: 198 },
      { id: "65", name: "Dating", slug: "dating", questionCount: 134 },
      { id: "66", name: "Family", slug: "family", questionCount: 156 },
      { id: "67", name: "Parenting", slug: "parenting", questionCount: 123 },
      { id: "68", name: "Divorce", slug: "divorce", questionCount: 98 },
      { id: "69", name: "Sexuality", slug: "sexuality", questionCount: 87 },
      { id: "70", name: "Friendship", slug: "friendship", questionCount: 76 },
    ],
  },
  {
    id: "ethics",
    title: "Ethics & Morality",
    description: "Biblical principles for moral decisions",
    icon: "⚖️",
    topics: [
      { id: "71", name: "Abortion", slug: "abortion", questionCount: 89 },
      { id: "72", name: "Euthanasia", slug: "euthanasia", questionCount: 54 },
      { id: "73", name: "Capital Punishment", slug: "capital-punishment", questionCount: 45 },
      { id: "74", name: "War and Peace", slug: "war-peace", questionCount: 67 },
      { id: "75", name: "Social Justice", slug: "social-justice", questionCount: 76 },
      { id: "76", name: "Work and Career", slug: "work-career", questionCount: 98 },
      { id: "77", name: "Money and Wealth", slug: "money-wealth", questionCount: 112 },
    ],
  },
  {
    id: "suffering",
    title: "Suffering & Trials",
    description: "Finding hope in difficult times",
    icon: "🙏",
    topics: [
      { id: "78", name: "Why Suffering?", slug: "why-suffering", questionCount: 167 },
      { id: "79", name: "Comfort in Grief", slug: "comfort-grief", questionCount: 134 },
      { id: "80", name: "Depression", slug: "depression", questionCount: 98 },
      { id: "81", name: "Anxiety", slug: "anxiety", questionCount: 87 },
      { id: "82", name: "Healing", slug: "healing", questionCount: 112 },
      { id: "83", name: "Faith in Trials", slug: "faith-trials", questionCount: 76 },
      { id: "84", name: "Hope", slug: "hope", questionCount: 145 },
    ],
  },
];

// Helper functions
export function getAllTopics(): Topic[] {
  return topicIndex.flatMap((section) => section.topics);
}

export function getTopicsBySection(sectionId: string): Topic[] {
  const section = topicIndex.find((s) => s.id === sectionId);
  return section ? section.topics : [];
}

export function getTotalTopicCount(): number {
  return getAllTopics().length;
}

export function getTotalQuestionCount(): number {
  return getAllTopics().reduce((sum, topic) => sum + topic.questionCount, 0);
}
