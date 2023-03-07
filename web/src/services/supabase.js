import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aukqejqsiqsqowafpppb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1a3FlanFzaXFzcW93YWZwcHBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNjM4NTAsImV4cCI6MTk4NDczOTg1MH0.i4vEA-UsuSuTIKgxQv7Pd_afDJVQa254Q3mm7MCgV_Q";

export const supabase = createClient(supabaseUrl, supabaseKey);
