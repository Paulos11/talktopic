"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, Mail, CheckCircle, XCircle } from "lucide-react";
import { format } from "date-fns";

// Mock newsletter subscribers data
const mockSubscribers = [
  {
    id: "1",
    email: "john.doe@example.com",
    name: "John Doe",
    subscribedAt: new Date("2024-01-15"),
    confirmed: true,
    preferences: { daily: false, weekly: true, questionOfTheDay: true },
  },
  {
    id: "2",
    email: "sarah.smith@example.com",
    name: "Sarah Smith",
    subscribedAt: new Date("2024-02-20"),
    confirmed: true,
    preferences: { daily: true, weekly: false, questionOfTheDay: true },
  },
  {
    id: "3",
    email: "mike.johnson@example.com",
    name: "Mike Johnson",
    subscribedAt: new Date("2024-03-10"),
    confirmed: false,
    preferences: { daily: false, weekly: true, questionOfTheDay: false },
  },
];

export default function NewsletterManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribers] = useState(mockSubscribers);

  const filteredSubscribers = subscribers.filter(
    (sub) =>
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (sub.name && sub.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const confirmedCount = subscribers.filter((s) => s.confirmed).length;
  const unconfirmedCount = subscribers.filter((s) => !s.confirmed).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Newsletter Subscribers</h1>
          <p className="text-muted-foreground mt-2">
            Manage email subscribers and newsletter preferences
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Send Campaign
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{confirmedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <XCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unconfirmedCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search subscribers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Subscribers List */}
      <Card>
        <CardHeader>
          <CardTitle>Subscribers ({filteredSubscribers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredSubscribers.map((subscriber) => (
              <div
                key={subscriber.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{subscriber.email}</h3>
                    {subscriber.confirmed ? (
                      <Badge variant="default" className="bg-green-600">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Confirmed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                        <XCircle className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    )}
                  </div>
                  {subscriber.name && (
                    <p className="text-sm text-gray-600 mb-1">{subscriber.name}</p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>Joined {format(subscriber.subscribedAt, "MMM d, yyyy")}</span>
                    <span>•</span>
                    <div className="flex gap-2">
                      {subscriber.preferences.daily && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded">Daily</span>
                      )}
                      {subscriber.preferences.weekly && (
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded">
                          Weekly
                        </span>
                      )}
                      {subscriber.preferences.questionOfTheDay && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded">QOTD</span>
                      )}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
