"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, ThumbsUp } from "lucide-react";
import { mockQuestions } from "@/lib/data/questions";
import { format } from "date-fns";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";

export default function ContentPage() {
  const questions = mockQuestions;

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "published":
        return "success";
      case "draft":
        return "secondary";
      case "pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Questions & Answers</h1>
        <p className="text-muted-foreground mt-2">
          Manage your Q&A content
        </p>
      </div>

      {/* Questions Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Questions ({questions.length})</CardTitle>
          <CardDescription>View and manage all questions and answers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Question</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Stats</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {questions.map((question) => (
                  <TableRow key={question.id}>
                    <TableCell>
                      <div className="max-w-[400px]">
                        <Link
                          href={`/questions/${question.slug}`}
                          className="font-medium hover:text-primary transition-colors"
                          target="_blank"
                        >
                          {question.title}
                        </Link>
                        <p className="text-sm text-muted-foreground truncate mt-1">
                          {question.question}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{question.category.name}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadgeVariant(question.status) as any}>
                        {question.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {formatNumber(question.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          {formatNumber(question.helpful)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {format(question.createdAt, "MMM d, yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
