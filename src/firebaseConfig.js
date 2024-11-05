// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVQmL5WEGEIVuJO8yIeolH_JqTmzKDx-g",
    authDomain: "pcev2-583ec.firebaseapp.com",
    projectId: "pcev2-583ec",
    storageBucket: "pcev2-583ec.firebasestorage.app",
    messagingSenderId: "408691372471",
    appId: "1:408691372471:web:7711eed6155229e37eb832"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };
