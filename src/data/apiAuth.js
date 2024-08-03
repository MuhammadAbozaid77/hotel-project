import supabase, { supabaseUrl } from "./supabase";

/* --------------------------------- Login Auth ------------------------------ */

export async function authLogin() {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: "someone@email.com",
    password: "RtwmkvJPGpIxtceDxwOP",
  });

  if (error) {
    throw new Error("Cant Login In");
  }

  return data;
}
