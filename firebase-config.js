import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Tu configuración de Firebase se mantiene intacta
const firebaseConfig = {
  apiKey: "AIzaSyAisXGZC_EdxGooYtcnXjIPDBifn4gOnw8",
  authDomain: "grupofalpat-80428.firebaseapp.com",
  projectId: "grupofalpat-80428",
  storageBucket: "grupofalpat-80428.firebasestorage.app",
  messagingSenderId: "730249631470",
  appId: "1:730249631470:web:32739ab9123cf53f6a05ff",
  measurementId: "G-LQM9S9207K"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar la función de guardado de mensajes
export const saveContactMessage = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "contact_messages"), {
      ...formData,
      timestamp: serverTimestamp()
    });
    console.log("Mensaje guardado con ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error al añadir el mensaje: ", e);
    return false;
  }
};