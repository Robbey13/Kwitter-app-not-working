
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });    
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}