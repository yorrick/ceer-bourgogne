import { getPostBySlug, getAllPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Next.js 15 expects params to be awaited in dynamic routes
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose lg:prose-xl">
          {post.featuredImage && (
            <img src={post.featuredImage} alt={post.title} className="w-full h-auto rounded-lg mb-8" />
          )}
          <h1>{post.title}</h1>
          <p className="text-gray-600">
            Publié le {new Date(post.date).toLocaleDateString()} par {post.author}
          </p>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
} 