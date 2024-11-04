
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rhueqyzqewutaqpdvcvg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJodWVxeXpxZXd1dGFxcGR2Y3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3Mjk3NjAsImV4cCI6MjA0NjMwNTc2MH0.pdUMfnzFOKdrlKW5vP7NIfhYXwdBT2c34kYwGpOIFmU'
export const supabase = createClient(supabaseUrl, supabaseKey);
