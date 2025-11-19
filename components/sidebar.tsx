"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  Bell,
  User,
  Menu,
  X,
  BookOpen,
  FolderOpen,
  HelpCircle,
  MessageSquare,
  Globe,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigationSections = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
      { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Content Management",
    items: [
      { name: "Questions", href: "/admin/content", icon: FileText },
      { name: "Blog Posts", href: "/admin/blog", icon: BookOpen },
      { name: "Categories", href: "/admin/categories", icon: FolderOpen },
    ],
  },
  {
    title: "Site Content",
    items: [
      { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
      { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquare },
      { name: "Network Sites", href: "/admin/network-sites", icon: Globe },
    ],
  },
  {
    title: "User Management",
    items: [
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Newsletter", href: "/admin/newsletter", icon: Mail },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "Site Config", href: "/admin/site-config", icon: Settings },
      { name: "Notifications", href: "/admin/notifications", icon: Bell },
      { name: "Profile", href: "/admin/profile", icon: User },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-sidebar-border">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">T</span>
          </div>
          <span className="text-lg font-semibold">TalkTopic</span>
        </Link>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden text-sidebar-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {navigationSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-hover"
                    )}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="text-xs text-muted-foreground">
          © 2024 TalkTopic
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-sidebar border border-sidebar-border"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar border-r border-sidebar-border lg:hidden transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 w-64 flex-col bg-sidebar border-r border-sidebar-border">
        <SidebarContent />
      </aside>
    </>
  );
}