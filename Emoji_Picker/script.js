 // Get emojiBox and emoji list
    const emojiBox = document.getElementById("emojiBox");
    const emojis = document.querySelectorAll(".emoji");

    // When user clicks on emoji → add it to box
    emojis.forEach(emoji => {
      emoji.addEventListener("click", () => {
        emojiBox.innerHTML += emoji.textContent;
      });
    });