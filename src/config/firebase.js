// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const register = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = await response.user;
    console.log(user);
  } catch (error) {
    console.log(error);
    toast.error(error.message, {
      theme: "colored",
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = await response.user;
    console.log(user);
  } catch (error) {
    console.log(error);
    toast.error(error.message, {
      theme: "colored",
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

const logout = async () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
    toast.error(error.message, {
      theme: "colored",
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export { auth, register, login, logout };
