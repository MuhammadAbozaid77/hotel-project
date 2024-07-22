import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2nPc3bBBnQmn-jf5PfCkarBNdgFTHtMY",
  authDomain: "hotel-dashbord-9217c.firebaseapp.com",
  projectId: "hotel-dashbord-9217c",
  storageBucket: "hotel-dashbord-9217c.appspot.com",
  messagingSenderId: "548851192722",
  appId: "1:548851192722:web:c0a0497b377bf5cd8b274b",
  measurementId: "G-JN33TH6VW5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
