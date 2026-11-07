import { supabase, isSupabaseConfigured } from './supabase'

export interface GalleryPhoto {
  id: string
  name: string
  url: string
  title?: string
}

const FALLBACK_PHOTOS: GalleryPhoto[] = [
  {
    id: '1',
    name: 'gallery-1.jpg',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    title: 'Sunset Promise',
  },
  {
    id: '2',
    name: 'gallery-2.jpg',
    url: 'https://images.unsplash.com/photo-1583939411023-14783179e581?w=800&q=80',
    title: 'Gentle Embrace',
  },
  {
    id: '3',
    name: 'gallery-3.jpg',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    title: 'Walk Hand in Hand',
  },
  {
    id: '4',
    name: 'gallery-4.jpg',
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    title: 'Golden Hour Laughs',
  },
  {
    id: '5',
    name: 'gallery-5.jpg',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    title: 'Endless Whispers',
  },
  {
    id: '6',
    name: 'gallery-6.jpg',
    url: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80',
    title: 'Together Forever',
  },
]

export async function getGalleryImages(): Promise<GalleryPhoto[]> {
  if (!isSupabaseConfigured) {
    return FALLBACK_PHOTOS
  }

  try {
    const { data, error } = await supabase.storage
      .from('wedding-gallery')
      .list('', {
        limit: 30,
        sortBy: { column: 'name', order: 'asc' },
      })

    if (error) {
      console.warn('Gallery: Supabase storage error, using fallback photos.', error.message)
      return FALLBACK_PHOTOS
    }

    if (data && data.length > 0) {
      const photos = data
        .filter((file) => file.name && !file.name.startsWith('.'))
        .map((file, index) => {
          const { data: publicUrlData } = supabase.storage
            .from('wedding-gallery')
            .getPublicUrl(file.name)

          return {
            id: file.id || `photo-${index}`,
            name: file.name,
            url: publicUrlData.publicUrl,
            title: `Cherished Moments ${index + 1}`,
          }
        })

      return photos.length > 0 ? photos : FALLBACK_PHOTOS
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.warn('Gallery: Failed to reach Supabase, using fallback photos.', message)
  }

  return FALLBACK_PHOTOS
}
