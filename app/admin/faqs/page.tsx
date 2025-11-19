"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, GripVertical } from "lucide-react";
import { faqs } from "@/lib/data/extended-data";
import type { FAQ } from "@/types";

export default function FAQManagementPage() {
  const [faqList] = useState<FAQ[]>(faqs);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "General",
  });

  const categories = Array.from(new Set(faqList.map((f) => f.category)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">FAQ Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage frequently asked questions
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          New FAQ
        </Button>
      </div>

      {/* New FAQ Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                  <option value="new">+ Add New Category</option>
                </select>
              </div>
              <div>
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  placeholder="Enter the question"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="answer">Answer</Label>
                <Textarea
                  id="answer"
                  placeholder="Enter the answer"
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  rows={4}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Save FAQ</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* FAQs by Category */}
      {categories.map((category) => {
        const categoryFAQs = faqList.filter((f) => f.category === category);
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category} ({categoryFAQs.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categoryFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <GripVertical className="h-5 w-5 text-gray-400 cursor-move mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{faq.question}</h3>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                        <div className="text-xs text-gray-500 mt-1">Order: {faq.order}</div>
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
