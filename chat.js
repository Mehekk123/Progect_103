// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



