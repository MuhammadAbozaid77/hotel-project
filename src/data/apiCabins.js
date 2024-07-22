import { collection, getDocs } from "firebase/firestore";
import supabase, { supabaseUrl } from "./supabase";
import { db } from "./firebaseConfig";

/* ------------------------------------------------------------------------------------*/
const cabinsCollection = collection(db, "cabins");

export async function getCabins() {
  try {
    const data = await getDocs(cabinsCollection);
    const filteredData = data.docs?.map((doc, index) => ({
      ...doc?.data(),
      id: "",
    }));
    console.log(filteredData);
    return filteredData || [];
  } catch (err) {
    throw new Error("Cant Craeted New Cabin");
  }
}

export async function createCabin(newCabinObject) {
  const data = "";
  const error = "";

  //  1- Create Cabin

  if (error) {
    throw new Error("Cant Craeted New Cabin");
  }
  // 2- Add Image

  return data;
}

// export async function createCabin(newCabinObject) {
//   //  https://climflyyeyjtwygjwiep.supabase.co
//   const imageName = `${Math.random()}-${newCabinObject.image}`;

//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//   //  1- Create Cabin
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabinObject, image: imagePath }]);
//   // .select();
//   if (error) {
//     throw new Error("Cant Craeted New Cabin");
//   }
//   // 2- Add Image
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabinObject.image);

//   // 3 - Delete Cabin Image If There Are Presence An Error
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     throw new Error("Cant Craeted New Cabin , Cabin Image NotFound");
//   }

//   return data;
// }

export async function updateCabin(newCabinObject) {
  return;
}

export async function deleteCabins(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Cabin Cant Deleted");
  }

  return data;
}
