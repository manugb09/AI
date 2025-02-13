document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        appendMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        // Simulate GPT response (replace with actual API call)
        setTimeout(() => {
            appendMessage("GPT'nin cevabı burada olacak.", 'gpt');
        }, 1000);
    }
}

function appendMessage(message, sender) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'gpt-message');
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}
