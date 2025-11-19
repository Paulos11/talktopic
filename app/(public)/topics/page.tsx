import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { topicIndex, getTotalTopicCount, getTotalQuestionCount } from "@/lib/data/topic-index";
import { formatNumber } from "@/lib/utils";

export const metadata = {
  title: "Topic Index | TalkTopic",
  description: "Browse our comprehensive index of biblical topics and theological questions",
};

export default function TopicsIndexPage() {
  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Topic Index
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Browse our complete collection of biblical topics and theological questions organized by theme
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-bold text-2xl text-primary block">{topicIndex.length}</span>
              <span>Major Themes</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-primary block">{getTotalTopicCount()}</span>
              <span>Topics</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-primary block">{formatNumber(getTotalQuestionCount())}</span>
              <span>Questions</span>
            </div>
          </div>
        </div>

        {/* Topic Sections */}
        <div className="space-y-12">
          {topicIndex.map((section) => (
            <div key={section.id}>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{section.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                      <CardDescription className="text-base">{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        href={`/categories/${topic.slug}`}
                        className="group"
                      >
                        <div className="flex items-center justify-between p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all">
                          <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                            {topic.name}
                          </span>
                          <Badge variant="secondary" className="ml-2">
                            {topic.questionCount}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you have a question that isn&apos;t covered in our topic index, we&apos;d love to help. Submit your question and our team will provide a comprehensive biblical answer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/submit-question">
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Submit a Question
                  </button>
                </Link>
                <Link href="/search">
                  <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Search Questions
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
