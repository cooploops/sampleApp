  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqeua3U0m4B5QtbGZod07AsNxK35zHQ0U",
    authDomain: "my-awesome-project-c1de8.firebaseapp.com",
    databaseURL: "https://my-awesome-project-c1de8.firebaseio.com",
    projectId: "my-awesome-project-c1de8",
    storageBucket: "my-awesome-project-c1de8.appspot.com",
    messagingSenderId: "968353723398"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.FacebookAuthProvider();

  // use default langauge settings of device being used
  firebase.auth().useDeviceLanguage();
  
  window.onload = function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}
