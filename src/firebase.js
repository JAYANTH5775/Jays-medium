import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvOlEneeUhaqc09BDDSPnVULbFjwi6ZQg",
  authDomain: "medium-blog-bf09d.firebaseapp.com",
  projectId: "medium-blog-bf09d",
  storageBucket: "medium-blog-bf09d.firebasestorage.app",
  messagingSenderId: "524995365703",
  appId: "1:524995365703:web:d68522292bfa9c0a645a62"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export instances
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Test connection using already-created `db`
async function testConnection() {
  try {
    await addDoc(collection(db, "testCollection"), {
      testField: "Hello from React!"
    });
    console.log("✅ Firebase connected and test document added.");
  } catch (e) {
    console.error("❌ Firebase connection failed:", e);
  }
}

// Run connection test once
testConnection();
