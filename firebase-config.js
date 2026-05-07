import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Reemplazar con las credenciales del usuario desde la consola de Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
