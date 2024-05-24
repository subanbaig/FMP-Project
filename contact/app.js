  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDl9_DG07REV3nKCKNxmo4iSJcclV8YQFI",
    authDomain: "thread-zit.firebaseapp.com",
    projectId: "thread-zit",
    databaseURL: "https://thread-zit-default-rtdb.firebaseio.com",
    storageBucket: "thread-zit.appspot.com",
    messagingSenderId: "313849781991",
    appId: "1:313849781991:web:e8bde3e914e26ed93dcc42"
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