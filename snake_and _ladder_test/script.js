
// created heading for snake and ladder
let heading = document.createElement("h1");
heading.textContent="Snake and Ladder";
heading.id="heading";
heading.classList="div_container";
document.body.append(heading);


// created big_div for all cell

let div_container = document.createElement("div")
console.log("yes")
div_container.classList="container"
console.log("yes")
div_container.id="big_div";


// creating cells
for(let i=1; i>=100; i++){

    let div_cell = document.createElement("div")
    div_cell.body.append(div_container);
    div_cell.classList="cells";
    div_cell.id=`cell${i}`
    div_cell.textContent = i

}






















