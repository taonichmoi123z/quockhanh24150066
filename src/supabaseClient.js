import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://klcdehyiflqemvdknsir.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsY2RlaHlpZmxxZW12ZGtuc2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MDY4NDcsImV4cCI6MjA3NzE4Mjg0N30.uevV1t8woGbXYK0Mt4wJs8bRWo3QaT_efMY9CZT4Jdg";
export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
