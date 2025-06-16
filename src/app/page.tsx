import Image from 'next/image';
import Link from 'next/link';
import NoSSR from '../components/NoSSR';
import { getAllPosts } from '@/lib/content';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <NoSSR>
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Comité d&apos;Endurance Équestre de Bourgogne
            </h1>
            <p className="text-xl md:text-2xl">
              Découvrez l&apos;endurance équestre en Bourgogne
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dernières nouvelles
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <Link href={`/blog/${post.slug}`}>
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
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), 'dd MMMM yyyy', { locale: fr })}
                    </time>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex-grow">
                    <Link href={`/blog/${post.slug}`} className="hover:text-green-600">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center self-start text-green-600 hover:text-green-700 font-medium"
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
        </div>
      </section>

      {/* About Endurance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                VENEZ DÉCOUVRIR L&apos;ENDURANCE
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                Bienvenue sur le site du Comité d&apos;Endurance Équestre de Bourgogne.
              </p>
              
              <p className="text-gray-700 mb-6">
                Ce site s&apos;adresse à tous les cavaliers pratiquant l&apos;endurance 
                ou désireux de la pratiquer.
              </p>

              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Équitation de pleine nature</li>
                <li>• Développement de la complicité avec le cheval</li>
                <li>• Gestion de l&apos;effort dans le respect du cheval</li>
                <li>• Seul ou en groupe, avec votre cheval ou ceux du club</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Pour tout renseignement complémentaire, s&apos;adresser au CEERB.
              </p>
              
              <p className="text-gray-700">
                06 78 37 04 08 ou{' '}
                <a href="mailto:janine.mareschal21@gmail.com" className="text-green-600 hover:underline">
                  janine.mareschal21@gmail.com
                </a>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">À LA UNE</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">
                PRISE DE LICENCE / CERTIFICAT MÉDICAL
              </h3>
              <Link 
                href="/calendrier-licence" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                En savoir +
              </Link>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">
                BROCHURE / CALENDRIER
              </h3>
              <Link 
                href="/calendrier-licence" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                En savoir +
              </Link>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">DONS AU CEERB</h3>
              <p className="text-gray-300 mb-4">Association agréée</p>
              <Link 
                href="/cotisation-dons" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                En savoir +
              </Link>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">RÈGLEMENTS</h3>
              <Link 
                href="/tarifs-et-reglements" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                En savoir +
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About CEERB Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Le Comité d&apos;Endurance Équestre Régional de Bourgogne
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p>
              Le CEER Bourgogne est une association, loi 1901, agréée jeunesse et sport, 
              née en 1995 à la demande du CNREE à un moment où l&apos;expansion de l&apos;endurance 
              ne lui permettait plus l&apos;organisation et la gestion de la discipline au niveau 
              régional et national. Elle est agréée par les services fiscaux pour recevoir 
              des dons et délivrer des reçus fiscaux.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">
              Dans ses statuts le CEERB a pour objet :
            </h3>
            
            <ul>
              <li>de grouper au plan régional les personnes physiques et morales intéressées par l&apos;Endurance Équestre,</li>
              <li>de promouvoir les activités d&apos;Endurance Équestre,</li>
              <li>de développer, en particulier dans la jeunesse, le goût et la pratique de toutes les activités d&apos;Endurance,</li>
              <li>d&apos;organiser des concours ou manifestations d&apos;Endurance Équestre,</li>
              <li>d&apos;assister les clubs affiliés dans l&apos;organisation des concours ou manifestations d&apos;Endurance Équestre,</li>
              <li>de proposer les orientations des activités d&apos;Endurance Équestre.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </NoSSR>
  );
} 