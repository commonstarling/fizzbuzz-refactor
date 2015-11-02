//function to submit number from form
$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            checkNumber();
            resetForm();
        }
});
//function to clear input after typing number
function resetForm() {
	$('.number').val('');
}
//function to check for valid number
function checkNumber() {
	if (+".number" === NaN) {
		alert('Please type a valid integer.');
	}
	else {
		fizzBuzz(+'.number');
	}	
}
//function to run FizzBuzz
function fizzBuzz() {		
	var counter = 1;
	var results = "";
	while (counter <= +'.number') {		
		if (counter % 3 === 0 && counter % 5 === 0) {
			results = "FizzBuzz<br>";
		}
		else if (counter % 3 === 0 && counter % 5 !== 0) {
			results = "Fizz<br>";
		}
		else if (counter % 5 === 0 && counter % 3 !== 0) {
			results = "Buzz<br>";
		}
		else {
			results = counter + "<br>";
		}
		document.write(results);
		counter = counter + 1;
	}
}