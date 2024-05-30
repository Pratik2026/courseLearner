import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiQHaesw8oJk-xmDeUlbOZSv0Zk1qbixI",
  authDomain: "courselearner-1d625.firebaseapp.com",
  databaseURL:
    "https://courselearner-1d625-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "courselearner-1d625",
  storageBucket: "courselearner-1d625.appspot.com",
  messagingSenderId: "225864512338",
  appId: "1:225864512338:web:fbd40f74dfc62262d5808b",
  measurementId: "G-MZJCBS9SME",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
