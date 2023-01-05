import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC24iQ-w2sMWXPFTv3AKwyG_yDH1rkoBHs",
  authDomain: "where-s-waldo-d5e96.firebaseapp.com",
  projectId: "where-s-waldo-d5e96",
  storageBucket: "where-s-waldo-d5e96.appspot.com",
  messagingSenderId: "367627075793",
  appId: "1:367627075793:web:2cf6fae7eb7c69dbdfc5f0",
  measurementId: "G-5BVYEH7B0Z",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
