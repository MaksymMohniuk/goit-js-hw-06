const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', resultSubmit);
function resultSubmit(event) {
event.preventDefault();
const {
    elements: {email, password}
} = event.currentTarget;

if (email.value === "" || password.value === "") {
   alert("Please fill in all the fields!")
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }
}