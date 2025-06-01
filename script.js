let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

submit.addEventListener('click', function(event) {
  event.preventDefault();

 let textVal = text.value.trim();
	let delayVal = delay.value; 
  let realVal = delay.value *1000; 

  output.innerHTML = ""; // Clear any previous output

  new Promise((resolve, reject) => {
    if (textVal.length === 0 || delayVal <= 0) {
      reject("Invalid input");
    } else {
      setTimeout(() => {
        resolve(`${textVal} - ${delayVal}`)
      }, delayVal);
    }
  }).then(result => {
    output.innerHTML = result;
  }).catch(() => {
    output.innerHTML = "";
  });
});
