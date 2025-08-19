
let random_number = Math.random()*50   
random_number = Math.ceil(random_number)

function Guess_the_number(){
    let current_value = document.getElementById("user_input").value

    current_value=parseInt(current_value)
    if(current_value == random_number){
        document.getElementById("message").textContent="your guessing number is correct....!";
    }
    else if(current_value > random_number){
        document.getElementById("message").textContent="your guessing number is too high.....!";
    }
    else if (current_value < random_number){
        document.getElementById("message").textContent="your guessing number is too low try again....!";
    }
    else{
        document.getElementById("message").textContent="enter valid number....!";
    }
}
















