import { ReactNode } from "react";
import PublicNav from "@/components/public/public-nav";
import PublicFooter from "@/components/public/public-footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNav />
      <main className="flex-1">{children}</main>
      <PublicFooter />
    </div>
  );
}
