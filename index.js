// Return things to console
console.log("Internal JS console message. Hello, class!")
console.log(document)
// console.dir(document)

// Alerts
alert('Hello world') // Text box pop up message

window.onload = function(){
    alert(`Hello, class`)
}

// Write to elements by ID
document.getElementById("myH1").innerHTML = "I love JavaScript";
document.getElementById("myParagraph").textContent = "Hi guys"

// Prompts
const student = prompt("What is your name? ");
console.log(student)
document.write(`<p>Hello, ${student}!`)
const messageElement = document.createElement("p"); //creates new paragraph
messageElement.textContent = `Hello, ${student}`;
document.body.appendChild(messageElement);

// Styling page elements
document.body.style.color = "green"
document.body.style.backgroundColor = "black"
document.body.style.fontSize = "2em"

// Event listeners
document.getElementById("myH1").addEventListener("dblclick", function(){
    // What happens when double click goes here
    alert(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`)
    document.getElementById("myH1").style.color = "red"
})
document.getElementById('myButton').addEventListener("click",function(){
    document.body.style.backgroundColor = "white"
    alert(`HAHAHAAHAHAHAHA ${student} you got tricked!`)
})

// Difference between .innerHTML and .textContent
console.log(document.getElementById("myParagraph").innerHTML)
console.log(document.getElementById("myParagraph").textContent)