import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anonKey, {
  db: { schema: 'cheongsoda' },
  auth: { persistSession: false },
});

export type Inquiry = {
  id: string;
  name: string;
  phone: string;
  region: string | null;
  service: string | null;
  size: string | null;
  consent: boolean;
  status: 'new' | 'contacted' | 'completed';
  memo: string | null;
  created_at: string;
  updated_at: string;
};
