const messagesList = document.getElementById('messages-list');

const messages = JSON.parse(localStorage.getItem('messages')) || [];
messages.forEach(message => {
  const messageItem = document.createElement('div');
  messageItem.classList.add('border', 'p-4', 'mb-4');
  messageItem.innerHTML = `
    <h3 class="font-semibold">${message.name}</h3>
    <p>${message.message}</p>
    <p class="text-gray-500">${message.email}</p>
  `;
  messagesList.appendChild(messageItem);
});
