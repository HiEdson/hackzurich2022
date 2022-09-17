require("dotenv").config();
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  where,
  query,
} = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "hackzurich22-4030.firebaseapp.com",
  projectId: "hackzurich22-4030",
  storageBucket: "hackzurich22-4030.appspot.com",
  messagingSenderId: "148065768636",
  appId: "1:148065768636:web:6a5b38a6ea6396497aecb9",
  measurementId: "G-5S9V8RPCKX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getCollection(name) {
  return collection(db, name);
}

module.exports = { getCollection, addDoc, where, query, getDocs };
