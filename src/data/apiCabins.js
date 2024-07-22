import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

/* ------------------------------------------------------------------------------------*/
const cabinsCollection = collection(db, "cabins");

export async function getCabins() {
  try {
    const data = await getDocs(cabinsCollection);
    const filteredData = data.docs?.map((doc, index) => ({
      ...doc?.data(),
      id: doc?.id,
    }));
    return filteredData || [];
  } catch (err) {
    throw new Error("Cant Get Cabins");
  }
}

export async function createCabin(newCabinObject) {
  try {
    await addDoc(cabinsCollection, newCabinObject);
  } catch (error) {
    throw new Error("Cant Craeted New Cabin");
  }
}

export async function updateCabin({ UpdatedCabinObject, id }) {
  const docObject = doc(db, "cabins", id);
  try {
    await updateDoc(docObject, UpdatedCabinObject);
  } catch (error) {
    throw new Error("Cant Updated This Cabin");
  }
}

export async function deleteCabins(id) {
  const docObject = doc(db, "cabins", id);
  try {
    await deleteDoc(docObject);
  } catch (error) {
    throw new Error("Cant Delete This Cabin");
  }
}
