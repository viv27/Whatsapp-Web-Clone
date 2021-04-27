import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyB-vMT3msD46463qJFk7TIvYWbKNKG2lo8",
    authDomain: "whatsapp-clone-332d2.firebaseapp.com",
    projectId: "whatsapp-clone-332d2",
    storageBucket: "whatsapp-clone-332d2.appspot.com",
    messagingSenderId: "700074838848",
    appId: "1:700074838848:web:bc53a7afcfb2c93b7408a5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db