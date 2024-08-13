const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  console.log('Connected to the WebSocket server');
});

socket.addEventListener('message', (event) => {
  const chat = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.textContent = event.data;
  chat.appendChild(messageElement);
  
  if (event.data.startsWith('You:')) {
    messageElement.classList.add('my-message');
  } else if (event.data.startsWith('User:')) {
    messageElement.classList.add('user-message');
  }
});

document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('messageInput');
  const message = input.value;

  const chat = document.getElementById('chat');
  const sentMessageElement = document.createElement('div');
  sentMessageElement.textContent = `You: ${message}`;
  sentMessageElement.classList.add('my-message');

  chat.appendChild(sentMessageElement);

  socket.send(message);
  input.value = ''; 
  
});
