// step 1: receiving and responding to the user's string
function getValues() {
	let userInput = document.getElementById('message').value.trim().split(' ').join('');

	// Swal.fire({
	// 	backdrop: false,
	// 	title: 'StepOnNoPets',
	// 	text: message,
	// })

	let palindrome = checkForPalindrome(userInput);
	displayResults(palindrome);
}

// determining whether a string is a palindrome
function checkForPalindrome(userInput) {
	let stringResult = ''
	// using a decrementing for loop
	for (let index = userInput.length - 1; index >= 0; index--) {
		stringResult += userInput[index]
	}

	if (userInput.toLowerCase() == stringResult.toLowerCase()) {
		return stringResult.toLocaleLowerCase()
	}
	return false
}

// displaying a message to the user to show whether their string is a palindrome or not
function displayResults(palindrome) {	
	// put the HTML into the page
	if (palindrome) {
		document.getElementById(
			'result'
		).innerHTML = `Your phrase reversed message is: ${palindrome}`;		
	} else {
		document.getElementById('result').innerHTML = 'Your phrase reversed message is not a palindrome';
	}

	let alert = document.getElementById('alert');
	alert.classList.remove('invisible');
}


// determining whether a string is a palindrome using array notation
function checkForPalindromeB(userInput) {
	// turn the string into an array
	// split a string into multiple sub-strings and return them in the form of an array
	let characters = userInput.split('')
	let arrayRuselt = []

	// using a decrementing for loop
	for (let index = userInput.length - 1; index >= 0; index--) {
		let letter = characters[index]
		arrayRuselt.push(letter)
	}

	// turn the new array back into a string
	let newArray = arrayRuselt.join('')

	// palindrome or not
	if (newArray.toLowerCase() == userInput.toLowerCase()) {
		return newArray.toLowerCase()
	} else {
		return false
	}
}