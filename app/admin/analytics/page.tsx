"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";
import { Users, Eye, TrendingUp, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  mockAnalytics,
  mockContentPerformanceData,
  mockTrafficSourcesData,
  mockUserGrowthData,
} from "@/lib/data";
import { formatNumber, formatPercentage } from "@/lib/utils";
import { CHART_COLORS } from "@/lib/constants";
import { useState } from "react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Track your platform's performance and user behavior
          </p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Page Views"
          value={mockAnalytics.pageViews}
          icon={Eye}
          trend={15.3}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100 dark:bg-blue-900/20"
        />
        <StatCard
          title="Unique Visitors"
          value={mockAnalytics.uniqueVisitors}
          icon={Users}
          trend={8.7}
          iconColor="text-green-600"
          iconBgColor="bg-green-100 dark:bg-green-900/20"
        />
        <StatCard
          title="Bounce Rate"
          value={mockAnalytics.bounceRate}
          icon={TrendingUp}
          trend={-2.4}
          format="percentage"
          iconColor="text-amber-600"
          iconBgColor="bg-amber-100 dark:bg-amber-900/20"
        />
        <StatCard
          title="Avg. Session"
          value={`${Math.floor(mockAnalytics.avgSessionDuration / 60)}m ${mockAnalytics.avgSessionDuration % 60}s`}
          icon={Clock}
          trend={5.1}
          format="text"
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100 dark:bg-purple-900/20"
        />
      </div>

      {/* User Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Type Distribution</CardTitle>
            <CardDescription>New vs returning users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-2">New Users</p>
                <p className="text-2xl font-bold">{formatNumber(mockAnalytics.newUsers)}</p>
                <p className="text-xs text-green-500 mt-1">
                  {formatPercentage((mockAnalytics.newUsers / (mockAnalytics.newUsers + mockAnalytics.returningUsers)) * 100)}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground mb-2">Returning Users</p>
                <p className="text-2xl font-bold">{formatNumber(mockAnalytics.returningUsers)}</p>
                <p className="text-xs text-blue-500 mt-1">
                  {formatPercentage((mockAnalytics.returningUsers / (mockAnalytics.newUsers + mockAnalytics.returningUsers)) * 100)}
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={[
                    { name: "New Users", value: mockAnalytics.newUsers },
                    { name: "Returning Users", value: mockAnalytics.returningUsers },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#3b82f6" />
                </Pie>
                <Tooltip
                  formatter={(value: number) => formatNumber(value)}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockTrafficSourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.name}
                  outerRadius={100}
                  dataKey="value"
                >
                  {mockTrafficSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => formatNumber(value)}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* User Growth Trend */}
      <Card>
        <CardHeader>
          <CardTitle>User Growth Trend</CardTitle>
          <CardDescription>Monthly user acquisition over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={mockUserGrowthData}>
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
                formatter={(value: number) => [formatNumber(value), "Users"]}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGrowth)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Content Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Content Performance by Category</CardTitle>
          <CardDescription>Posts and views across different categories</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={mockContentPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                className="text-xs"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
                formatter={(value: number) => formatNumber(value)}
              />
              <Legend />
              <Bar dataKey="posts" fill="#3b82f6" name="Posts" radius={[4, 4, 0, 0]} />
              <Bar dataKey="views" fill="#10b981" name="Views" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Most Popular Post</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-1">The Future of AI in Business</p>
            <p className="text-sm text-muted-foreground">2,345 views</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Top Referrer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-1">google.com</p>
            <p className="text-sm text-muted-foreground">8,900 visitors</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Peak Traffic Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold mb-1">2:00 PM - 4:00 PM</p>
            <p className="text-sm text-muted-foreground">Weekdays (EST)</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}