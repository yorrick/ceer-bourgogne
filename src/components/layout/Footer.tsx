import Link from 'next/link';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Comité d&apos;Endurance Équestre de Bourgogne
            </h3>
            <p className="text-gray-300 text-sm">
              Ce site s&apos;adresse à tous les cavaliers pratiquant l&apos;endurance 
              ou désireux de la pratiquer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/stages" className="text-gray-300 hover:text-white transition-colors">
                  Stages
                </Link>
              </li>
              <li>
                <Link href="/tarifs-et-reglements" className="text-gray-300 hover:text-white transition-colors">
                  Règlements
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-gray-300 hover:text-white transition-colors">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>14 ruelle au Pauvre</p>
              <p>21380 Messigny et Vantoux</p>
              <p>Tél: 06 78 37 04 08</p>
              <p>Email: janine.mareschal21@gmail.com</p>
            </div>
            
            {/* Social Media */}
            <div className="mt-4">
              <a
                href="https://www.facebook.com/CEER-Bourgogne-Endurance-équestre-1651352001821605/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} CEER Bourgogne. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 