// Create a div container on HTML document and create 100 numbers dynamically
// and append to the container div.
let newDiv = document.createElement("div");
newDiv.className = "number-wrapper";
document.body.appendChild(newDiv);

for (let i = 1; i <= 100; i++) {
  newNum = document.createElement("div");
  newNum.textContent = `${i}`;
  newNum.style.fontSize = "40px";
  newNum.className = "number";

  // Even numbers background is green
  if (i % 2 === 0) {
    newNum.style.backgroundColor = "green";
  }

  // Odd numbers background is yellow
  if (i % 2 !== 0) {
    newNum.style.backgroundColor = "yellow";
  }

  // Prime numbers background is red
  let flag = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // prime numbers
  if (i > 1 && flag == 0) {
    newNum.style.backgroundColor = "red";
  }

  newDiv.appendChild(newNum);
}




