"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, ThumbsUp } from "lucide-react";
import { searchQuestions } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";
import type { Question } from "@/types";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Question[]>([]);

  useEffect(() => {
    if (initialQuery) {
      setResults(searchQuestions(initialQuery));
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setResults(searchQuestions(query));
    }
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Search Questions
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for questions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </form>

          {/* Results */}
          {query && (
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Found <span className="font-semibold">{results.length}</span> result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
              </p>

              {results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((question) => (
                    <Link key={question.id} href={`/questions/${question.slug}`}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{question.category.name}</Badge>
                            {question.featured && <Badge>Featured</Badge>}
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {question.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {question.question}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Eye className="h-4 w-4" />
                              <span>{formatNumber(question.views)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{formatNumber(question.helpful)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No questions found matching your search. Try different keywords.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
