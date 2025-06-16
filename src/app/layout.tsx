import type { Metadata } from 'next'
import Layout from '../components/layout/Layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Comité d\'Endurance Équestre de Bourgogne',
  description: 'Découvrez l\'endurance équestre en Bourgogne avec le CEERB. Informations, événements et actualités pour les cavaliers d\'endurance.',
  keywords: ['endurance', 'équestre', 'bourgogne', 'cheval', 'association', 'sport'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
