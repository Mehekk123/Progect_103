var firebaseConfig = {
    apiKey: "AIzaSyB-WBB50X8_X1XOm28OEhFUHUzSJtvZqng",
    authDomain: "kwitter-d8edb.firebaseapp.com",
    databaseURL: "https://kwitter-d8edb-default-rtdb.firebaseio.com",
    projectId: "kwitter-d8edb",
    storageBucket: "kwitter-d8edb.appspot.com",
    messagingSenderId: "563883804339",
    appId: "1:563883804339:web:d84f707ffd597b25ded2c6",
    measurementId: "G-TEGEVY3S47"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}