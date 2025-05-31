let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");

submit.addEventListener('click', function(event) {
event.preventDefault();

	let textVal = text.value;
	let delayVal = delay.value; 
	
	let promise = new Promise((resolve, reject) =>{
		setTimeout(() => {
			output.innerHTML = (`${textVal} - ${delayVal}`);
			resolve();			
		} delayVal); 
	
	}

							  
		// if(textVal.length == 0 || delayVal <= 0) {
		// 	output.innerHTML = `Hello`
		// 	 reject();
		// }
		
	});
	
	
});
