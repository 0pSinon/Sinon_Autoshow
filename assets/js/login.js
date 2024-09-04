const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});





document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var signUpForm = document.querySelector('.sign-up-form');

    // Add a submit event listener to the form
    signUpForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the values of the form fields (if needed)
      var username = document.querySelector('input[type="text"]').value;
      var email = document.querySelector('input[type="email"]').value;
      var password = document.querySelector('input[type="password"]').value;

      // You can perform additional validation or processing here if needed

      // Redirect to thankyou-signup.html
      window.location.href = 'thankyou-signup.html';
    });
  });