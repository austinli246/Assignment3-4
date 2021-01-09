const a = document.getElementById('button1')
const b = document.getElementById('button2')
// a.onclick = create()
a.addEventListener("click", createb1)
b.addEventListener("click", createb2)
function createb1(){
    const newel = document.createElement('a')
    newel.innerText= "I'm right"
    const textinside = document.getElementById('container')
    textinside.append(newel)
}

function createb2(){
    const newel = document.createElement('b')
    newel.innerText= "No, I'm right!"
    const textinside = document.getElementById('container')
    textinside.append(newel)
}
const hover = document.getElementById('Q2')

hover.addEventListener("mouseover" , function(){alert('Hey, I told you not to hover over me!')})


function submitButton(event) {
    event.preventDefault();
var password = document.getElementById("Password").value

const newtxt = document.createElement('h1')
const inside = document.getElementById('container2')



 if (password==12345678){
     newtxt.innerHTML = "CORRECT!"
     inside.append(newtxt)
}
else {
    newtxt.innerHTML = "WRONG PASSWORD"
    inside.append(newtxt)
}
}