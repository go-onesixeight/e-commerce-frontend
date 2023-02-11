import firebase from "firebase/app";
import "firebase/auth";

console.log(" process.env.REACT_APP_apiKey =>", process.env);

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_apiKey ?? "AIzaSyBpK-mOE0N_sWfSRt5mUlU_zcCiJ5Ja4GE",
  authDomain:
    process.env.REACT_APP_authDomain ?? "react-ecommerce-1a59c.firebaseapp.com",
  projectId: process.env.REACT_APP_projectId ?? "react-ecommerce-1a59c",
  storageBucket:
    process.env.REACT_APP_storageBucket ?? "react-ecommerce-1a59c.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId ?? "893690143725",
  appId:
    process.env.REACT_APP_appId ?? "1:893690143725:web:2ce3259bfcc21b14407de4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
export const auth = firebase.auth();
