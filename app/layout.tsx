import type { Metadata } from "next";
import "./globals.css";
import "./print.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "TalkTopic Admin Dashboard",
  description: "Admin Dashboard for TalkTopic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="system" storageKey="talktopic-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
