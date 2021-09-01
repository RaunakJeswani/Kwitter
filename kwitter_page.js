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
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
