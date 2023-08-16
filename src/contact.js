const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const contactData = {
    name: name,
    email: email,
    message: message
  };

  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(contactData);
  localStorage.setItem('messages', JSON.stringify(messages));

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  alert('Message submitted successfully.');
});
