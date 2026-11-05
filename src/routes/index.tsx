import { createFileRoute } from '@tanstack/react-router'
import { getGalleryImages } from '@/lib/gallery.functions'
import { HeroSection } from '@/components/wedding/HeroSection'
import { CoupleSection } from '@/components/wedding/CoupleSection'
import { EventSection } from '@/components/wedding/EventSection'
import { GallerySection } from '@/components/wedding/GallerySection'
import { RsvpSection } from '@/components/wedding/RsvpSection'
import { FooterSection } from '@/components/wedding/FooterSection'

export const Route = createFileRoute('/')({
  loader: async () => {
    const photos = await getGalleryImages()
    return { photos }
  },
  head: () => ({
    meta: [
      {
        title: 'The Wedding of Aulia & Wibowo | November 21, 2026',
      },
      {
        name: 'description',
        content:
          'We joyfully invite you to celebrate the wedding of Aulia Rahma and Wibowo Prasetyo. View event schedule, venue location, couple story, photo gallery, and RSVP online.',
      },
      {
        property: 'og:title',
        content: 'The Wedding of Aulia & Wibowo | Wedding Invitation',
      },
      {
        property: 'og:description',
        content:
          'Join us in celebrating the holy matrimony and wedding reception of Aulia & Wibowo on Saturday, November 21, 2026 at The Glasshouse Garden, Jakarta.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'The Wedding of Aulia & Wibowo',
      },
      {
        name: 'twitter:description',
        content:
          'Join us in celebrating the holy matrimony and wedding reception of Aulia & Wibowo on Saturday, November 21, 2026.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80',
      },
    ],
  }),
  component: WeddingIndexPage,
})

function WeddingIndexPage() {
  const { photos } = Route.useLoaderData()

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <GallerySection photos={photos} />
      <RsvpSection />
      <FooterSection />
    </main>
  )
}
