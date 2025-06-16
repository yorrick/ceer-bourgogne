import { getPageBySlug, getAllPageSlugs } from '@/lib/content'; // Assuming you might want to link to posts
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Next.js 15 expects params to be awaited in dynamic routes
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <h1>{page.title}</h1>
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </article>
    </div>
  );
}

// If you want to pre-render these pages at build time
export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs;
} 