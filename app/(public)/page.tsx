import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Eye, ThumbsUp, Clock, Sparkles } from "lucide-react";
import { getFeaturedQuestions, mockCategories, mockQuestions } from "@/lib/data/questions";
import { formatNumber } from "@/lib/utils";
import { format } from "date-fns";
import NewsletterSignup from "@/components/public/newsletter-signup";
import { networkSites, getFeaturedTestimonials } from "@/lib/data/extended-data";

export default function HomePage() {
  const featuredQuestions = getFeaturedQuestions();
  const recentQuestions = [...mockQuestions]
    .filter((q) => q.status === "published")
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 6);
  const questionOfTheDay = mockQuestions.find((q) => q.questionOfTheDay) || featuredQuestions[0];
  const testimonials = getFeaturedTestimonials();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Biblical Answers to Life&apos;s Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Find clear, biblical answers to your questions about God, faith, and living as a Christian.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Topics
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/search">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Search Questions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Topic
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our most popular categories to find answers to your questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCategories.slice(0, 8).map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{category.questionCount}</span>
                      <span>questions</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/categories">
              <Button variant="outline" size="lg">
                View All Topics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Popular questions with comprehensive biblical answers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredQuestions.map((question) => (
              <Link key={question.id} href={`/questions/${question.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{question.category.name}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {question.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {question.question}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{formatNumber(question.views)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{formatNumber(question.helpful)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Question?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Can&apos;t find what you&apos;re looking for? Submit your question and our team will provide a biblical answer.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Submit a Question
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Question of the Day */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Question of the Day</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {format(new Date(), "EEEE, MMMM d, yyyy")}
              </h2>
            </div>
            <Link href={`/questions/${questionOfTheDay.slug}`}>
              <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{questionOfTheDay.category.name}</Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{questionOfTheDay.title}</CardTitle>
                  <CardDescription className="text-base">{questionOfTheDay.question}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{formatNumber(questionOfTheDay.views)} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{formatNumber(questionOfTheDay.helpful)} helpful</span>
                      </div>
                    </div>
                    <Button>
                      Read Answer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Clock className="inline-block h-8 w-8 mr-2 text-primary" />
              Recently Added
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the latest biblical questions answered by our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentQuestions.map((question) => (
              <Link key={question.id} href={`/questions/${question.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="outline">{question.category.name}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(question.createdAt, "MMM d")}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {question.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {question.question}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{formatNumber(question.views)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{formatNumber(question.helpful)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Network Sites */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Network of Sites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more biblical resources tailored for different audiences and topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {networkSites.map((site) => (
              <Link key={site.id} href={site.url}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="text-4xl mb-2">{site.icon}</div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {site.name}
                    </CardTitle>
                    <CardDescription>{site.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how biblical answers have impacted lives around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Never Miss an Answer
              </h2>
              <p className="text-lg text-gray-600">
                Subscribe to receive the Question of the Day and weekly biblical insights
              </p>
            </div>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                2,000+
              </div>
              <div className="text-lg text-gray-600">Questions Answered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-lg text-gray-600">Topics Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                1M+
              </div>
              <div className="text-lg text-gray-600">People Helped</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
