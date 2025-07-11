'use client';

import { useSection } from '@/hooks/useSection';
import PageRenderer from '@/components/PageRenderer';

export default function ContentWithDynamicPage({ children }: { children: React.ReactNode }) {
  const { activePage } = useSection();
  return (
    <>
      <PageRenderer />
      {!activePage && children}
    </>
  );
}