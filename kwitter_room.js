 var firebaseConfig = {
     apiKey: "AIzaSyCDNtnudrxnZtIzL0audrNczEqR8v7eCYw",
     authDomain: "kwitter-b1d73.firebaseapp.com",
     databaseURL: "https://kwitter-b1d73-default-rtdb.firebaseio.com",
     projectId: "kwitter-b1d73",
     storageBucket: "kwitter-b1d73.appspot.com",
     messagingSenderId: "419282640759",
     appId: "1:419282640759:web:8662d21cb9cef73de30b72"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
 }

 function getData() {
     firebase.database().ref("/").on('value', function (snapshot) {
         document.getElementById("output").innerHTML = "";
         snapshot.forEach(function (childSnapshot) {
             childKey = childSnapshot.key;
             Room_names = childKey;
             //Start code
             console.log("Room Name - " + Room_names);
             row = "<div class='room_name' id=" + room_names + " onclick='redirectToRommName(this.id)'>#" + room_names + "</div> <hr>";
             document.getElementById("output").innerHTML += row;
             //End code
         });
     });
 }
 getData();
