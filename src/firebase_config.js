import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
//import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGtgITdQv1Q3AJECU2iO_fOI4oj2-Mge0",
  authDomain: "meta-b3fcb.firebaseapp.com",
  projectId: "meta-b3fcb",
  storageBucket: "meta-b3fcb.appspot.com",
  messagingSenderId: "66870062068",
  appId: "1:66870062068:web:1ff3cdb9b00db6fe3027a1",
  measurementId: "G-24KG0VVZWW"
};

// // Initialize Firebase
// export const app = Firebase.initializeApp(firebaseConfig);
// export const auth = Firebase.auth();
// export const firesto = Firebase.firestore();
// export const navigate = Firebase.useNavigate();
export const app = Firebase.initializeApp(firebaseConfig)
export const auth = Firebase.auth()
export const Firestore = Firebase.firestore()
export const storage = Firebase.storage()