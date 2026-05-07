import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAisXGZC_EdxGooYtcnXjIPDBifn4gOnw8",
  authDomain: "grupofalpat-80428.firebaseapp.com",
  projectId: "grupofalpat-80428",
  storageBucket: "grupofalpat-80428.firebasestorage.app",
  messagingSenderId: "730249631470",
  appId: "1:730249631470:web:32739ab9123cf53f6a05ff",
  measurementId: "G-LQM9S9207K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveContactMessage = async (formData) => {
  console.log("Intentando escribir en la colección 'contact_messages'...");
  try {
    const docRef = await addDoc(collection(db, "contact_messages"), {
      ...formData,
      timestamp: serverTimestamp()
    });
    console.log("Documento escrito con ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error detallado de Firestore:", e);
    // Alertamos el error exacto para que el usuario pueda decirnos qué falla
    alert("Error de Firebase (" + e.code + "): " + e.message);
    return false;
  }
};