// your JavaScript file
const container = document.querySelector("#container1");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.createElement("p");
p.textContent = "Hey I am red!";
p.setAttribute("style", "color: red");

const h3 = document.createElement("h3");
h3.textContent = "I am blue h3!";
h3.setAttribute("style","color: blue");

const div = document.createElement("div");
div.setAttribute("style", "background: pink;border:  1mm solid black;");

const h1Div= document.createElement("h1Div");
h1Div.textContent ="I am in a div";
const pDiv = document.createElement("p");
pDiv.textContent = "ME TOO!";
div.appendChild(h1Div);
div.appendChild(pDiv);

// METHOD 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

//btn.addEventListener("click", alertFunction);
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

    
  
container.appendChild(p);
container.appendChild(h3); 
container.appendChild(div);
