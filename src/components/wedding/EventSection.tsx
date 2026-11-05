import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from 'lucide-react'
import { FloralDivider } from './FloralDecorations'

export const EventSection: React.FC = () => {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'The Wedding of Aulia & Wibowo'
  )}&dates=20261121T020000Z/20261121T143000Z&details=${encodeURIComponent(
    'Holy Matrimony and Wedding Reception of Aulia Rahma & Wibowo Prasetyo at The Glasshouse Garden, Jakarta.'
  )}&location=${encodeURIComponent(
    'The Glasshouse Garden, Jl. Kemang Timur No. 88, Jakarta Selatan'
  )}`

  const googleMapsUrl = 'https://maps.google.com/?q=The+Glasshouse+Garden+Jakarta'

  return (
    <section
      id="event-details"
      className="py-20 px-4 bg-muted/30 relative border-y border-border/60"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
          Wedding Schedule
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-foreground font-normal tracking-tight mb-4">
          Event Details
        </h2>
        <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-12 font-light">
          We would be honored by your presence at our wedding ceremony and celebratory reception.
        </p>

        {/* Two Event Cards: Holy Matrimony & Reception */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12">
          {/* Holy Matrimony */}
          <Card className="bg-card/90 backdrop-blur-sm border-primary/20 shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-blush/60 text-primary flex items-center justify-center mb-6 border border-primary/20">
                <Calendar className="w-6 h-6" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">
                Holy Matrimony
              </h3>
              <span className="text-xs uppercase tracking-widest text-primary font-medium mb-6">
                Ceremony
              </span>

              <div className="space-y-3 text-sm text-foreground/80 w-full mb-8">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>Saturday, November 21, 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>09:00 - 11:00 WIB</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-center">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>The Chapel at The Glasshouse Garden</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic mb-6">
                Please arrive 15 minutes prior to the sacred vow exchange.
              </p>

              <div className="mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full border-primary/30 hover:bg-primary/10"
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-3.5 h-3.5" />
                    Open Location Map
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Wedding Reception */}
          <Card className="bg-card/90 backdrop-blur-sm border-primary/20 shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-sage-light text-secondary-foreground flex items-center justify-center mb-6 border border-secondary/30">
                <Clock className="w-6 h-6 text-[#587160]" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">
                Wedding Reception
              </h3>
              <span className="text-xs uppercase tracking-widest text-secondary font-medium mb-6">
                Celebration & Dinner
              </span>

              <div className="space-y-3 text-sm text-foreground/80 w-full mb-8">
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>Saturday, November 21, 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>18:30 - 21:30 WIB</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-center">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Grand Ballroom at The Glasshouse Garden</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground italic mb-6">
                Dress Code: Romantic Pastel or Semi-Formal Elegant
              </p>

              <div className="mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-full border-secondary/30 hover:bg-secondary/10"
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-3.5 h-3.5" />
                    Open Location Map
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Venue Address Banner & Calendar Integration */}
        <Card className="glass-romantic max-w-2xl mx-auto p-6 md:p-8 rounded-3xl border-primary/20 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-xl font-semibold text-foreground mb-1">
                The Glasshouse Garden
              </h4>
              <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Jl. Kemang Timur No. 88, Bangka, Jakarta Selatan 12730
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="romantic" size="sm" asChild>
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarPlus className="w-4 h-4" />
                  Add to Calendar
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Google Maps
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
