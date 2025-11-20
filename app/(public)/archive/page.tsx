"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal, Eye, ThumbsUp, Calendar } from "lucide-react";
import { mockQuestions, categories } from "@/lib/data";
import { format } from "date-fns";
import Link from "next/link";

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"all" | "alphabetical">("all");

  const publishedQuestions = mockQuestions.filter((q) => q.status === "published");

  // Filter by search and category
  let filteredQuestions = publishedQuestions.filter((q) => {
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || q.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort questions
  filteredQuestions = [...filteredQuestions].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "oldest":
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case "mostViewed":
        return b.views - a.views;
      case "mostHelpful":
        return b.helpful - a.helpful;
      case "alphabetical":
        return a.question.localeCompare(b.question);
      default:
        return 0;
    }
  });

  // Group alphabetically if needed
  const groupedQuestions = viewMode === "alphabetical"
    ? filteredQuestions.reduce((acc, q) => {
        const firstLetter = q.question[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(q);
        return acc;
      }, {} as Record<string, typeof filteredQuestions>)
    : null;

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || "Uncategorized";
  };

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Filter className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse All Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Explore our complete archive of biblical questions and answers
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {publishedQuestions.length}
                </div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {categories.length}
                </div>
                <div className="text-sm text-gray-600">Categories</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {publishedQuestions.reduce((sum, q) => sum + q.views, 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Views</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {filteredQuestions.length}
                </div>
                <div className="text-sm text-gray-600">Filtered Results</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="mostViewed">Most Viewed</option>
                    <option value="mostHelpful">Most Helpful</option>
                    <option value="alphabetical">A-Z</option>
                  </select>
                </div>

                {/* View Mode */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    View Mode
                  </label>
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === "all" ? "default" : "outline"}
                      onClick={() => setViewMode("all")}
                      className="flex-1"
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      List
                    </Button>
                    <Button
                      variant={viewMode === "alphabetical" ? "default" : "outline"}
                      onClick={() => setViewMode("alphabetical")}
                      className="flex-1"
                    >
                      A-Z
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Questions List */}
          {viewMode === "all" ? (
            <div className="space-y-3">
              {filteredQuestions.map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Link href={`/questions/${question.slug}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                        {question.question}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {question.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <Badge variant="outline">
                        {getCategoryName(question.categoryId)}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {question.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {question.helpful.toLocaleString()} helpful
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(question.createdAt), "MMM d, yyyy")}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Alphabetical View
            <div className="space-y-8">
              {Object.keys(groupedQuestions || {})
                .sort()
                .map((letter) => (
                  <div key={letter}>
                    <div className="sticky top-0 bg-white z-10 py-3 border-b mb-4">
                      <h2 className="text-3xl font-bold text-primary">{letter}</h2>
                    </div>
                    <div className="space-y-3">
                      {groupedQuestions![letter].map((question) => (
                        <Card key={question.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <Link href={`/questions/${question.slug}`}>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                                {question.question}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {question.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                              <Badge variant="outline">
                                {getCategoryName(question.categoryId)}
                              </Badge>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {question.views.toLocaleString()} views
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                {question.helpful.toLocaleString()} helpful
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}

          {filteredQuestions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-gray-500">No questions found matching your criteria.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
