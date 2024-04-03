// Import the functions you need from the SDKs you need
    
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Your web app's Firebase configuration
    
const firebaseConfig = {
    apiKey: "AIzaSyDYX72poGx_5ShZz9Goc8JYCGZTbZq-grU",
    authDomain: "cardiac-4d807.firebaseapp.com",
    databaseURL: "https://cardiac-4d807-default-rtdb.firebaseio.com",
    projectId: "cardiac-4d807",
    storageBucket: "cardiac-4d807.appspot.com",
    messagingSenderId: "706985819918",
    appId: "1:706985819918:web:64009f863a9556ce4be15f"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
var url = "https://webcourses.ucf.edu/login/oauth2/auth?";
const len = 16;
const db = getDatabase();

let state = '';
for (let i = 0; i < len; ++i) {
  state += (Math.floor(Math.random() * 16)).toString(16);
}

console.log("state:",state);

get(child(ref(db), '/')).then((snapshot) => {
  if (snapshot.exists()) {
    var val = snapshot.val();

    var client_id = val.client_id;
    var redirect_uri = val.redirect_uri;
    var response_type = val.response_type;

    url = url+'client_id='+client_id+'&response_type='+response_type+'&redirect_uri='+redirect_uri+'&state='+state;
    console.log("url:",url);

    window.location.href = url;

  } else {
    console.log(snapshot);
  }
}).catch((error) => {
  console.error(error);
});