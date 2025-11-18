"use client";

import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ThumbsUp, ThumbsDown, Share2, Printer, Eye } from "lucide-react";
import { getQuestionBySlug, mockQuestions } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";

export default function QuestionPage({ params }: { params: { slug: string } }) {
  const question = getQuestionBySlug(params.slug);
  const [helpful, setHelpful] = useState(question?.helpful || 0);
  const [notHelpful, setNotHelpful] = useState(question?.notHelpful || 0);
  const [userVote, setUserVote] = useState<"helpful" | "not-helpful" | null>(null);

  if (!question) {
    notFound();
  }

  const handleHelpful = () => {
    if (userVote === "helpful") {
      setHelpful(helpful - 1);
      setUserVote(null);
    } else {
      if (userVote === "not-helpful") {
        setNotHelpful(notHelpful - 1);
      }
      setHelpful(helpful + 1);
      setUserVote("helpful");
    }
  };

  const handleNotHelpful = () => {
    if (userVote === "not-helpful") {
      setNotHelpful(notHelpful - 1);
      setUserVote(null);
    } else {
      if (userVote === "helpful") {
        setHelpful(helpful - 1);
      }
      setNotHelpful(notHelpful + 1);
      setUserVote("not-helpful");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: question.title,
        text: question.question,
        url: window.location.href,
      });
    }
  };

  const relatedQuestions = mockQuestions.filter((q) =>
    question.relatedQuestions.includes(q.id)
  );

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href={`/categories/${question.category.slug}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {question.category.name}
              </Button>
            </Link>
          </div>

          {/* Question Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge>{question.category.name}</Badge>
              {question.featured && (
                <Badge variant="default">Featured</Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {question.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              {question.question}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span>{formatNumber(question.views)} views</span>
              </div>
              <span>•</span>
              <span>Updated {format(question.updatedAt, "MMMM d, yyyy")}</span>
            </div>
          </div>

          {/* Answer */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:my-4 prose-li:my-1"
                dangerouslySetInnerHTML={{
                  __html: question.answer.replace(/\n/g, "<br />"),
                }}
              />
            </CardContent>
          </Card>

          {/* Tags */}
          {question.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Related Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {question.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Feedback */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Was this answer helpful?</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant={userVote === "helpful" ? "default" : "outline"}
                  onClick={handleHelpful}
                  className="gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Yes ({formatNumber(helpful)})
                </Button>
                <Button
                  variant={userVote === "not-helpful" ? "destructive" : "outline"}
                  onClick={handleNotHelpful}
                  className="gap-2"
                >
                  <ThumbsDown className="h-4 w-4" />
                  No ({formatNumber(notHelpful)})
                </Button>
                <Button variant="ghost" onClick={handleShare} className="gap-2 ml-auto">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" onClick={() => window.print()} className="gap-2">
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Questions */}
          {relatedQuestions.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Related Questions
              </h2>
              <div className="space-y-3">
                {relatedQuestions.map((relatedQ) => (
                  <Link key={relatedQ.id} href={`/questions/${relatedQ.slug}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {relatedQ.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {relatedQ.question}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
