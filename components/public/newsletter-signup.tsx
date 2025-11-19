"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsletterSignup({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubscribed(true);
    setLoading(false);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || subscribed}>
            {subscribed ? "✓ Subscribed!" : loading ? "..." : "Subscribe"}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Stay Updated</h3>
            <p className="text-sm text-gray-600">Get biblical answers delivered to your inbox</p>
          </div>
        </div>

        {subscribed ? (
          <div className="text-center py-4 text-green-600 font-medium">
            ✓ Successfully subscribed! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Subscribing..." : "Subscribe to Newsletter"}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
