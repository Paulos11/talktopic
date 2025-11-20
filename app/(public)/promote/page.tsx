"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Share2,
  Link as LinkIcon,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
  Copy,
  Check,
  Globe,
  Smartphone,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";

export default function PromotePage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const shareLinks = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=https://talktopic.org",
    twitter: "https://twitter.com/intent/tweet?url=https://talktopic.org&text=Find biblical answers to life's most important questions at TalkTopic",
    email: "mailto:?subject=Check out TalkTopic&body=I found this great resource for biblical answers: https://talktopic.org",
  };

  const promotionMethods = [
    {
      icon: Globe,
      title: "Link to Us",
      description: "Add a link to TalkTopic on your website or blog",
      action: "Get Link Code",
    },
    {
      icon: Share2,
      title: "Share on Social Media",
      description: "Share TalkTopic with your followers on social platforms",
      action: "Share Now",
    },
    {
      icon: Mail,
      title: "Email Your Network",
      description: "Send TalkTopic to friends, family, and church members",
      action: "Compose Email",
    },
    {
      icon: BookOpen,
      title: "Use in Teaching",
      description: "Reference TalkTopic in sermons, Bible studies, and classes",
      action: "Learn How",
    },
  ];

  const linkButtons = [
    {
      size: "250x250",
      html: '<a href="https://talktopic.org"><img src="https://talktopic.org/badge-250.png" alt="TalkTopic - Biblical Answers" /></a>',
    },
    {
      size: "200x200",
      html: '<a href="https://talktopic.org"><img src="https://talktopic.org/badge-200.png" alt="TalkTopic - Biblical Answers" /></a>',
    },
    {
      size: "150x150",
      html: '<a href="https://talktopic.org"><img src="https://talktopic.org/badge-150.png" alt="TalkTopic - Biblical Answers" /></a>',
    },
  ];

  const textLinks = [
    {
      text: "TalkTopic.org - Biblical Answers",
      html: '<a href="https://talktopic.org">TalkTopic.org - Biblical Answers</a>',
    },
    {
      text: "Find Biblical Answers at TalkTopic",
      html: '<a href="https://talktopic.org">Find Biblical Answers at TalkTopic</a>',
    },
    {
      text: "Get answers to your faith questions at TalkTopic.org",
      html: '<a href="https://talktopic.org">Get answers to your faith questions at TalkTopic.org</a>',
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Share2 className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Promote TalkTopic
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Help spread biblical truth by sharing TalkTopic with others
            </p>
          </div>

          {/* Why Promote */}
          <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Why Share TalkTopic?</h2>
              <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
                Every day, millions of people search for answers to spiritual questions. By promoting
                TalkTopic, you're helping people discover clear, biblical answers that can transform
                their lives and draw them closer to God.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2,000+</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1M+</div>
                  <div className="text-sm text-gray-600">People Helped</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Share */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Share</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(shareLinks.facebook, "_blank")}
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Share on Facebook
                </Button>
                <Button
                  size="lg"
                  className="bg-sky-500 hover:bg-sky-600"
                  onClick={() => window.open(shareLinks.twitter, "_blank")}
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  Share on Twitter
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = shareLinks.email}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Share via Email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => copyToClipboard("https://talktopic.org", "url")}
                >
                  {copied === "url" ? (
                    <>
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Promotion Methods */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Ways to Promote</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {promotionMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                        <Button size="sm" variant="outline">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Text Links */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <LinkIcon className="h-6 w-6 text-primary" />
                Text Links
              </h2>
              <p className="text-gray-600 mb-6">
                Copy and paste these HTML links into your website, blog, or email signature:
              </p>
              <div className="space-y-3">
                {textLinks.map((link, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Preview:</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(link.html, `text-${index}`)}
                      >
                        {copied === `text-${index}` ? (
                          <>
                            <Check className="h-4 w-4 mr-1 text-green-600" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="text-blue-600 underline mb-3">{link.text}</div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <code className="text-xs text-gray-700 break-all">{link.html}</code>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Badge Buttons */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ImageIcon className="h-6 w-6 text-primary" />
                Badge Buttons
              </h2>
              <p className="text-gray-600 mb-6">
                Add a TalkTopic badge to your website or blog:
              </p>
              <div className="space-y-6">
                {linkButtons.map((badge, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className="bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
                          style={{
                            width: badge.size.split("x")[0] + "px",
                            height: badge.size.split("x")[1] + "px",
                          }}
                        >
                          <div className="text-center">
                            <div className="text-2xl mb-1">TT</div>
                            <div className="text-xs">Biblical Answers</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{badge.size} pixels</Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyToClipboard(badge.html, `badge-${index}`)}
                          >
                            {copied === `badge-${index}` ? (
                              <>
                                <Check className="h-4 w-4 mr-1 text-green-600" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy Code
                              </>
                            )}
                          </Button>
                        </div>
                        <div className="bg-white p-3 rounded border border-gray-200">
                          <code className="text-xs text-gray-700 break-all">{badge.html}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Creative Ways */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Creative Promotion Ideas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Church Bulletin</h3>
                    <p className="text-sm text-gray-600">
                      Feature a "Question of the Week" from TalkTopic in your church bulletin
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media Posts</h3>
                    <p className="text-sm text-gray-600">
                      Share interesting questions and answers with your followers
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Small Groups</h3>
                    <p className="text-sm text-gray-600">
                      Use TalkTopic questions as discussion starters in Bible studies
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Signature</h3>
                    <p className="text-sm text-gray-600">
                      Add a TalkTopic link to your email signature
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Youth Ministry</h3>
                    <p className="text-sm text-gray-600">
                      Recommend TalkTopic to teens and young adults seeking answers
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Online Forums</h3>
                    <p className="text-sm text-gray-600">
                      Share relevant TalkTopic answers in online discussions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thank You */}
          <Card className="bg-gradient-to-r from-primary to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg mb-4">
                Your support helps us reach more people with the life-changing truth of God's Word.
                Together, we can make a difference in people's lives and point them to Jesus Christ.
              </p>
              <p className="text-sm opacity-90">
                "Go into all the world and preach the gospel to all creation." - Mark 16:15
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
