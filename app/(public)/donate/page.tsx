import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, BookOpen, Check, CreditCard } from "lucide-react";

export const metadata = {
  title: "Support Our Ministry | TalkTopic",
  description: "Help us continue providing biblical answers to people around the world",
};

export default function DonatePage() {
  const donationTiers = [
    {
      amount: "$10",
      title: "Supporter",
      description: "Help answer 10 questions",
      features: ["Supports content creation", "Reaches 100+ people", "Monthly impact report"],
    },
    {
      amount: "$25",
      title: "Partner",
      description: "Provide resources for a month",
      features: [
        "Everything in Supporter",
        "Helps translate content",
        "Supports server costs",
        "Priority support access",
      ],
      popular: true,
    },
    {
      amount: "$50",
      title: "Champion",
      description: "Make a lasting impact",
      features: [
        "Everything in Partner",
        "Fund new content creation",
        "Support mobile apps",
        "Recognition on website",
      ],
    },
  ];

  const impactStats = [
    {
      icon: Globe,
      value: "195+",
      label: "Countries Reached",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "5M+",
      label: "Lives Impacted",
      color: "text-green-600",
    },
    {
      icon: BookOpen,
      value: "2,000+",
      label: "Questions Answered",
      color: "text-purple-600",
    },
  ];

  const waysToDonate = [
    {
      title: "One-Time Gift",
      description: "Make a single donation to support our ministry",
      icon: CreditCard,
    },
    {
      title: "Monthly Partner",
      description: "Provide ongoing support with automatic monthly giving",
      icon: Heart,
    },
    {
      title: "Legacy Giving",
      description: "Leave a lasting impact through planned giving",
      icon: Globe,
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Our Ministry
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous support enables us to provide biblical answers to people seeking truth around the world
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Choose Your Impact Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {donationTiers.map((tier) => (
              <Card
                key={tier.title}
                className={`relative ${tier.popular ? "border-primary border-2 shadow-lg" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">{tier.amount}</div>
                  <CardTitle className="text-2xl mb-2">{tier.title}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Donate {tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ways to Give */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Ways to Give
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {waysToDonate.map((way) => (
              <Card key={way.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <way.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{way.title}</CardTitle>
                  <CardDescription>{way.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Story */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Your Impact
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-center mb-6">
                  Every day, thousands of people visit our site seeking biblical answers to life&apos;s most important questions. Your donation helps us:
                </p>
                <ul className="space-y-3 text-left max-w-2xl mx-auto">
                  <li>✓ Create new content answering biblical questions</li>
                  <li>✓ Translate resources into 100+ languages</li>
                  <li>✓ Maintain and improve our website and mobile apps</li>
                  <li>✓ Reach people in unreached areas of the world</li>
                  <li>✓ Provide resources for youth and children</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Amount */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Give a Custom Amount</CardTitle>
              <CardDescription>
                Choose any amount that works for you - every gift makes a difference
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3 justify-center flex-wrap">
                <Button variant="outline">$5</Button>
                <Button variant="outline">$15</Button>
                <Button variant="outline">$35</Button>
                <Button variant="outline">$100</Button>
                <Button variant="outline">Custom</Button>
              </div>
              <Button size="lg" className="w-full">
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Your donation is tax-deductible. We are a 501(c)(3) non-profit organization.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Other Ways to Support */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Other Ways to Support
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can&apos;t donate right now? You can still help by sharing our content, praying for our ministry, or volunteering your time and talents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Share Our Content</Button>
            <Button variant="outline">Volunteer</Button>
            <Button variant="outline">Partner Churches</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
