"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Users,
  BookOpen,
  Globe,
  Edit3,
  MessageCircle,
  Code,
  Megaphone,
  CheckCircle,
} from "lucide-react";

export default function ServePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    experience: "",
    message: "",
  });

  const opportunities = [
    {
      icon: Edit3,
      title: "Content Writer",
      description: "Research and write biblically sound answers to questions",
      requirements: ["Strong biblical knowledge", "Excellent writing skills", "Theological training preferred"],
      commitment: "5-10 hours/week",
    },
    {
      icon: BookOpen,
      title: "Researcher",
      description: "Study Scripture and theological resources to support content creation",
      requirements: ["Seminary education or equivalent", "Access to theological libraries", "Detail-oriented"],
      commitment: "3-8 hours/week",
    },
    {
      icon: Globe,
      title: "Translator",
      description: "Translate content into other languages to reach more people",
      requirements: ["Fluency in English + another language", "Biblical vocabulary knowledge", "Cultural sensitivity"],
      commitment: "Flexible",
    },
    {
      icon: MessageCircle,
      title: "Editor/Reviewer",
      description: "Review and edit content for accuracy, clarity, and biblical soundness",
      requirements: ["Strong grasp of theology", "Editing experience", "Attention to detail"],
      commitment: "4-6 hours/week",
    },
    {
      icon: Code,
      title: "Web Developer",
      description: "Help improve the website, add features, and fix technical issues",
      requirements: ["Experience with React/Next.js", "Understanding of responsive design", "Problem-solving skills"],
      commitment: "Varies",
    },
    {
      icon: Megaphone,
      title: "Social Media Manager",
      description: "Share content and engage with people on social media platforms",
      requirements: ["Social media expertise", "Good communication skills", "Passion for evangelism"],
      commitment: "3-5 hours/week",
    },
  ];

  const requirements = [
    {
      icon: CheckCircle,
      title: "Born-Again Christian",
      description: "Personal relationship with Jesus Christ and commitment to biblical truth",
    },
    {
      icon: CheckCircle,
      title: "Statement of Faith Agreement",
      description: "Full agreement with our doctrinal statement and theological positions",
    },
    {
      icon: CheckCircle,
      title: "Servant's Heart",
      description: "Genuine desire to serve God and help others grow in their faith",
    },
    {
      icon: CheckCircle,
      title: "Time Commitment",
      description: "Ability to consistently dedicate time to serve in your chosen role",
    },
  ];

  const toggleInterest = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest],
    });
  };

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serve With Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Use your gifts and talents to help people discover biblical truth
            </p>
          </div>

          {/* Vision */}
          <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
              <p className="text-gray-700 text-center max-w-2xl mx-auto mb-4">
                TalkTopic exists to glorify God and reach people for Christ by providing biblical,
                gospel-centered answers to spiritually-related questions. We're looking for dedicated
                believers who want to use their gifts to advance the Kingdom of God.
              </p>
              <p className="text-center text-sm text-gray-600 italic">
                "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." - Colossians 3:23
              </p>
            </CardContent>
          </Card>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">2,000+</div>
                <div className="text-xs text-gray-600">Questions Answered</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-xs text-gray-600">Languages</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">1M+</div>
                <div className="text-xs text-gray-600">People Reached</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-gray-600">Available</div>
              </CardContent>
            </Card>
          </div>

          {/* Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <opp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{opp.title}</h3>
                        <p className="text-sm text-gray-600">{opp.description}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Requirements:
                      </p>
                      <ul className="space-y-1">
                        {opp.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xs text-gray-500">
                        <strong>Commitment:</strong> {opp.commitment}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toggleInterest(opp.title)}
                      >
                        {formData.interests.includes(opp.title) ? "Selected" : "I'm Interested"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">General Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <req.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{req.title}</h3>
                      <p className="text-sm text-gray-600">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Application Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Volunteer Application</h2>
              <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Interests */}
                <div>
                  <Label className="mb-3 block">Areas of Interest *</Label>
                  <div className="flex flex-wrap gap-2">
                    {opportunities.map((opp) => (
                      <button
                        key={opp.title}
                        type="button"
                        onClick={() => toggleInterest(opp.title)}
                        className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                          formData.interests.includes(opp.title)
                            ? "bg-primary text-white border-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                        }`}
                      >
                        {opp.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <Label htmlFor="experience">Relevant Experience & Qualifications *</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your education, experience, and qualifications relevant to the role(s) you're interested in..."
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <Label htmlFor="message">Why do you want to serve with TalkTopic? *</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your testimony, your passion for ministry, and why you want to serve with TalkTopic..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                {/* Agreement */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    By submitting this application, you affirm that you are a born-again Christian
                    and agree with TalkTopic's Statement of Faith. You understand that this is a
                    volunteer position and you're willing to commit the necessary time to serve
                    faithfully.
                  </p>
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    Submit Application
                  </Button>
                  <Button type="button" size="lg" variant="outline" className="flex-1">
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Review</h3>
                  <p className="text-sm text-gray-600">
                    We'll review your application within 5-7 business days
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Interview</h3>
                  <p className="text-sm text-gray-600">
                    If selected, we'll schedule a video call to discuss the role
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Onboarding</h3>
                  <p className="text-sm text-gray-600">
                    You'll receive training and resources to get started
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
