import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sqlibfwbajexgdtngtsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxbGliZndiYWpleGdkdG5ndHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxOTU4NzMsImV4cCI6MjAwNzc3MTg3M30.Brl8vLnXe7KSG0yQWLTSuzY07RnrAt3xbj3f6mjLlfA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
