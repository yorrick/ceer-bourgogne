import { getPageBySlug, getAllPageSlugs } from '@/lib/content'; // Assuming you might want to link to posts
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// The FC type and explicit interface are often not needed and can cause type issues.
// We can simplify the props definition.
export default function Page({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug);

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