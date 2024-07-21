import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://climflyyeyjtwygjwiep.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsaW1mbHl5ZXlqdHd5Z2p3aWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzODE2NDksImV4cCI6MjAzNTk1NzY0OX0.WfXE0He-Ffcu3Gf-tkmoxSOy2xrSD9kqlASAHvY3F_c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
