import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jpruuuqffrmcwgjlqtfj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwcnV1dXFmZnJtY3dnamxxdGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2OTMwODIsImV4cCI6MjA4MzI2OTA4Mn0.QRXroTArOetfmzvepRXPmIvruHGpHdd7MvO9YDTlWiU"
);

export default supabase;
