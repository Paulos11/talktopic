import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Eye, User, Share2, Printer } from "lucide-react";
import { getBlogPostBySlug, mockBlogPosts } from "@/lib/data/extended-data";
import { format } from "date-fns";
import { formatNumber } from "@/lib/utils";
import NewsletterSignup from "@/components/public/newsletter-signup";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts from same category
  const relatedPosts = mockBlogPosts
    .filter((p) => p.category === post.category && p.id !== post.id && p.status === "published")
    .slice(0, 3);

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Badge>{post.category}</Badge>
              {post.featured && <Badge variant="default">Featured</Badge>}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">{post.excerpt}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y py-4">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>By {post.author.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{format(post.createdAt, "MMMM d, yyyy")}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span>{formatNumber(post.views)} views</span>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="gap-2" onClick={() => window.print()}>
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:my-4 prose-li:my-1"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/\n/g, "<br />"),
                }}
              />
            </CardContent>
          </Card>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mb-12">
            <NewsletterSignup />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
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
