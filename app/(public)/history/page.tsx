import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History as HistoryIcon, Users, Globe, BookOpen } from "lucide-react";

export const metadata = {
  title: "Our History | TalkTopic",
  description: "The story of TalkTopic ministry and how God has used it to answer biblical questions",
};

export default function HistoryPage() {
  const milestones = [
    {
      year: "2024",
      title: "TalkTopic Launches",
      description: "Founded with a vision to provide clear, biblical answers to life's most important questions. Started with a comprehensive Q&A platform covering major theological topics.",
      stats: ["100+ Languages", "2,000+ Questions", "8 Major Categories"],
    },
    {
      year: "2024",
      title: "Complete Platform",
      description: "Expanded to include blog articles, testimonials, FAQ section, and comprehensive topic index with 84 theological themes covering all aspects of Christian faith.",
      stats: ["84 Topics", "Network Sites", "Newsletter"],
    },
    {
      year: "Future",
      title: "Continuing Growth",
      description: "Committed to reaching more people worldwide with biblical truth, expanding multilingual content, and developing new resources for believers and seekers alike.",
      stats: ["Global Reach", "More Languages", "Advanced Tools"],
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <HistoryIcon className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our History
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              The story of how God has used TalkTopic to bring biblical answers to people worldwide
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto">
                To glorify God and reach people for Christ by providing biblical, gospel-centered answers to spiritually-related questions through the Internet and related technologies.
              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="space-y-8 mb-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {index !== milestones.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
                )}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{milestone.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {milestone.stats.map((stat) => (
                            <Badge key={stat} variant="outline">
                              {stat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Impact Stats */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">2,000+</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">1M+</div>
                  <div className="text-sm text-gray-600">People Reached</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HistoryIcon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Vision for the Future</h2>
              <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
                We envision a world where anyone, anywhere, can find clear, biblical answers to their spiritual questions in their native language. We are committed to expanding our content, improving our technology, and reaching more people with the transformative truth of God's Word.
              </p>
              <div className="text-center">
                <p className="text-sm text-gray-600 italic">
                  "For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea." - Habakkuk 2:14
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
