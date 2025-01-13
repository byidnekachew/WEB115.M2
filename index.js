// Return things to console
console.log("Internal JS console message. Hello, class!")
console.log(document)
// console.dir(document)

// Alerts
alert('Hello world') // Text box pop up message

window.onload = function(){
    alert(`Hello, class`)
}

// Write toe lements by ID
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