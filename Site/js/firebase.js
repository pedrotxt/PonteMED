
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxmbRUnavgb9i_YlU8424znKZnNWHtT4s",
    authDomain: "pontemed-64865.firebaseapp.com",
    projectId: "pontemed-64865",
    storageBucket: "pontemed-64865.appspot.com",
    messagingSenderId: "527592265649",
    appId: "1:527592265649:web:636989bd691701bcd74f90",
    measurementId: "G-C0TL19KQEG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);
