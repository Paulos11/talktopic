"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Eye, ThumbsUp, Filter } from "lucide-react";
import { searchQuestions, mockCategories } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";
import type { Question } from "@/types";
import PopularQuestionsSidebar from "@/components/public/popular-questions-sidebar";

export const dynamic = 'force-dynamic';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Question[]>([]);
  const [filteredResults, setFilteredResults] = useState<Question[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevant");

  useEffect(() => {
    if (initialQuery) {
      const searchResults = searchQuestions(initialQuery);
      setResults(searchResults);
      setFilteredResults(searchResults);
    }
  }, [initialQuery]);

  useEffect(() => {
    let filtered = [...results];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((q) => q.category.slug === selectedCategory);
    }

    // Sort results
    if (sortBy === "views") {
      filtered.sort((a, b) => b.views - a.views);
    } else if (sortBy === "helpful") {
      filtered.sort((a, b) => b.helpful - a.helpful);
    } else if (sortBy === "recent") {
      filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }

    setFilteredResults(filtered);
  }, [results, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const searchResults = searchQuestions(query);
      setResults(searchResults);
      setFilteredResults(searchResults);
    }
  };

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
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

          {/* Filters */}
          {query && results.length > 0 && (
            <div className="mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Filters:</span>
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-sm border rounded-md px-3 py-1.5"
                    >
                      <option value="all">All Categories</option>
                      {mockCategories.map((cat) => (
                        <option key={cat.id} value={cat.slug}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-sm border rounded-md px-3 py-1.5"
                    >
                      <option value="relevant">Most Relevant</option>
                      <option value="views">Most Viewed</option>
                      <option value="helpful">Most Helpful</option>
                      <option value="recent">Most Recent</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Results */}
          {query && (
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Found <span className="font-semibold">{filteredResults.length}</span> result{filteredResults.length !== 1 ? "s" : ""} for &quot;{query}&quot;
              </p>

              {filteredResults.length > 0 ? (
                <div className="space-y-4">
                  {filteredResults.map((question) => (
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
                      No questions found matching your filters. Try adjusting your search.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PopularQuestionsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
