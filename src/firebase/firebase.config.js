// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCyEN0xPOMWt8CLJ2Ki77vg2boRWjH542w',
	authDomain: 'auth-firebase-context-ta-6064f.firebaseapp.com',
	projectId: 'auth-firebase-context-ta-6064f',
	storageBucket: 'auth-firebase-context-ta-6064f.appspot.com',
	messagingSenderId: '521159561167',
	appId: '1:521159561167:web:7b68711705c2b29b6a4cba',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default app;
