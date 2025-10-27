const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');


greetBtn.addEventListener('click', () => {
const now = new Date();
message.textContent = `Hello! The time is ${now.toLocaleTimeString()}.`;
});


// Simple contact form handling (no server — demo only)
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');


contactForm.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
if(!name || !email){
formResponse.textContent = 'Please fill in both fields.';
return;
}
// mimic sending
formResponse.textContent = `Thanks, ${name}! We received your message (email: ${email}).`;
contactForm.reset();
});