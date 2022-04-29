var firebaseConfig = {
    apiKey: "AIzaSyC93_EJM_fvO63QWSbyaEg00dWo-JDW6ZM",
    authDomain: "kwitter-3a6cc.firebaseapp.com",
    databaseURL: "https://kwitter-3a6cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-3a6cc",
    storageBucket: "kwitter-3a6cc.appspot.com",
    messagingSenderId: "762389405843",
    appId: "1:762389405843:web:3a441b850a8aea50dbad66",
    measurementId: "G-4ZDR2MT79D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";

}