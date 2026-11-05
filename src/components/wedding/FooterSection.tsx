import React from 'react'
import { Heart } from 'lucide-react'
import { FloralDivider } from './FloralDecorations'

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-background border-t border-border/80 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Monogram */}
        <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center bg-card shadow-sm mb-6">
          <span className="font-script text-4xl text-primary mt-1">A & W</span>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-foreground font-medium tracking-tight mb-2">
          Aulia & Wibowo
        </h3>

        <p className="font-serif italic text-sm text-accent tracking-widest uppercase mb-4">
          November 21, 2026
        </p>

        <FloralDivider className="my-4" />

        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8 font-light leading-relaxed">
          Thank you for showering us with love, prayers, and warm wishes as we begin our forever together.
        </p>

        <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70">
          <span>Crafted with love</span>
          <Heart className="w-3 h-3 text-primary fill-primary" />
          <span>for our beloved family & friends</span>
        </div>
      </div>
    </footer>
  )
}
