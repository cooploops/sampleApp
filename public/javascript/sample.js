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

function facebookSignin() {
   firebase.auth().signInWithPopup(provider)

   provider.addScope('user_friends');
   provider.addScope('user_location');
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
}

function facebookSignout() {
   firebase.auth().signOut()
   
   .then(function() {
      console.log('Signout successful!')
   }, function(error) {
      console.log('Signout failed')
   });
}