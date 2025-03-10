// The Contact me session on submit with EmailJS service
// function sendEmail() {
//   let emailDetails = {
//     name: document.getElementById("fname").value,
//     email: document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs
//     .send("service_3yvwauj", "template_0zgyr9o", emailDetails)
//     .then(alert("Message sent Successfully"));
// }


// Get all needed elements from the DOM
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn')
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Get needed data from EmailJS
const publicKey = "zQ8Ivg2boi-EQjem-";
const serviceID = "service_3yvwauj";
const templateID = "template_0zgyr9o";

// Initialize EmailJS with Public Key
emailjs.init(publicKey);

// Addsubmit event to the form
contactForm.addEventListener('submit', e =>{
  // prevent form default behaviour
  e.preventDefault();
  // Changebutton text
  submitBtn.innerText  = "Just A Moment...";
  // Get all input value fields
  const inputFields = {
    name: `${fnameInput.value} ${lnameInput.value}`,
    email: emailInput.value,
    message: messageInput.value
  }
  // Send the email
  emailjs.send(serviceID, templateID, inputFields)
  .then(() => {
    // Change button Text
    submitBtn.innerText = "Message sent Successfully";
    // Clear out all input fields
    fnameInput.value = "";
    lnameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }, (error) =>{
    // console.log error
    console.log(error);
    // Change button Text
    submitBtn.innerHTML = "Something went wrong";
  });
});