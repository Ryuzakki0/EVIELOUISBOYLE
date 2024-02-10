function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message !== '') {
        appendMessage(message, 'Daddy'); // Sending message from "Daddy"
        messageInput.value = '';
        saveMessage(message, 'Daddy'); // Save the message with sender as "Daddy"
    }
}

function appendMessage(message, sender) {
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    const senderElement = document.createElement('span');
    senderElement.classList.add('sender');
    senderElement.textContent = capitalizeFirstLetter(sender) + '😍: '; // Add 😍 emoji
    
    messageElement.appendChild(senderElement);
    
    const messageTextElement = document.createElement('span');
    messageTextElement.textContent = message;
    
    messageElement.appendChild(messageTextElement);
    
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight; // Scroll to the bottom of the chat
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function saveMessage(message, sender) {
    // Send the message and sender to the PHP script for saving
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_message.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('message=' + encodeURIComponent(message) + '&sender=' + encodeURIComponent(sender));
}
