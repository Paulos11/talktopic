import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About TalkTopic
          </h1>

          <div className="space-y-6 text-lg text-gray-700">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  TalkTopic exists to provide clear, biblical answers to life&apos;s most important questions. We believe the Bible is God&apos;s Word and contains truth for every area of life.
                </p>
                <p>
                  Our mission is to help people understand what the Bible says and how to apply it to their daily lives through accessible, well-researched answers grounded in Scripture.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">What We Believe</h2>
                <ul className="space-y-3 list-disc list-inside">
                  <li>The Bible is the inspired, inerrant Word of God</li>
                  <li>There is one God who exists in three persons: Father, Son, and Holy Spirit</li>
                  <li>Jesus Christ is God&apos;s Son who died for our sins and rose from the dead</li>
                  <li>Salvation is by grace alone through faith alone in Christ alone</li>
                  <li>The Bible is our final authority for faith and practice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="mb-4">
                  We approach every question with:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>A commitment to biblical accuracy</li>
                  <li>Careful research and study</li>
                  <li>Clear, understandable explanations</li>
                  <li>Respect for different perspectives while maintaining biblical truth</li>
                  <li>A heart to help people grow in their faith</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
                <p>
                  Have a question? We&apos;d love to help! Submit your question through our contact page, and our team will provide a biblical answer. You can also share our content to help others find truth in God&apos;s Word.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
