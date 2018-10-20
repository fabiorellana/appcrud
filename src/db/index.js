import firebase from 'firebase'
import 'firebase/store'

let config = {
	apiKey: "AIzaSyBLA7pRBZVsit-VWm0hThqRbVWiSAS-y0g",
    authDomain: "vuejs-appcrud.firebaseapp.com",
    databaseURL: "https://vuejs-appcrud.firebaseio.com",
    projectId: "vuejs-appcrud",
    storageBucket: "vuejs-appcrud.appspot.com",
    messagingSenderId: "258926152756"
}

let firebaseapp = firebase.initializeApp(config)
export default firebaseapp.firestore()
