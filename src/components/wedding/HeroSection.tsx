import React, { useEffect, useState } from 'react'
import { Calendar, Heart, Volume2, VolumeX, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FloralCornerTopLeft, FloralCornerBottomRight } from './FloralDecorations'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const HeroSection: React.FC = () => {
  // Wedding Date: November 21, 2026 09:00:00
  const weddingDate = new Date('2026-11-21T09:00:00')

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio] = useState<HTMLAudioElement | null>(() => {
    if (typeof Audio !== 'undefined') {
      const a = new Audio('/music/alhijratu.mp3')
      a.loop = true
      return a
    }
    return null
  })

  useEffect(() => {
    const calculateTime = () => {
      const difference = +weddingDate - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const toggleMusic = () => {
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Audio autoplay prevented:', e))
    }
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden bg-gradient-to-b from-background via-blush-light/50 to-background">
      {/* Decorative Corners */}
      <FloralCornerTopLeft className="absolute top-4 left-4" />
      <FloralCornerBottomRight className="absolute bottom-4 right-4" />

      {/* Music Player Floating Button */}
      <div className="fixed top-6 right-6 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMusic}
          className="rounded-full bg-background/80 backdrop-blur-md border-primary/30 shadow-md hover:bg-primary/10 text-primary transition-all duration-300 h-11 w-11"
          aria-label={isPlaying ? 'Mute romantic music' : 'Play romantic music'}
        >
          {isPlaying ? (
            <Volume2 className="h-5 w-5 animate-pulse" />
          ) : (
            <VolumeX className="h-5 w-5 opacity-70" />
          )}
        </Button>
      </div>

      {/* Floral Romantic Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush/60 text-primary border border-primary/20 text-xs tracking-widest uppercase mb-6 shadow-sm">
        <Heart className="w-3.5 h-3.5 fill-primary text-primary" />
        <span>Save The Date</span>
        <Heart className="w-3.5 h-3.5 fill-primary text-primary" />
      </div>

      {/* Main Header */}
      <p className="font-serif italic text-lg md:text-xl text-muted-foreground tracking-wider mb-3">
        Together with their families
      </p>

      {/* Couple Names */}
      <div className="relative my-2">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-foreground tracking-tight leading-tight">
          Aulia <span className="font-script text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl mx-2 align-middle">&</span> Wibowo
        </h1>
      </div>

      <p className="font-serif text-lg md:text-xl text-primary font-medium tracking-widest uppercase mt-4 mb-2">
        Are Getting Married
      </p>

      <p className="font-sans text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-8 font-light">
        We joyfully invite you to share in our happiness as we celebrate the beginning of our new journey together.
      </p>

      {/* Date Card */}
      <div className="glass-romantic rounded-2xl px-6 py-4 border border-primary/20 shadow-sm mb-10 max-w-sm w-full mx-auto flex items-center justify-center gap-4">
        <Calendar className="w-5 h-5 text-accent" />
        <div className="text-left">
          <p className="font-serif text-base md:text-lg font-semibold text-foreground">
            Saturday, November 21, 2026
          </p>
          <p className="text-xs text-muted-foreground">The Glasshouse Garden, Jakarta</p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mx-auto mb-10">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-card border border-border/80 shadow-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-medium mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button
          variant="romantic"
          size="lg"
          onClick={() => scrollToSection('rsvp')}
          className="shadow-lg shadow-primary/25"
        >
          <Heart className="w-4 h-4 fill-white" />
          RSVP Now
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollToSection('event-details')}
          className="border-primary/30 hover:bg-primary/5"
        >
          View Event Details
        </Button>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('couple')}
        className="mt-12 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
        aria-label="Scroll to story"
      >
        <span>Discover Our Story</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
