//1-Select the section with an id of container without using querySelector.
console.log(document.getElementById('container')) 
//2- Select the section with an id of container using querySelector.
console.log(document.querySelector('#container'))
//3 - Select all of the list items with a class of "second".
console.log(document.getElementsByClassName('second'))
//4 -Select a list item with a class of third, but only the list item inside of the ol tag.
const a= (document.querySelector('ol .third'))
console.log(a)
//5 Give the section with an id of container the text "Hello!".

// const p = document.getElementById('container')
// p.innerText = "Hello!"  

//6 Add the class main to the div with a class of footer.

 document.querySelector(".footer").className += " main"
// let footer = document.getElementsByClassName("footer")[0];
// footer.classList.add("main");

//7 7) Remove the class main on the div with a class of footer.
let ab = document.querySelector(".footer")
ab.classList.remove('main')
console.log(ab)

//8) Create a new li element

const newel = document.createElement('li')

//9)  Give the li the text "four".

newel.innerText = "four"

console.log(newel)
//10)  Append the li to the ul element.
const ulel = document.querySelector('ul')
ulel.append(newel)
console.log(ulel)


//12)Loop over all of the lis inside the ol tag and give them a background color of "green".

const ollis = document.querySelectorAll('ol li') 
console.log(ollis)
const convertollis = Array.from(ollis)
console.log(convertollis)
convertollis.forEach(x => x.style.backgroundColor = "green" )

//13)Remove the div with a class of footer.

const foot = document.getElementsByClassName('footer')
foot.classList.remove('footer')