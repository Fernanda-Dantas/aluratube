import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://tgibqollpnxrthtsxosn.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaWJxb2xscG54cnRodHN4b3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MTE4MDksImV4cCI6MTk4NTM4NzgwOX0.zcMKc-fyF8Uw32CYgMrPwiIGohk7FZ-ffC0L4TakQn0";
const supabase = createClient(PROJECT_URL, API_KEY);

export function videoService() {
    return {
        getAllVideos() {
           return supabase.from("video-playlists")
                .select("*");
        }
    }
}

// pasta service: possui todas as chamadas de serviço externo que temos no projeto.