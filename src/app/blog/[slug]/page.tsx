import { getPostBySlug, getAllPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage: FC<BlogPostPageProps> = ({ params }) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
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
  );
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default BlogPostPage; 