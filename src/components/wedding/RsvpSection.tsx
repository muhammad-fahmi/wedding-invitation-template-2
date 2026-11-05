import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { rsvpSchema, type RsvpInput, submitRsvp } from '@/lib/rsvp.functions'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Heart, Loader2, Sparkles, AlertCircle } from 'lucide-react'

export const RsvpSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: '',
      email: '',
      attending: true,
      guest_count: 1,
      dietary_notes: '',
      message: '',
    },
  })

  const isAttending = watch('attending')

  const onSubmit = async (values: RsvpInput) => {
    setErrorMessage(null)
    try {
      const res = await submitRsvp({ data: values })
      setIsSubmitted(true)
      setSubmissionMessage(res.message)
    } catch (err: any) {
      console.error('RSVP submit error:', err)
      setErrorMessage(
        err?.message || 'There was an issue submitting your RSVP. Please try again.'
      )
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    reset()
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-blush-light/40 relative">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary font-script text-3xl md:text-4xl mb-1">
            <Sparkles className="w-5 h-5 text-accent" />
            <span>Celebrate With Us</span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-foreground font-normal tracking-tight mb-3">
            RSVP
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground font-light">
            Kindly respond by October 31, 2026 to help us prepare for your presence.
          </p>
        </div>

        <Card className="glass-romantic shadow-xl border-primary/20 rounded-3xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

          {isSubmitted ? (
            <CardContent className="p-8 md:p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-serif mb-2">
                RSVP Received!
              </CardTitle>
              <p className="text-muted-foreground mb-8 max-w-sm text-sm md:text-base">
                {submissionMessage}
              </p>
              <Button
                variant="outline"
                onClick={handleReset}
                className="rounded-full border-primary/30"
              >
                Submit another response
              </Button>
            </CardContent>
          ) : (
            <>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif">Will you attend?</CardTitle>
                <CardDescription>
                  Please fill out the form below with your details.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 md:p-8 pt-0">
                {errorMessage && (
                  <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold">
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="e.g. Maya Indah"
                      {...register('name')}
                      className={errors.name ? 'border-destructive ring-destructive/20' : ''}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold">
                      Email Address (Optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g. maya@example.com"
                      {...register('email')}
                      className={errors.email ? 'border-destructive ring-destructive/20' : ''}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Attendance Selection */}
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider font-semibold block">
                      Attendance Confirmation <span className="text-primary">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      <label
                        className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 text-sm font-medium ${
                          isAttending === true
                            ? 'bg-primary/10 border-primary text-primary shadow-sm ring-1 ring-primary/40'
                            : 'bg-card border-border hover:bg-muted/40 text-foreground/80'
                        }`}
                      >
                        <input
                          type="radio"
                          value="true"
                          className="sr-only"
                          checked={isAttending === true}
                          onChange={() => register('attending').onChange({ target: { value: true } })}
                        />
                        <Heart className={`w-4 h-4 ${isAttending === true ? 'fill-primary' : ''}`} />
                        <span>Joyfully Attend</span>
                      </label>

                      <label
                        className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 text-sm font-medium ${
                          isAttending === false
                            ? 'bg-muted border-foreground/30 text-foreground shadow-sm ring-1 ring-border'
                            : 'bg-card border-border hover:bg-muted/40 text-foreground/80'
                        }`}
                      >
                        <input
                          type="radio"
                          value="false"
                          className="sr-only"
                          checked={isAttending === false}
                          onChange={() => register('attending').onChange({ target: { value: false } })}
                        />
                        <span>Regretfully Decline</span>
                      </label>
                    </div>
                  </div>

                  {/* Guest Count (Only visible if attending) */}
                  {isAttending && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Label htmlFor="guest_count" className="text-xs uppercase tracking-wider font-semibold">
                        Total Number of Guests Attending
                      </Label>
                      <Input
                        id="guest_count"
                        type="number"
                        min={1}
                        max={10}
                        {...register('guest_count', { valueAsNumber: true })}
                        className={errors.guest_count ? 'border-destructive' : ''}
                      />
                      {errors.guest_count && (
                        <p className="text-xs text-destructive mt-1">{errors.guest_count.message}</p>
                      )}
                      <p className="text-[11px] text-muted-foreground">
                        Including yourself.
                      </p>
                    </div>
                  )}

                  {/* Dietary Notes */}
                  {isAttending && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Label htmlFor="dietary_notes" className="text-xs uppercase tracking-wider font-semibold">
                        Dietary Notes / Allergies (Optional)
                      </Label>
                      <Input
                        id="dietary_notes"
                        placeholder="e.g. Vegetarian, Halal, Nut allergy, None"
                        {...register('dietary_notes')}
                      />
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold">
                      Wishes for Aulia & Wibowo
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Share your prayers, blessing, or sweet words for the couple..."
                      {...register('message')}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="romantic"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-base font-medium rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting RSVP...
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4 fill-white" />
                        Confirm My RSVP
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </section>
  )
}
