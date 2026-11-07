import { supabase } from './supabase'
import { z } from 'zod'

export const rsvpSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  attending: z.boolean(),
  guest_count: z.number().int().min(1, 'At least 1 guest required').max(10).default(1),
  dietary_notes: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
})

export type RsvpInput = z.infer<typeof rsvpSchema>

export async function submitRsvp(input: { data: RsvpInput }): Promise<{ success: true; message: string }> {
  const { data } = rsvpSchema.parse(input.data)

  const { error } = await supabase.from('rsvps').insert({
    name: data.name.trim(),
    email: data.email?.trim() || null,
    attending: data.attending,
    guest_count: data.attending ? Number(data.guest_count) : 0,
    dietary_notes: data.dietary_notes?.trim() || null,
    message: data.message?.trim() || null,
  })

  if (error) {
    console.error('Error inserting RSVP into Supabase:', error)
    throw new Error(error.message || 'Failed to submit RSVP')
  }

  return {
    success: true,
    message: data.attending
      ? `Thank you ${data.name}! We can't wait to celebrate with you.`
      : `Thank you for letting us know, ${data.name}. You will be warmly remembered!`,
  }
}
