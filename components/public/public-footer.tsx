import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import NewsletterSignup from "./newsletter-signup";

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-white">Q</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TalkTopic</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Your trusted source for biblical answers to life's questions. We provide clear, Scripture-based responses to help you grow in your faith and understanding of God's Word.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="max-w-sm">
              <NewsletterSignup variant="compact" />
            </div>
          </div>

          {/* Popular Topics */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Popular Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/god" className="text-gray-600 hover:text-primary transition-colors">
                  God & Trinity
                </Link>
              </li>
              <li>
                <Link href="/categories/jesus-christ" className="text-gray-600 hover:text-primary transition-colors">
                  Jesus Christ
                </Link>
              </li>
              <li>
                <Link href="/categories/bible" className="text-gray-600 hover:text-primary transition-colors">
                  The Bible
                </Link>
              </li>
              <li>
                <Link href="/categories/salvation" className="text-gray-600 hover:text-primary transition-colors">
                  Salvation
                </Link>
              </li>
              <li>
                <Link href="/categories/prayer" className="text-gray-600 hover:text-primary transition-colors">
                  Prayer & Worship
                </Link>
              </li>
              <li>
                <Link href="/categories/christian-living" className="text-gray-600 hover:text-primary transition-colors">
                  Christian Living
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-gray-600 hover:text-primary transition-colors font-medium">
                  View All Topics →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-primary transition-colors">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/topics" className="text-gray-600 hover:text-primary transition-colors">
                  Topic Index
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-primary transition-colors">
                  Search Questions
                </Link>
              </li>
              <li>
                <Link href="/submit-question" className="text-gray-600 hover:text-primary transition-colors">
                  Submit a Question
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-600 hover:text-primary transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© {currentYear} TalkTopic. All rights reserved. A ministry dedicated to sharing biblical truth.</p>
            <div className="flex gap-4">
              <span>🌍 Available in 100+ languages</span>
              <span>•</span>
              <span>📖 2,000+ Questions Answered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
