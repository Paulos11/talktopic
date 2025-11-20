import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Cross, Heart, Users } from "lucide-react";

export const metadata = {
  title: "Statement of Faith | TalkTopic",
  description: "Our theological beliefs and doctrinal positions based on Scripture",
};

export default function StatementOfFaithPage() {
  const beliefs = [
    {
      title: "The Bible",
      icon: BookOpen,
      content: "We believe the Bible is the inspired, inerrant, and authoritative Word of God. It is the sole and final authority for faith and practice (2 Timothy 3:16-17; 2 Peter 1:20-21).",
    },
    {
      title: "The Godhead",
      icon: Cross,
      content: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit. These three are co-equal and co-eternal (Matthew 28:19; 2 Corinthians 13:14).",
    },
    {
      title: "Jesus Christ",
      icon: Heart,
      content: "We believe Jesus Christ is the eternal Son of God who became fully human while remaining fully divine. He was born of a virgin, lived a sinless life, died on the cross for our sins, rose bodily from the dead, and ascended to heaven (John 1:1, 14; 1 Corinthians 15:3-4).",
    },
    {
      title: "Salvation",
      icon: Users,
      content: "We believe salvation is a gift of God's grace received through faith in Jesus Christ alone. It cannot be earned through good works but results in a transformed life (Ephesians 2:8-9; Romans 10:9-10).",
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Beliefs</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Statement of Faith
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We are Christian, evangelical, theologically conservative, and nondenominational
            </p>
          </div>

          {/* Core Beliefs */}
          <div className="grid gap-6 mb-12">
            {beliefs.map((belief) => (
              <Card key={belief.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <belief.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{belief.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{belief.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Doctrinal Positions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Detailed Doctrinal Positions</CardTitle>
              <CardDescription>
                Our complete theological stance on key Christian doctrines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">The Holy Spirit</h3>
                <p className="text-gray-700">
                  We believe the Holy Spirit is the third person of the Trinity, co-equal with the Father and Son. He convicts the world of sin, regenerates believers, indwells them at salvation, and empowers them for Christian living and service (John 16:7-11; Titus 3:5; 1 Corinthians 12:13).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Sin and Humanity</h3>
                <p className="text-gray-700">
                  We believe all people are born with a sinful nature inherited from Adam and are sinners by choice. Sin separates humanity from God and results in spiritual death. All have sinned and fall short of God's glory (Romans 3:23; Romans 6:23).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">The Church</h3>
                <p className="text-gray-700">
                  We believe the Church is the body of Christ, composed of all believers from Pentecost to the Rapture. The local church exists to glorify God through worship, edification of believers, and evangelization of the lost (Ephesians 1:22-23; Matthew 28:19-20).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Baptism and the Lord's Supper</h3>
                <p className="text-gray-700">
                  We believe baptism is an outward expression of an inward faith, symbolizing the believer's identification with Christ's death, burial, and resurrection. The Lord's Supper is a memorial of Christ's sacrifice and a proclamation of His death until He returns (Romans 6:3-4; 1 Corinthians 11:23-26).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Future Things</h3>
                <p className="text-gray-700">
                  We believe in the personal, bodily return of Jesus Christ. We believe in the bodily resurrection of both the saved and the lost—the saved to eternal life in heaven and the lost to eternal punishment in hell (John 14:1-3; Revelation 20:11-15).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Christian Living</h3>
                <p className="text-gray-700">
                  We believe Christians are called to live holy lives, separate from worldly practices, and devoted to God. Believers should walk by the Spirit, produce the fruit of the Spirit, and use their spiritual gifts to serve others (Galatians 5:16-25; Romans 12:1-2).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">The Great Commission</h3>
                <p className="text-gray-700">
                  We believe it is the responsibility of every Christian to share the gospel with all people everywhere. The mission of the Church is to make disciples of all nations, baptizing them and teaching them to observe all that Christ commanded (Matthew 28:18-20; Acts 1:8).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> This statement of faith represents the core theological beliefs that guide our ministry. While we are nondenominational, we hold firmly to these biblical truths and present all content through this theological framework. We welcome dialogue with all believers while maintaining these foundational convictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
