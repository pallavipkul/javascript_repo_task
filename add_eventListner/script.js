 let user_input = document.getElementById("user_input");
    let text = document.getElementById("text_area");
    let btn = document.getElementById("btn");

    // Function to add text
    function addToTextArea() {
      let value = user_input.value;
      if (value !=="") {
        text.value += (text.value ? "\n" : "") + value;  // add to textarea with newline
        user_input.value = ""; // clear input after adding
      }
    }

    // Add on button click
    // btn.addEventListener("click", addToTextArea);

    // Add on Enter key press
    user_input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // prevent form submit
        addToTextArea();
      }
    });