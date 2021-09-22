import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: 'AIzaSyB6HCCLYVN_BjRYkO1aWya46LUhq_cPTWc',
    authDomain: 'afstudio-cd25e.firebaseapp.com',
    projectId: 'afstudio-cd25e',
    storageBucket: "afstudio-cd25e.appspot.com",
    databaseURL: 'https://afstudio-cd25e-default-rtdb.firebaseio.com/',  
  };

function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
}

initFirebase()


export { firebase };

