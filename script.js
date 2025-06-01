let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

submit.addEventListener('click', function(event) {
event.preventDefault();

	let textVal = text.value.trim();
	let delayVal = delay.value; 
	let realVal = delay.value *1000;  
	
  
	let promise = new Promise((resolve, reject) =>{
  if(textVal.length == 0 || delayVal <= 0) {
  	setTimeout(() => {
	   	output.innerHTML = ``
      reject();
      },0);
      }
      else{
		setTimeout(() => {
    let pass = (`${textVal} - ${delayVal}`);
    resolve(output.textContent  = (pass));
				
	}, realVal); 
	
	}
  
	});
	
	
});
