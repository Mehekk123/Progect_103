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
  room_name = localStorage.getItem("room_name");

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          messege:msg,
          like:0
    });

    document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
