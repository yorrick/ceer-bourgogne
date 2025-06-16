import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { getAllPosts } from '@/lib/content';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Actualités
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">
            Suivez toute l&apos;actualité de l&apos;endurance équestre en Bourgogne
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Featured Image Placeholder */}
              <div
                className="h-48 bg-gray-300 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${post.featuredImage || '/images/default-image.jpg'})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>
                    {format(new Date(post.date), 'dd MMMM yyyy', { locale: fr })}
                  </time>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Lire la suite
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé de toute l&apos;actualité
          </h3>
          <p className="mb-6">
            Suivez-nous sur Facebook ou contactez-nous directement pour ne rien manquer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.facebook.com/CEER-Bourgogne-Endurance-équestre-1651352001821605/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Suivre sur Facebook
            </a>
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 