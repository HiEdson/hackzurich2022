require("dotenv").config();
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  where,
  query,
  documentId,
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

async function getCausesFromId(causes_id, causes_map) {
  if (causes_id.length <= 0) return [];
  let total = 0;
  for (let key of Object.keys(causes_map)) total += causes_map[key];
  for (let key of Object.keys(causes_map))
    causes_map[key] = causes_map[key] * (100 / total);
  const causes = [];
  const q = query(
    getCollection("causes"),
    where(documentId(), "in", causes_id)
  );
  const snapshots = await getDocs(q);
  snapshots.forEach((snap) =>
    causes.push({ ...snap.data(), probability: causes_map[snap.id] })
  );
  return causes;
}

async function getUsersFromId(users_id, users_map) {
  if (users_id.length <= 0) return [];
  let total = 0;
  for (let key of Object.keys(users_map)) total += users_map[key];
  for (let key of Object.keys(users_map))
    users_map[key] = users_map[key] * (100 / total);
  const users = [];
  const q = query(getCollection("users"), where(documentId(), "in", users_id));
  const snapshots = await getDocs(q);
  snapshots.forEach((snap) =>
    users.push({ ...snap.data(), probability: users_map[snap.id] })
  );
  return users;
}

module.exports = {
  getCollection,
  addDoc,
  where,
  query,
  getDocs,
  documentId,
  getUsersFromId,
  getCausesFromId,
};
