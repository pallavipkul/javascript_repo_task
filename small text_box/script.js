 function sendMessage() {
      const input = document.getElementById("messageInput");
      const messageText = input.value.trim();

      if (messageText !== "") {
        const messageContainer = document.getElementById("messages");
        const message = document.createElement("div");
        message.classList.add("message", "sent");
        message.textContent = messageText;
        messageContainer.appendChild(message);
        
        input.value = "";
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    }

    // Send message when pressing Enter
    document.getElementById("messageInput").addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });