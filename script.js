let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

submit.addEventListener('click', function(event) {
event.preventDefault();

	let textVal = text.value;
	let delayVal = delay.value; 
  let realVal = delay.value *1000; 
	
  
	let promise = new Promise((resolve, reject) =>{
		setTimeout(() => {
    resolve(output.innerHTML = (`${textVal} - ${delayVal}`));
					
	}, realVal); 
	
	
	
		// if(textVal.length == 0 || delayVal <= 0) {
		// 	output.innerHTML = `Hello`
		// 	 reject();
		// }
		
	});
	
	
});
