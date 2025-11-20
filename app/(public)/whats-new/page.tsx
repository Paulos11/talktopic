"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Eye, ThumbsUp, Clock, TrendingUp } from "lucide-react";
import { mockQuestions, categories } from "@/lib/data";
import { format, isAfter, subDays, subWeeks, subMonths } from "date-fns";
import Link from "next/link";

export default function WhatsNewPage() {
  const [timeFilter, setTimeFilter] = useState<"week" | "month" | "3months" | "all">("month");

  const publishedQuestions = mockQuestions.filter((q) => q.status === "published");

  // Filter by time period
  const getFilterDate = () => {
    const now = new Date();
    switch (timeFilter) {
      case "week":
        return subWeeks(now, 1);
      case "month":
        return subMonths(now, 1);
      case "3months":
        return subMonths(now, 3);
      default:
        return new Date(0); // All time
    }
  };

  const filterDate = getFilterDate();
  const recentQuestions = publishedQuestions
    .filter((q) => isAfter(new Date(q.createdAt), filterDate))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Group by week
  const groupedByWeek = recentQuestions.reduce((acc, q) => {
    const weekStart = format(new Date(q.createdAt), "yyyy-'W'ww");
    if (!acc[weekStart]) {
      acc[weekStart] = {
        label: format(new Date(q.createdAt), "MMM d, yyyy"),
        questions: [],
      };
    }
    acc[weekStart].questions.push(q);
    return acc;
  }, {} as Record<string, { label: string; questions: typeof recentQuestions }>);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || "Uncategorized";
  };

  const getCategoryColor = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.color || "#6366f1";
  };

  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  };

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What's New
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Recently added questions and answers to help grow your faith
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {recentQuestions.length}
                </div>
                <div className="text-xs md:text-sm text-gray-600">New Questions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {recentQuestions.reduce((sum, q) => sum + q.views, 0).toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Total Views</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {new Set(recentQuestions.map((q) => q.categoryId)).size}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {Math.ceil(recentQuestions.length / 7)}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Per Week</div>
              </CardContent>
            </Card>
          </div>

          {/* Time Filter */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Show questions from:</span>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    size="sm"
                    variant={timeFilter === "week" ? "default" : "outline"}
                    onClick={() => setTimeFilter("week")}
                  >
                    Past Week
                  </Button>
                  <Button
                    size="sm"
                    variant={timeFilter === "month" ? "default" : "outline"}
                    onClick={() => setTimeFilter("month")}
                  >
                    Past Month
                  </Button>
                  <Button
                    size="sm"
                    variant={timeFilter === "3months" ? "default" : "outline"}
                    onClick={() => setTimeFilter("3months")}
                  >
                    Past 3 Months
                  </Button>
                  <Button
                    size="sm"
                    variant={timeFilter === "all" ? "default" : "outline"}
                    onClick={() => setTimeFilter("all")}
                  >
                    All Time
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Questions Timeline */}
          {recentQuestions.length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedByWeek).map(([week, { label, questions }]) => (
                <div key={week}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="h-5 w-5" />
                      <h2 className="text-xl font-bold">Week of {label}</h2>
                    </div>
                    <div className="h-px flex-1 bg-gray-200" />
                    <Badge variant="outline" className="bg-green-50">
                      {questions.length} new
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {questions.map((question) => (
                      <Card key={question.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Date Badge */}
                            <div className="flex-shrink-0 text-center">
                              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 flex flex-col items-center justify-center">
                                <div className="text-xs font-semibold text-gray-600">
                                  {format(new Date(question.createdAt), "MMM")}
                                </div>
                                <div className="text-xl font-bold text-primary">
                                  {format(new Date(question.createdAt), "d")}
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {getRelativeTime(new Date(question.createdAt))}
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <Link href={`/questions/${question.slug}`}>
                                  <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                                    {question.question}
                                  </h3>
                                </Link>
                                <Badge
                                  variant="outline"
                                  style={{
                                    borderColor: getCategoryColor(question.categoryId),
                                    color: getCategoryColor(question.categoryId),
                                  }}
                                >
                                  {getCategoryName(question.categoryId)}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                {question.excerpt}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Eye className="h-3 w-3" />
                                  {question.views.toLocaleString()} views
                                </span>
                                <span className="flex items-center gap-1">
                                  <ThumbsUp className="h-3 w-3" />
                                  {question.helpful.toLocaleString()} helpful
                                </span>
                                {question.views > 1000 && (
                                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    Trending
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Sparkles className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">No new questions in this time period.</p>
                <Button variant="link" onClick={() => setTimeFilter("all")}>
                  View all questions
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Newsletter CTA */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to get notified about new questions and answers
              </p>
              <Link href="/newsletter">
                <Button size="lg">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
