
function checkEligibility() {
      let age = document.getElementById("ageInput").value;
      age = parseInt(age);

      if (!age && age !== 0) {
        document.getElementById("message").textContent = "⚠️ Please enter your age.";
        document.getElementById("message").style.color = "orange";
        return;
      }

      if (age >= 18) {
        document.getElementById("message").textContent = "✅ You are eligible to vote!";
        document.getElementById("message").style.color = "lightgreen";
      } else {
        document.getElementById("message").textContent = "❌ You are not eligible to vote.";
        document.getElementById("message").style.color = "red";
      }
    }