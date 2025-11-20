import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Eye, ThumbsUp } from "lucide-react";
import { formatNumber } from "@/lib/utils";

export const metadata = {
  title: "Crucial Questions | TalkTopic",
  description: "The most important questions about God, faith, and salvation that everyone should consider",
};

export default function CrucialQuestionsPage() {
  const crucialQuestions = [
    {
      id: "1",
      question: "Does God exist?",
      shortAnswer: "Yes. The existence of God can be demonstrated through creation, conscience, and the historical reliability of Scripture.",
      category: "Apologetics",
      views: 2500000,
      helpful: 45000,
      slug: "does-god-exist",
    },
    {
      id: "2",
      question: "Who is Jesus Christ?",
      shortAnswer: "Jesus Christ is the eternal Son of God who became human to save humanity from sin through His death and resurrection.",
      category: "Jesus Christ",
      views: 1800000,
      helpful: 38000,
      slug: "who-is-jesus-christ",
    },
    {
      id: "3",
      question: "How can I be saved?",
      shortAnswer: "Salvation comes through faith in Jesus Christ alone, not by works. Believe in Jesus as your Lord and Savior.",
      category: "Salvation",
      views: 3200000,
      helpful: 62000,
      slug: "how-to-be-saved",
    },
    {
      id: "4",
      question: "Is the Bible really the Word of God?",
      shortAnswer: "Yes. The Bible is God's inspired, inerrant Word, confirmed through prophecy fulfillment, manuscript evidence, and changed lives.",
      category: "The Bible",
      views: 1500000,
      helpful: 32000,
      slug: "is-bible-word-of-god",
    },
    {
      id: "5",
      question: "What happens after death?",
      shortAnswer: "After death, believers enter God's presence in heaven, while unbelievers face eternal separation from God in hell.",
      category: "Afterlife",
      views: 2800000,
      helpful: 48000,
      slug: "what-happens-after-death",
    },
    {
      id: "6",
      question: "Why did Jesus have to die?",
      shortAnswer: "Jesus died as a substitute for our sins, satisfying God's justice and providing the only way for humanity to be reconciled to God.",
      category: "Salvation",
      views: 1900000,
      helpful: 41000,
      slug: "why-did-jesus-die",
    },
    {
      id: "7",
      question: "Can I lose my salvation?",
      shortAnswer: "No. True believers are eternally secure in Christ. Salvation is God's work, not ours, and He preserves His children.",
      category: "Salvation",
      views: 1600000,
      helpful: 35000,
      slug: "can-i-lose-salvation",
    },
    {
      id: "8",
      question: "What is the Trinity?",
      shortAnswer: "The Trinity is the doctrine that God exists eternally as three distinct persons—Father, Son, and Holy Spirit—yet is one God.",
      category: "God",
      views: 1400000,
      helpful: 30000,
      slug: "what-is-the-trinity",
    },
    {
      id: "9",
      question: "Why does God allow suffering?",
      shortAnswer: "God allows suffering as a result of human free will, sin's consequences, and to accomplish His greater purposes in our lives.",
      category: "Theodicy",
      views: 2200000,
      helpful: 39000,
      slug: "why-does-god-allow-suffering",
    },
    {
      id: "10",
      question: "How do I know Christianity is the right religion?",
      shortAnswer: "Christianity is unique in offering salvation by grace through faith, confirmed by Christ's resurrection and fulfilled prophecy.",
      category: "Apologetics",
      views: 1300000,
      helpful: 28000,
      slug: "is-christianity-right-religion",
    },
    {
      id: "11",
      question: "What is sin?",
      shortAnswer: "Sin is any thought, word, or action that falls short of God's perfect standard and separates us from Him.",
      category: "Sin",
      views: 980000,
      helpful: 24000,
      slug: "what-is-sin",
    },
    {
      id: "12",
      question: "Does hell really exist?",
      shortAnswer: "Yes. Hell is the real place of eternal separation from God for those who reject His offer of salvation through Christ.",
      category: "Hell",
      views: 1700000,
      helpful: 33000,
      slug: "does-hell-exist",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Crucial Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The most important questions about God, faith, and eternity that every person should consider
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Why These Questions Matter</h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto">
                These are not just intellectual questions—they are life-and-death issues with eternal consequences. Your answers to these questions will determine not only how you live but where you spend eternity. We encourage you to examine each question carefully with an open heart and mind.
              </p>
            </CardContent>
          </Card>

          {/* Questions List */}
          <div className="space-y-6">
            {crucialQuestions.map((item, index) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                          {index + 1}
                        </div>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                      <Link href={`/questions/${item.slug}`}>
                        <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                          {item.question}
                        </CardTitle>
                      </Link>
                      <CardDescription className="text-base mt-2">{item.shortAnswer}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{formatNumber(item.views)} views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{formatNumber(item.helpful)} helpful</span>
                      </div>
                    </div>
                    <Link href={`/questions/${item.slug}`}>
                      <Badge className="cursor-pointer hover:bg-primary/90">Read Full Answer</Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Have More Questions?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                These crucial questions are just the beginning. We have thousands of answers to help you understand God's Word and grow in your faith.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/search">
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Search All Questions
                  </button>
                </Link>
                <Link href="/submit-question">
                  <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Ask Your Question
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
