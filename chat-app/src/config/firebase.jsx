import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyAyJqAd5gKesU1QAcrfaO4CJkvAOkmb-TM",
    authDomain: "chat-app-304a2.firebaseapp.com",
    projectId: "chat-app-304a2",
    storageBucket: "chat-app-304a2.appspot.com",
    messagingSenderId: "963562949443",
    appId: "1:963562949443:web:3a1d3b49b9e8dcc1267df6",
    measurementId: "G-WG8Q2PHJWY"
}

firebase.initializeApp(firebaseConfig)

export default firebase