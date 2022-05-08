room_name=localStorage.getItem("room_name")
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0 
    });
    
    document.getElementById("msg").value = "";
}
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
 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //Start code
console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag =  "<h4 class='btn btn-warning' id="+firebase_message_id+"value="+like+"</span></button><hr>";
     //End code
      }});});}
getData();

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes_document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);
    
    firebase.database().ref(room_name).child(message_id).update({
        like : update_likes
    });
    
}