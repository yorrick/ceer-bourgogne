import { getPageBySlug, getAllPosts } from '@/lib/content'; // Assuming you might want to link to posts
import { notFound } from 'next/navigation';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
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
};

// If you want to pre-render these pages at build time
// export async function generateStaticParams() {
//   // This needs a function to list all page slugs, e.g., getAllPageSlugs()
//   // For now, we can disable it or implement it in content.ts
//   return []; 
// }

export default Page; 