var firebaseConfig = {
      apiKey: "AIzaSyDdEr9eA8p4yfUu98rOBkywCXAR2_o2LqM",
      authDomain: "kwitter-85671.firebaseapp.com",
      databaseURL: "https://kwitter-85671-default-rtdb.firebaseio.com",
      projectId: "kwitter-85671",
      storageBucket: "kwitter-85671.appspot.com",
      messagingSenderId: "876695864217",
      appId: "1:876695864217:web:119d064c1cdf995ba64908",
      measurementId: "G-9KSJMRJ1Y3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
