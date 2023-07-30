const firebaseConfig = {
    apiKey: "AIzaSyD_kYzqYZVbzH8_IJbuQHHhWOlaJWV57gg",
    authDomain: "electricmanager.firebaseapp.com",
    databaseURL: "https://electricmanager-default-rtdb.firebaseio.com",
    projectId: "electricmanager",
    storageBucket: "electricmanager.appspot.com",
    messagingSenderId: "621478461993",
    appId: "1:621478461993:web:7eeab3e59a9884a81c9238",
    measurementId: "G-RZ3623GB0D"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()


function register(){
    full_name = document.getElementById('full_name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value


    if(email_validator == false || password_validator == false){
        alert("Email or Password is not in the correct format")
        return
    }
    if(email_validator == false || password_validator == false || field_validator == false){
        alert("A field is not filled in")
        return
    }
    //Authorisation given to continue
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        alert("User FOund!")
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            email : email,
            full_name : full_name
            //last_login : Date.now()

        }

        database_ref.child('users/' + user.uid).set(user_data)
        alert("User created!")
    })
    .catch(function(error){
        var error_code = error.code
        var error_msg = error.message
        alert(error_msg)
    })
}

function email_validator(email){
    valid = /^[^@] +@\w+(\.\w+)+\w$/
    if(valid.test(email)==true){
       return true
    }
    else{
        return false
    }
}

function password_validator(password){
    if(password < 6)
        return false
    else 
        return true
}

function field_validator(field){
    if(field == null)
        return false
    if(field.length <= 0)
        return false
    else
        return true
}
