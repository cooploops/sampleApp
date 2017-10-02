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

  function toggleSignIn () {
    if(!firebase.auth().currentUser) {
        firebase.auth().useDeviceLanguage();
        // use default langauge settings of device being used
        var provider = new firebase.auth.FacebookAuthProvider();

        provider.addScope('public_profile, user_birthday, user_friends');
        
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
    } else {
      firebase.auth().signOut();
    }
    $("#loginButton").addClass('disabled')
  }

  function initApp () {
    firebase.auth().onAuthStateChanged(function(user){
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        $("#userAccountDetails").text(JSON.stringify(user,null, ' '));
      } else {
        $("#userAccountDetails").text("null");
      }
      $("#loginButton").removeClass('disabled');
    });
    $("#loginButton").on("click", toggleSignIn);
  }



  
  window.onload = function(){
    initApp();
}