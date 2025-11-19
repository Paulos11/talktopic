import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/lib/data/extended-data";
import Link from "next/link";
import { HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Frequently Asked Questions | TalkTopic",
  description: "Find answers to common questions about using TalkTopic and our ministry",
};

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform and ministry
          </p>
        </div>

        {/* FAQs by Category */}
        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category) => {
            const categoryFAQs = faqs.filter((faq) => faq.category === category);
            return (
              <div key={category}>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-base px-4 py-1">
                    {category}
                  </Badge>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {categoryFAQs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left font-semibold">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                If you couldn&apos;t find the answer you were looking for, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/submit-question">
                  <Button size="lg" variant="outline">
                    Submit a Question
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
