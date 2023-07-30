// index.js
const firebaseConfig = {
    apiKey: "AIzaSyD_kYzqYZVbzH8_IJbuQHHhWOlaJWV57gg",
    authDomain: "electricmanager.firebaseapp.com",
    databaseURL: "https://electricmanager-default-rtdb.firebaseio.com",
    projectId: "electricmanager",
    storageBucket: "electricmanager.appspot.com",
    messagingSenderId: "621478461993",
    appId: "1:621478461993:web:7eeab3e59a9884a81c9238",
    measurementId: "G-RZ3623GB0D"  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get references to the form and input fields
  const registrationForm = document.getElementById('registration-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  // Registration function
  function registerUser(event) {
    event.preventDefault(); // Prevent form submission
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User registration successful
        const user = userCredential.user;
        console.log('User registered:', user);
        alert('Registration successful!');
  
        // Clear the form inputs
        emailInput.value = '';
        passwordInput.value = '';
        //<meta http-equiv="refresh" content="delay_time; URL=http://127.0.0.1:5500/testF/electric.html" />
      })
      .catch((error) => {
        // Handle registration errors
        const errorMessage = error.message;
        console.error('Error during registration:', errorMessage);
        alert(errorMessage);
      });
  }
  
  // Add a submit event listener to the form
  registrationForm.addEventListener('submit', registerUser);

  