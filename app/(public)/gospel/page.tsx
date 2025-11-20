import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gospel Presentations | TalkTopic",
  description: "Different ways to understand and share the good news of salvation through Jesus Christ",
};

export default function GospelPage() {
  const presentations = [
    {
      title: "How Can I Be Saved?",
      subtitle: "The Simple Path to Salvation",
      slug: "how-to-be-saved",
      description: "Understanding God's gift of salvation through faith in Jesus Christ",
      verses: ["Romans 3:23", "Romans 6:23", "Romans 10:9-10"],
    },
    {
      title: "What Is the Plan of Salvation?",
      subtitle: "God's Rescue Plan for Humanity",
      slug: "plan-of-salvation",
      description: "From recognizing sin to receiving eternal life",
      verses: ["John 3:16", "Ephesians 2:8-9", "Acts 16:31"],
    },
    {
      title: "Does Jesus Love Me?",
      subtitle: "Understanding God's Personal Love",
      slug: "does-jesus-love-me",
      description: "Discovering the depth of Christ's love for you",
      verses: ["John 3:16", "Romans 5:8", "1 John 4:9-10"],
    },
    {
      title: "What Happens When We Die?",
      subtitle: "Life After Death",
      slug: "what-happens-when-we-die",
      description: "Biblical answers about eternity and our final destination",
      verses: ["Hebrews 9:27", "John 5:24", "2 Corinthians 5:8"],
    },
    {
      title: "Why Should I Become a Christian?",
      subtitle: "The Benefits of Following Christ",
      slug: "why-become-christian",
      description: "Understanding the purpose and benefits of Christian faith",
      verses: ["John 10:10", "Romans 8:1", "Philippians 4:7"],
    },
    {
      title: "How Can I Know I'm Going to Heaven?",
      subtitle: "Assurance of Salvation",
      slug: "assurance-of-salvation",
      description: "Biblical certainty about your eternal destination",
      verses: ["1 John 5:13", "John 10:28-29", "Romans 8:38-39"],
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Recognize Your Need",
      description: "All have sinned and fall short of God's glory",
      verse: "Romans 3:23",
    },
    {
      number: 2,
      title: "Understand the Consequence",
      description: "The wages of sin is death, but the gift of God is eternal life",
      verse: "Romans 6:23",
    },
    {
      number: 3,
      title: "Believe God's Solution",
      description: "God demonstrates His love for us in that while we were still sinners, Christ died for us",
      verse: "Romans 5:8",
    },
    {
      number: 4,
      title: "Receive the Gift",
      description: "If you confess with your mouth Jesus is Lord and believe in your heart God raised Him from the dead, you will be saved",
      verse: "Romans 10:9",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Gospel: Good News for You
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover God's amazing plan of salvation and how you can have a personal relationship with Jesus Christ
          </p>
        </div>

        {/* The Simple Gospel */}
        <Card className="mb-12 border-2 border-primary">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">The Simple Gospel in 4 Steps</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-700 mb-2 text-sm">{step.description}</p>
                    <p className="text-xs text-primary font-medium">{step.verse}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-center">Ready to Receive Christ?</h3>
              <p className="text-gray-700 mb-4 text-center">
                You can pray this prayer to receive Jesus as your Lord and Savior:
              </p>
              <div className="bg-white p-6 rounded-lg border italic text-gray-800">
                "Dear God, I know that I am a sinner and need Your forgiveness. I believe that Jesus Christ died for my sins and rose from the dead. I confess Jesus as my Lord and Savior. Please forgive me, change my heart, and give me eternal life. I commit my life to following You. In Jesus' name, Amen."
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                If you prayed this prayer sincerely, you are now a child of God! <Link href="/contact" className="text-primary underline">Contact us</Link> to let us know about your decision.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Different Gospel Presentations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Different Gospel Presentations
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {presentations.map((presentation) => (
              <Card key={presentation.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{presentation.title}</CardTitle>
                  <CardDescription className="text-base">{presentation.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">{presentation.description}</p>
                  <div className="space-y-1 mb-4">
                    {presentation.verses.map((verse) => (
                      <div key={verse} className="flex items-center gap-2 text-xs text-gray-600">
                        <BookOpen className="h-3 w-3 text-primary" />
                        {verse}
                      </div>
                    ))}
                  </div>
                  <Link href={`/questions/${presentation.slug}`}>
                    <Button className="w-full" variant="outline">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Happens Next */}
        <Card className="bg-gradient-to-br from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">What Happens After Salvation?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Get Baptized</h3>
                  <p className="text-sm text-gray-700">Publicly declare your faith through water baptism</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Read Your Bible</h3>
                  <p className="text-sm text-gray-700">Grow in your knowledge of God through His Word</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Join a Church</h3>
                  <p className="text-sm text-gray-700">Connect with other believers for fellowship and growth</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Share Your Faith</h3>
                  <p className="text-sm text-gray-700">Tell others about the hope you have in Christ</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
