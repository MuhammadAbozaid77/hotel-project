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

/* ------------------------------------------------------------------------------------*/
const cabinsCollection = collection(db, "cabins");
const cabinsImagesRef = ref(firebaseStorage, "CabinsStorage/");

export async function getCabins() {
  const dataFromStorage = await getCabinsImage();
  try {
    const data = await getDocs(cabinsCollection);
    const filteredData = data.docs?.map((doc, index) => ({
      ...doc?.data(),
      id: doc?.id,
    }));

    const FilterDataAndImages = filteredData.map((el) => {
      const imagePath2 = dataFromStorage.filter((ell) => {
        return ell
          .toLocaleLowerCase()
          .includes(el?.imageId?.toLocaleLowerCase());
      });
      return { ...el, imagePath: imagePath2[0] || null };
    });
    // console.log("FilterDataAndImages", FilterDataAndImages);
    return FilterDataAndImages || [];
  } catch (err) {
    throw new Error("Cant Get Cabins");
  }
}

export async function createCabin(newCabinObject) {
  try {
    await addCabinsImage(newCabinObject);
    await addDoc(cabinsCollection, {
      ...newCabinObject,
      image: newCabinObject?.image[0]?.name,
    });
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

export async function addCabinsImage(newCabinObject) {
  const cabinsStorageFolder = ref(
    firebaseStorage,
    `CabinsStorage/${newCabinObject?.imageId}`
  );
  uploadBytes(cabinsStorageFolder, newCabinObject?.image[0]);
}

export async function getCabinsImage() {
  // listAll(cabinsImagesRef).then((res) => {
  //   res?.items?.forEach((item) => {
  //     getDownloadURL(item).then((url) => {
  //       console.log([url]);
  //     });
  //   });
  // });

  const res = await listAll(cabinsImagesRef);
  const urlPromises = res?.items?.map((item) => getDownloadURL(item));
  const urls = await Promise.all(urlPromises);
  return urls;
}
