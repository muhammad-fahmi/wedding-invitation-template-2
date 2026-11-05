import React, { useState } from 'react'
import { GalleryPhoto } from '@/lib/gallery.functions'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Sparkles, Maximize2 } from 'lucide-react'

interface GallerySectionProps {
  photos: GalleryPhoto[]
}

export const GallerySection: React.FC<GallerySectionProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)

  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 text-primary font-script text-3xl md:text-4xl mb-2">
        <Sparkles className="w-5 h-5 text-accent" />
        <span>Precious Memories</span>
        <Sparkles className="w-5 h-5 text-accent" />
      </div>

      <h2 className="text-3xl md:text-5xl font-serif text-foreground font-normal tracking-tight mb-4">
        Our Photo Gallery
      </h2>

      <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-12 font-light">
        A glimpse into our sweetest laughter, quiet walks, and unforgettable journeys together.
      </p>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo, index) => (
          <div
            key={photo.id || index}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative overflow-hidden rounded-3xl bg-muted border border-border/70 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[4/5]"
          >
            <img
              src={photo.url}
              alt={photo.title || `Gallery photo ${index + 1}`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg'
              }}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
              <span className="font-serif text-lg text-white font-medium drop-shadow-md">
                {photo.title || `Moment ${index + 1}`}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog Modal */}
      <Dialog
        open={Boolean(selectedPhoto)}
        onOpenChange={(open) => !open && setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-4xl p-2 bg-black/90 border-neutral-800">
          {selectedPhoto && (
            <div className="flex flex-col items-center">
              <div className="relative max-h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-2xl">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title || 'Selected couple photo'}
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg'
                  }}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>
              <p className="font-serif italic text-white/90 text-center text-base md:text-lg mt-3 mb-1">
                {selectedPhoto.title || 'Aulia & Wibowo'}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
