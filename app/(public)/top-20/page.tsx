import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, ThumbsUp, Calendar } from "lucide-react";
import { mockQuestions } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";
import { format } from "date-fns";

export const metadata = {
  title: "Top 20 Most Visited Questions | TalkTopic",
  description: "The most popular biblical questions answered on TalkTopic",
};

export default function Top20Page() {
  // Sort by views and get top 20
  const top20 = [...mockQuestions]
    .filter((q) => q.status === "published")
    .sort((a, b) => b.views - a.views)
    .slice(0, 20);

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top 20 Most Visited Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The most popular biblical questions people are searching for answers to
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Updated {format(new Date(), "MMMM d, yyyy")}
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatNumber(top20.reduce((sum, q) => sum + q.views, 0))}
                </div>
                <div className="text-sm text-gray-600">Total Views</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatNumber(top20.reduce((sum, q) => sum + q.helpful, 0))}
                </div>
                <div className="text-sm text-gray-600">People Helped</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">20</div>
                <div className="text-sm text-gray-600">Top Questions</div>
              </CardContent>
            </Card>
          </div>

          {/* Top 20 List */}
          <div className="space-y-4">
            {top20.map((question, index) => (
              <Card key={question.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Rank */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                          index === 0
                            ? "bg-yellow-400 text-yellow-900"
                            : index === 1
                            ? "bg-gray-300 text-gray-900"
                            : index === 2
                            ? "bg-orange-400 text-orange-900"
                            : "bg-blue-100 text-blue-900"
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{question.category.name}</Badge>
                        {question.featured && <Badge>Featured</Badge>}
                        {index < 3 && (
                          <Badge className="bg-red-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Top 3
                          </Badge>
                        )}
                      </div>
                      <Link href={`/questions/${question.slug}`}>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                          {question.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-3 line-clamp-2">{question.question}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span className="font-semibold">{formatNumber(question.views)}</span> views
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="font-semibold">{formatNumber(question.helpful)}</span> helpful
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(question.createdAt, "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Browse More */}
          <Card className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Explore More?</h3>
              <p className="text-gray-700 mb-6">
                We have thousands of questions organized by topic to help you grow in your faith.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/categories">
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Browse by Category
                  </button>
                </Link>
                <Link href="/topics">
                  <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-white transition-colors">
                    View Topic Index
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
