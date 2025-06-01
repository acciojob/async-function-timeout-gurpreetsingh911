let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



submit.addEventListener('click', async function(event) {
  event.preventDefault();

	let textVal = text.value.trim();
	let delayVal = delay.value; 
	let realVal = delay.value *1000;  
	
  if (textVal.length === 0 || delayVal <= 0 || isNaN(delayVal)) {
    output.textContent = 'Please enter valid text and delay (>0).';
    return;
  }

  await wait(realVal);

  output.textContent = `${textVal} - ${delayVal}`;
});


/*


let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

// Helper delay function returning a Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

submit.addEventListener('click', async function(event) {
  event.preventDefault();

  let textVal = text.value.trim();
  let delayVal = Number(delay.value);
  let realVal = delayVal * 1000; // converting seconds to ms if needed

  output.textContent = ''; // Clear output before delay

  if (textVal.length === 0 || delayVal <= 0 || isNaN(delayVal)) {
    output.textContent = '';
    return;
  }

  await wait(realVal);

  output.textContent = `${textVal} - ${delayVal}`;
});

*/