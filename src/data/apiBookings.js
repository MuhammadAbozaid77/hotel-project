import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { db, firebaseStorage } from "./firebaseConfig";

/* -------------------------- Bookings -------------------------- */
const bookingsCollection = collection(db, "bookings");
/* ----------------------- Get Bookings ----------------------- */
export async function getBookings() {
  try {
    const data = await getDocs(bookingsCollection);
    const filteredData = data.docs?.map((doc, index) => ({
      ...doc?.data(),
      id: doc?.id,
    }));
    console.log(filteredData);
    return filteredData || [];
  } catch (error) {
    return error;
  }
}
