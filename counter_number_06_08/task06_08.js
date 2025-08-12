function interment(){
    let current_value=document.getElementById("counter").textContent
    current_value=parseInt(current_value)
    document.getElementById("counter").style.color="blue"
    document.getElementById("counter").textContent =current_value+1
}

function decrement(){
    let current_value=document.getElementById("counter").textContent
    current_value=parseInt(current_value)
    document.getElementById("counter").style.color="red"
    document.getElementById("counter").textContent=current_value-1
}