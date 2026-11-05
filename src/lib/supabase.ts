import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  (typeof process !== 'undefined' && process.env?.SUPABASE_URL) ||
  import.meta.env?.VITE_SUPABASE_URL ||
  ''

const supabasePublishableKey =
  (typeof process !== 'undefined' && process.env?.SUPABASE_PUBLISHABLE_KEY) ||
  import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY ||
  ''

/** True only when real Supabase credentials are present in the environment. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey)

// createClient requires non-empty strings; use dummy values when unconfigured so
// the module loads without throwing, but gallery.functions.ts will skip calls.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabasePublishableKey || 'placeholder-key',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)
