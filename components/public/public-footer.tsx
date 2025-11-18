import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About TalkTopic</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your trusted source for biblical answers to life's questions. We provide clear, biblical responses to help you grow in your faith.
            </p>
            <div className="flex gap-3">
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
          </div>

          {/* Popular Topics */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Popular Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/god" className="text-gray-600 hover:text-primary transition-colors">
                  God
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
                  Prayer
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-primary transition-colors">
                  Browse Topics
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-600 hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to receive weekly devotionals and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© {currentYear} TalkTopic. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
