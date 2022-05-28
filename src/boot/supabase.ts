import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UseAuthUser";

const supabaseUrl = "https://rabtbtzhwkjwuydhlled.supabase.co";
const supabasePublicKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhYnRidHpod2tqd3V5ZGhsbGVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MDM2NTgsImV4cCI6MTk2OTI3OTY1OH0.koNSPGms56fbC8DDME96uF1gXmOwIBzfILsiiQgGEMo";
const supabase = createClient(supabaseUrl, supabasePublicKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();

  user.value = session?.user || null;
});

export default function useSupabase() {
  return { supabase };
}
