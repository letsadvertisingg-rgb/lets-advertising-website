import type { TocItem } from "@/components/blog/TableOfContents";
import { TableOfContents } from "@/components/blog/TableOfContents";

interface BlogArticleLayoutProps {
  toc: TocItem[];
  children: React.ReactNode;
}

export function BlogArticleLayout({ toc, children }: BlogArticleLayoutProps) {
  return (
    <div className="w-full max-w-[var(--container--main-size)] px-[var(--container--size-padding)] mx-auto">
      <div className="grid grid-cols-1 gap-[var(--size--3xl)] lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-[var(--size--4xl)] xl:grid-cols-[minmax(0,1fr)_20rem]">
        <article className="order-2 min-w-0 flex flex-col lg:order-1">{children}</article>
        <TableOfContents items={toc} className="order-1 lg:order-2 lg:row-span-1" />
      </div>
    </div>
  );
}
