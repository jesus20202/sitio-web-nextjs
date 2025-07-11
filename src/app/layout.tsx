import type { Metadata } from "next";
import { SectionProvider } from "@/context/SectionContext";
import { TopBar } from "@/components/layout/TopBar";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { SecondaryNavigation } from "@/components/layout/SecondaryNavigation";
import { Footer } from "@/components/layout/Footer";
import PageRenderer from "@/components/PageRenderer";
import { useSection } from "@/hooks/useSection";
import ContentWithDynamicPage from "@/components/ContentWithDynamicPage";
import "./globals.css";



export const metadata: Metadata = {
  title: "Grand York Rite of California",
  description: "Further Light in Masonry - Discover the California York Rite of Freemasonry",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <SectionProvider>
          <TopBar />
          <MainNavigation />
          <SecondaryNavigation />
          <main className="flex-grow">
            <ContentWithDynamicPage>
              {children}
            </ContentWithDynamicPage>
          </main>
          <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}