import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://rpavicohtzbylqkoudat.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwYXZpY29odHpieWxxa291ZGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjU1OTYsImV4cCI6MjA3NzMwMTU5Nn0.pAlMSb2HY1gogijvuZ2JQNN_9CNVoESsYUntO3PPsVk";
export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
