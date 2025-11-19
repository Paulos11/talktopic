"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import { networkSites } from "@/lib/data/extended-data";
import type { NetworkSite } from "@/types";

export default function NetworkSitesManagementPage() {
  const [sites] = useState<NetworkSite[]>(networkSites);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
    icon: "",
    category: "main" as "main" | "youth" | "kids" | "reference" | "other",
  });

  const sitesByCategory = {
    main: sites.filter((s) => s.category === "main"),
    reference: sites.filter((s) => s.category === "reference"),
    youth: sites.filter((s) => s.category === "youth"),
    kids: sites.filter((s) => s.category === "kids"),
    other: sites.filter((s) => s.category === "other"),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Network Sites</h1>
          <p className="text-muted-foreground mt-2">
            Manage partner ministry websites
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          New Site
        </Button>
      </div>

      {/* New Site Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Network Site</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Site Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Bible Reference"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of the site"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="url">URL</Label>
                  <Input
                    id="url"
                    placeholder="https://example.com"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="icon">Icon (Emoji)</Label>
                  <Input
                    id="icon"
                    placeholder="📖"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="main">Main</option>
                  <option value="reference">Reference</option>
                  <option value="youth">Youth</option>
                  <option value="kids">Kids</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button type="submit">Save Site</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Sites by Category */}
      {Object.entries(sitesByCategory).map(([category, categorySites]) => {
        if (categorySites.length === 0) return null;
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="capitalize">{category} ({categorySites.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categorySites.map((site) => (
                  <div
                    key={site.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{site.icon}</div>
                      <div>
                        <h3 className="font-semibold">{site.name}</h3>
                        <p className="text-sm text-gray-600">{site.description}</p>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1"
                        >
                          {site.url}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
