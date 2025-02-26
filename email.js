// The Contact me session on submit with EmailJS service
function sendEmail() {
  let emailDetails = {
    name: document.getElementById("fname").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_3yvwauj", "template_0zgyr9o", emailDetails)
    .then(alert("Message sent Successfully"));
}
