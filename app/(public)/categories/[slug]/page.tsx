import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ThumbsUp, ArrowLeft } from "lucide-react";
import { mockCategories, getQuestionsByCategory } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = mockCategories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const questions = getQuestionsByCategory(params.slug);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/categories">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Topics
              </Button>
            </Link>
            <div className="flex items-start gap-4">
              <div className="text-6xl">{category.icon}</div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{category.questionCount}</span> questions in this topic
                </div>
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {questions.length > 0 ? (
              questions.map((question) => (
                <Link key={question.id} href={`/questions/${question.slug}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {question.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {question.question}
                          </CardDescription>
                        </div>
                        {question.featured && (
                          <Badge variant="default">Featured</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Eye className="h-4 w-4" />
                          <span>{formatNumber(question.views)} views</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{formatNumber(question.helpful)} helpful</span>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-auto">
                          {question.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No questions available in this category yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
