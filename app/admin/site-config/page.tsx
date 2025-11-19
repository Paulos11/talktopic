"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Save, Sparkles } from "lucide-react";
import { mockQuestions } from "@/lib/data/questions";

export default function SiteConfigPage() {
  const [saving, setSaving] = useState(false);
  const [selectedQOTD, setSelectedQOTD] = useState("1");

  const [siteSettings, setSiteSettings] = useState({
    siteName: "TalkTopic",
    siteTagline: "Biblical Answers to Life's Questions",
    heroTitle: "Biblical Answers to Life's Questions",
    heroDescription: "Find clear, biblical answers to your questions about God, faith, and living as a Christian.",
    totalQuestionsDisplay: "2,000+",
    topicsCoveredDisplay: "50+",
    peopleHelpedDisplay: "1M+",
    featuredQuestionsCount: 6,
    recentQuestionsCount: 6,
    showTestimonials: true,
    showNetworkSites: true,
    showBlogPosts: true,
  });

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Site Configuration</h1>
          <p className="text-muted-foreground mt-2">
            Manage homepage content and site-wide settings
          </p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {/* Question of the Day */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            Question of the Day
          </CardTitle>
          <CardDescription>
            Select the featured question to display on the homepage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockQuestions.slice(0, 8).map((question) => (
              <div
                key={question.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedQOTD === question.id
                    ? "border-primary bg-primary/5"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedQOTD(question.id)}
              >
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{question.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{question.question}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {question.category.name}
                    </Badge>
                    {question.questionOfTheDay && (
                      <Badge variant="default" className="text-xs bg-yellow-500">
                        Current QOTD
                      </Badge>
                    )}
                  </div>
                </div>
                <input
                  type="radio"
                  checked={selectedQOTD === question.id}
                  onChange={() => setSelectedQOTD(question.id)}
                  className="ml-4"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Site Identity */}
      <Card>
        <CardHeader>
          <CardTitle>Site Identity</CardTitle>
          <CardDescription>Basic site information and branding</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="siteName">Site Name</Label>
            <Input
              id="siteName"
              value={siteSettings.siteName}
              onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="siteTagline">Site Tagline</Label>
            <Input
              id="siteTagline"
              value={siteSettings.siteTagline}
              onChange={(e) => setSiteSettings({ ...siteSettings, siteTagline: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Homepage Hero */}
      <Card>
        <CardHeader>
          <CardTitle>Homepage Hero Section</CardTitle>
          <CardDescription>Main headline and description on homepage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="heroTitle">Hero Title</Label>
            <Input
              id="heroTitle"
              value={siteSettings.heroTitle}
              onChange={(e) => setSiteSettings({ ...siteSettings, heroTitle: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="heroDescription">Hero Description</Label>
            <Textarea
              id="heroDescription"
              value={siteSettings.heroDescription}
              onChange={(e) => setSiteSettings({ ...siteSettings, heroDescription: e.target.value })}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <Card>
        <CardHeader>
          <CardTitle>Stats Section</CardTitle>
          <CardDescription>Numbers displayed in the stats section</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="totalQuestions">Questions Answered</Label>
              <Input
                id="totalQuestions"
                value={siteSettings.totalQuestionsDisplay}
                onChange={(e) => setSiteSettings({ ...siteSettings, totalQuestionsDisplay: e.target.value })}
                placeholder="2,000+"
              />
            </div>
            <div>
              <Label htmlFor="topicsCovered">Topics Covered</Label>
              <Input
                id="topicsCovered"
                value={siteSettings.topicsCoveredDisplay}
                onChange={(e) => setSiteSettings({ ...siteSettings, topicsCoveredDisplay: e.target.value })}
                placeholder="50+"
              />
            </div>
            <div>
              <Label htmlFor="peopleHelped">People Helped</Label>
              <Input
                id="peopleHelped"
                value={siteSettings.peopleHelpedDisplay}
                onChange={(e) => setSiteSettings({ ...siteSettings, peopleHelpedDisplay: e.target.value })}
                placeholder="1M+"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Homepage Sections */}
      <Card>
        <CardHeader>
          <CardTitle>Homepage Sections</CardTitle>
          <CardDescription>Control what appears on the homepage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="featuredCount">Featured Questions Count</Label>
              <Input
                id="featuredCount"
                type="number"
                min="3"
                max="12"
                value={siteSettings.featuredQuestionsCount}
                onChange={(e) => setSiteSettings({ ...siteSettings, featuredQuestionsCount: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="recentCount">Recent Questions Count</Label>
              <Input
                id="recentCount"
                type="number"
                min="3"
                max="12"
                value={siteSettings.recentQuestionsCount}
                onChange={(e) => setSiteSettings({ ...siteSettings, recentQuestionsCount: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Show Testimonials Section</Label>
                <p className="text-sm text-gray-600">Display user testimonials on homepage</p>
              </div>
              <input
                type="checkbox"
                checked={siteSettings.showTestimonials}
                onChange={(e) => setSiteSettings({ ...siteSettings, showTestimonials: e.target.checked })}
                className="h-4 w-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Show Network Sites Section</Label>
                <p className="text-sm text-gray-600">Display partner ministry sites</p>
              </div>
              <input
                type="checkbox"
                checked={siteSettings.showNetworkSites}
                onChange={(e) => setSiteSettings({ ...siteSettings, showNetworkSites: e.target.checked })}
                className="h-4 w-4"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Show Blog Posts Preview</Label>
                <p className="text-sm text-gray-600">Display recent blog posts on homepage</p>
              </div>
              <input
                type="checkbox"
                checked={siteSettings.showBlogPosts}
                onChange={(e) => setSiteSettings({ ...siteSettings, showBlogPosts: e.target.checked })}
                className="h-4 w-4"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
