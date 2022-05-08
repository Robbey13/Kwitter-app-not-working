var firebaseConfig = {
     apiKey: "AIzaSyAJDdRfSkajbNzLM_TcqJozZTb4gnSHUQI",
  authDomain: "kwitter-app-ba9dc.firebaseapp.com",
  databaseURL: "https://kwitter-app-ba9dc-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-ba9dc",
  storageBucket: "kwitter-app-ba9dc.appspot.com",
  messagingSenderId: "433649521013",
  appId: "1:433649521013:web:6b9cf6ea332e00ec44033c",
  measurementId: "G-Z2KJSV0KNR"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
function addUser(){
    
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
            purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}

