$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
        	var numberChecked = $('.number').val();
        	var checkNumberInt = parseInt(numberChecked);
        	checkNumber(checkNumberInt);
            resetForm();
        }
});
//function to clear input after typing number
function resetForm() {
	$('.number').val('');
}
//function to check for valid number
function checkNumber(x) {
	if (typeof x !== 'number') {
		alert('Please type a valid integer.');
	}
	else {
		fizzBuzz(x);
	}	
}
//function to run FizzBuzz
function fizzBuzz(x) {		
	var counter = 1;
	var results = "";
	while (counter <= x) {		
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