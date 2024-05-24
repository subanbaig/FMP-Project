  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAADEZNOV1HQG065npiMfaflOm_ijrqYeg",
    authDomain: "threadzit-35cda.firebaseapp.com",
    databaseURL: "https://threadzit-35cda-default-rtdb.firebaseio.com",
    projectId: "threadzit-35cda",
    storageBucket: "threadzit-35cda.appspot.com",
    messagingSenderId: "212944182937",
    appId: "1:212944182937:web:ef9e971c090bbbfdd12208"
  };

  // Initialize Firebase
  
  const app = firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

//   console.log(db)

  function submit(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');
    var id = Date.now().toString(25);

    var obj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
        id,
    }
    // console.log(obj)

    
    firebase.database().ref("/Info" + id).set(obj);
}