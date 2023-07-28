import { createClient} from '@supabase/supabase-js';
//Connection à Supabase
//to be more secure: env.file.
const supabaseURL = "https://izrqwmgzbkaqehknnltt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cnF3bWd6YmthcWVoa25ubHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MDkwOTcsImV4cCI6MjAwMjQ4NTA5N30.JrrOXCzpGx2RUwY8YEcfo6ou9bUTw55lHWoOwfCZQio";

export const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;

