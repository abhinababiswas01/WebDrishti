const userInput = document.getElementById('user-message');
const sendMessageBtn = document.getElementById('send-message');
const chatHistory = document.querySelector('.chat-history');

sendMessageBtn.addEventListener('click', async () => {
  displayMessage("Analyzing...", 'ai-message')
  const message = userInput.value; // Make the search case-insensitive
  if (message) {
    const response = await fetch('http://127.0.0.1:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: message })
    });
    const data = await response.json();
    console.log(data);
    if (response) {
      displayMessage(data.message, 'ai-message');
    } else {
      displayMessage('Sorry, I can\'t answer that yet. Ask me something else!', 'ai-message');
    }
    userInput.value = ''; // Clear input field
  }
});

function displayMessage(message, messageClass) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.innerHTML = `<p class="${messageClass}">${message}</p>`;
  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Auto scroll to the latest message
}
