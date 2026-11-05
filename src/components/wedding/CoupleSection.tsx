import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { FloralDivider } from './FloralDecorations'
import { Heart, Sparkles } from 'lucide-react'

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="py-20 px-4 max-w-5xl mx-auto text-center relative">
      <div className="inline-flex items-center gap-2 text-primary font-script text-3xl md:text-4xl mb-2">
        <Sparkles className="w-5 h-5 text-accent" />
        <span>Our Love Story</span>
        <Sparkles className="w-5 h-5 text-accent" />
      </div>

      <h2 className="text-3xl md:text-5xl font-serif text-foreground font-normal tracking-tight mb-6">
        Bride & Groom
      </h2>

      {/* Love Story Paragraph */}
      <div className="max-w-2xl mx-auto mb-16 px-4">
        <p className="font-serif italic text-lg md:text-xl text-foreground/80 leading-relaxed">
          "From a shared glance over coffee on a rainy afternoon to countless adventures, quiet Sunday mornings, and laughter that filled our days, we discovered that home isn't a place—it's each other. With full hearts, we invite you to stand beside us as we seal this promise forever."
        </p>
      </div>

      <FloralDivider />

      {/* Bride & Groom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 items-stretch">
        {/* Bride Card */}
        <Card className="glass-romantic border-primary/20 hover:border-primary/40 overflow-hidden relative group">
          <div className="h-2 bg-gradient-to-r from-primary to-blush" />
          <CardContent className="p-8 md:p-10 flex flex-col items-center text-center">
            {/* Portrait Frame */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-primary via-accent to-blush mb-6 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                  alt="Aulia Rahma"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg'
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-1">
              Aulia Rahma, S.Ds.
            </h3>
            <span className="text-xs uppercase tracking-widest text-primary font-medium mb-4">
              The Bride
            </span>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Daughter of <br />
              <strong className="text-foreground">Mr. Agus Santoso</strong> & <strong className="text-foreground">Mrs. Ratna Sari</strong>
            </p>

            <p className="text-xs italic text-muted-foreground/90 max-w-xs">
              "A warm soul passionate about art, books, and finding beauty in the little things."
            </p>
          </CardContent>
        </Card>

        {/* Groom Card */}
        <Card className="glass-romantic border-primary/20 hover:border-primary/40 overflow-hidden relative group">
          <div className="h-2 bg-gradient-to-r from-secondary to-accent" />
          <CardContent className="p-8 md:p-10 flex flex-col items-center text-center">
            {/* Portrait Frame */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-secondary via-accent to-sage mb-6 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                  alt="Wibowo Prasetyo"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg'
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-1">
              Wibowo Prasetyo, S.T.
            </h3>
            <span className="text-xs uppercase tracking-widest text-secondary font-medium mb-4">
              The Groom
            </span>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Son of <br />
              <strong className="text-foreground">Mr. Budi Prasetyo</strong> & <strong className="text-foreground">Mrs. Hartini</strong>
            </p>

            <p className="text-xs italic text-muted-foreground/90 max-w-xs">
              "A thoughtful adventurer with a gentle heart, endless patience, and an unwavering devotion."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground bg-card/60 px-4 py-2 rounded-full border border-border">
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          Two hearts united as one
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
        </div>
      </div>
    </section>
  )
}
