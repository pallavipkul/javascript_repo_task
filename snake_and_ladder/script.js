let players=[ {name:'mani',color:"blue",score:0},
              {name: 'pallavi',color:"red",score:0}, 
              {name:'priya',color:"yellow",score:0}, 
              {name:'minakshi',color:"green",score:0} ]

 // tag creation
let element=document.createElement("h1")
element.textContent="Snake And Ladder"
element.classList="heading"
document.body.appendChild(element)

//big container  
let container = document.createElement("div")
container.classList="container"
document.body.appendChild(container);

for(let i=100 ; i>=1 ; i--)
{
// container for each number
let div_container = document.createElement("div")
div_container.classList="cells"
div_container.id=`cell${i}`   
div_container.textContent=i
container.appendChild(div_container)
}

count=0
for(let i=0 ; i<=3 ; i++){
//button creation
let btn = document.createElement("button")
btn.textContent = players[i].name +" "+players[i].score
btn.style.backgroundColor = players[i].color
btn.classList = "btn"
// -----------------------------------------------------------------
    btn.id=`btn${i}`
    if(count!==i){
        btn.disabled=true
    }
    btn.onclick=function(){
        btn.disabled=true
        count+=1
        if(count==4){
            count=0
        }
        let current_btn=document.getElementById(`btn${count}`)
        current_btn.disabled=false
// -----------------------------------------------------------------
// to genrate the random numbers

        let randomNumber=Math.random()*6
        randomNumber=Math.ceil(randomNumber)

        let current_person =document.getElementById(`person${players[i].score}`) 
        if(current_person){
            current_person.parentNode.removeChild(current_person)
       }

        players[i].score=players[i].score + randomNumber
        btn.textContent=players[i].name +" "+ players[i].score

        let person=document.createElement("div")
        person.classList="person"

        person.id=`person${players[i].score}`
        person.style.backgroundColor=players[i].color

        let parentEle=document.getElementById(`cell${players[i].score}`)
        parentEle.appendChild(person)
    }
    document.body.appendChild(btn)
}


