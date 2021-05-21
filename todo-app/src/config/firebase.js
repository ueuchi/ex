import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC3l0eT-79dv_1VucD8yxDYYBIscqDoCNk",
    authDomain: "todo-list-1f325.firebaseapp.com",
    projectId: "todo-list-1f325",
    storageBucket: "todo-list-1f325.appspot.com",
    messagingSenderId: "218014057100",
    appId: "1:218014057100:web:f6d8794c70fd25182c71a9",
    measurementId: "G-6GBV28350G"
}

firebase.initializeApp(firebaseConfig)

export default firebase