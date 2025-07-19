'use client';

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { SectionProvider } from "@/context/SectionContext";
import { TopBar } from "@/components/layout/TopBar";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { SecondaryNavigation } from "@/components/layout/SecondaryNavigation";
import { Footer } from "@/components/layout/Footer";
import ContentWithDynamicPage from "@/components/ContentWithDynamicPage";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isExcludedPage = ["/login-intranet", "/dashboard-intranet", "/admin","/login-admin"].includes(pathname); // Condición para login y dashboard

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SectionProvider>
          {!isExcludedPage && <TopBar />}
          {!isExcludedPage && <MainNavigation />}
          {!isExcludedPage && <SecondaryNavigation />}
          <main className="flex-grow">
            {!isExcludedPage ? (
              <ContentWithDynamicPage>{children}</ContentWithDynamicPage>
            ) : (
              children
            )}
          </main>
          {!isExcludedPage && <Footer />}
        </SectionProvider>
      </body>
    </html>
  );
}