import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pggetyiqcakwbocdzdsf.supabase.co";
const supabaseKey = "sb_publishable_5w8vlAopA3RXrA42SvOAeg_d-_Yju-w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
