// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebaseConfig";
//
// const settingsCollection = collection(db, "settings");

// export async function getSettings() {
//   try {
//     const data = await getDocs(settingsCollection);
//     const filteredData = data.docs?.map((doc, index) => ({
//       ...doc?.data(),
//       id: doc?.id,
//     }));

//     return filteredData || [];
//   } catch (error) {
//     throw new Error("Cant Get Setting Data");
//   }
// }

//

import supabase, { supabaseUrl } from "./supabase";

/* --------------------------------- Get Settings------------------------------ */

export async function getSettings() {
  let { data, error } = await supabase.from("settings").select("*");

  if (error) {
    throw new Error("Cant Get Settings");
  }

  return data;
}
/* --------------------------------- Update  Settings------------------------------ */
export async function updateSettings({ newSettingsParams, id }) {
  console.log(newSettingsParams);
  const { data, error } = await supabase
    .from("settings")
    .update({ ...newSettingsParams })
    .eq("id", id);
  // .select();

  if (error) {
    throw new Error("Settings could not be Updated");
  }

  return data;
}
