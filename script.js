document.getElementById("send-button").addEventListener("click", function() {
    var input = document.getElementById("message-input");
    var messageText = input.value.trim();

    if (messageText !== "") {
        var chatMessages = document.querySelector(".chat-messages");
        var newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerText = messageText;
        chatMessages.appendChild(newMessage);
        
        input.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
