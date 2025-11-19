import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye } from "lucide-react";
import { mockQuestions } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";

export default function PopularQuestionsSidebar() {
  // Get top questions by views
  const popularQuestions = [...mockQuestions]
    .filter((q) => q.status === "published")
    .sort((a, b) => b.views - a.views)
    .slice(0, 8);

  return (
    <div className="space-y-6">
      {/* Popular Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Popular Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularQuestions.map((question, index) => (
              <Link
                key={question.id}
                href={`/questions/${question.slug}`}
                className="block group"
              >
                <div className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {question.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{formatNumber(question.views)}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs py-0">
                        {question.category.name}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
