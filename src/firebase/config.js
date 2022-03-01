// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// The Net Ninja Code
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD75vh8ycCKLuOiwDEP93iytG8wVE3CTQk',
	authDomain: 'ninja-firegram-6b42c.firebaseapp.com',
	projectId: 'ninja-firegram-6b42c',
	storageBucket: 'ninja-firegram-6b42c.appspot.com',
	messagingSenderId: '106639823521',
	appId: '1:106639823521:web:a71e809d79d1364853d6e0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }
