import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

//
const settingsCollection = collection(db, "settings");

export async function getSettings() {
  try {
    const data = await getDocs(settingsCollection);
    const filteredData = data.docs?.map((doc, index) => ({
      ...doc?.data(),
      id: doc?.id,
    }));

    return filteredData || [];
  } catch (error) {
    throw new Error("Cant Get Setting Data");
  }
}

//
export async function updateSettings(newParams) {
  console.log("newParams", newParams);
}
