import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Copy, FileText, GraduationCap, Link as LinkIcon } from "lucide-react";

export const metadata = {
  title: "How to Cite TalkTopic | Citation Guidelines",
  description: "Learn how to properly cite TalkTopic content in your papers, articles, and research",
};

export default function CitingPage() {
  const citationFormats = [
    {
      name: "MLA Format (9th Edition)",
      icon: BookOpen,
      example: '"How Can I Be Saved?" TalkTopic.org, 2024, www.talktopic.org/questions/how-can-i-be-saved. Accessed 20 Jan. 2024.',
      template: '"[Question Title]." TalkTopic.org, [Year], www.talktopic.org/questions/[slug]. Accessed [Day Month Year].',
    },
    {
      name: "APA Format (7th Edition)",
      icon: GraduationCap,
      example: 'TalkTopic. (2024). How can I be saved? Retrieved January 20, 2024, from https://www.talktopic.org/questions/how-can-i-be-saved',
      template: 'TalkTopic. ([Year]). [Question title]? Retrieved [Month Day, Year], from https://www.talktopic.org/questions/[slug]',
    },
    {
      name: "Chicago Format (17th Edition)",
      icon: FileText,
      example: 'TalkTopic, "How Can I Be Saved?," accessed January 20, 2024, https://www.talktopic.org/questions/how-can-i-be-saved.',
      template: 'TalkTopic, "[Question Title]," accessed [Month Day, Year], https://www.talktopic.org/questions/[slug].',
    },
    {
      name: "Turabian Format",
      icon: BookOpen,
      example: 'TalkTopic, "How Can I Be Saved?," TalkTopic.org, accessed January 20, 2024, https://www.talktopic.org/questions/how-can-i-be-saved.',
      template: 'TalkTopic, "[Question Title]," TalkTopic.org, accessed [Month Day, Year], https://www.talktopic.org/questions/[slug].',
    },
  ];

  const blogCitationFormats = [
    {
      name: "MLA Format - Blog Post",
      example: 'Author Name. "Blog Post Title." TalkTopic Blog, 20 Jan. 2024, www.talktopic.org/blog/post-slug. Accessed 20 Jan. 2024.',
    },
    {
      name: "APA Format - Blog Post",
      example: 'Author, A. (2024, January 20). Blog post title. TalkTopic Blog. https://www.talktopic.org/blog/post-slug',
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
              <FileText className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Cite TalkTopic
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Properly reference TalkTopic content in your academic work, sermons, and articles
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Citation Guidelines</h2>
              <p className="text-gray-700 mb-4">
                We encourage you to use TalkTopic content in your research, papers, sermons, and articles.
                Below you'll find citation examples for the most common academic formats. Please adapt
                these templates to match your specific needs and the particular question or article you're citing.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> When citing TalkTopic, please reference the specific question page URL
                  you're using. Each question has a unique URL that makes it easy for readers to find the exact source.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Q&A Citations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Citing Q&A Pages</h2>
            <div className="space-y-4">
              {citationFormats.map((format, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <format.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold mb-3">{format.name}</h3>

                        <div className="mb-3">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Example:
                          </p>
                          <div className="bg-gray-50 p-3 rounded border border-gray-200 relative group">
                            <p className="text-sm text-gray-700 font-mono pr-8">
                              {format.example}
                            </p>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Template:
                          </p>
                          <div className="bg-blue-50 p-3 rounded border border-blue-200">
                            <p className="text-sm text-gray-700 font-mono">
                              {format.template}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Blog Citations */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Citing Blog Articles</h2>
            <div className="space-y-4">
              {blogCitationFormats.map((format, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{format.name}</h3>
                    <div className="bg-gray-50 p-3 rounded border border-gray-200 relative group">
                      <p className="text-sm text-gray-700 font-mono pr-8">
                        {format.example}
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <p>
                    <strong>Access Date:</strong> Always include the date you accessed the content, as online
                    resources can be updated or modified over time.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <p>
                    <strong>URL Format:</strong> Use the full URL of the specific question or article page.
                    This helps readers find the exact content you referenced.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <p>
                    <strong>Author Attribution:</strong> TalkTopic content is created collaboratively by our
                    editorial team. When an author is listed, you may cite them by name; otherwise, use
                    "TalkTopic" as the author.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <p>
                    <strong>Check with Your Institution:</strong> Different schools, universities, and
                    publishers may have specific citation requirements. Always follow the guidelines provided
                    by your instructor or publisher.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Permission & Copyright */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Permission to Use</h2>
              <p className="text-gray-700 mb-4">
                TalkTopic content is available for use in academic papers, sermons, Bible studies, and
                non-commercial publications. You may quote from our content as long as you provide proper
                attribution using one of the citation formats above.
              </p>
              <p className="text-gray-700">
                For commercial use, bulk reproduction, or questions about permissions, please contact us
                through our contact page.
              </p>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <LinkIcon className="h-6 w-6 text-primary" />
                Quick Tips
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Copy the URL directly from your browser's address bar to ensure accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Include the question title exactly as it appears on the page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use the current year (2024) unless the content displays a different publication date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>When in doubt, consult your style guide (MLA Handbook, APA Publication Manual, etc.)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
