// step 1: receiving and responding to the user's string
function getValues() {
	let userInput = document.getElementById('message').value.trim().split(' ').join('');
	// replaces all special characters with '' (empty string) using the replace() method
	userInput = userInput.replace(/[^a-zA-Z0-9 ]/g, '');

	if (userInput) {
		let palindrome = checkForPalindromeC(userInput);
		displayResults(palindrome);
	} else if (userInput.length < 2) {
		let alert = document.getElementById('alert')
		alert.classList.add('invisible');

		Swal.fire({
			icon: 'error',
			backdrop: false,
			title: 'Step-On-No-Pets',
			text: 'Please, enter at least 2 characters',
		})
	}
}

// step 2: determining whether a string is a palindrome
function checkForPalindrome(userInput) {
	let stringResult = ''
	// using a decrementing for loop
	for (let index = userInput.length - 1; index >= 0; index--) {
		stringResult += userInput[index]
	}

	if (userInput.toLowerCase() == stringResult.toLowerCase()) {
		return stringResult.toLocaleLowerCase()
	}
}

// step 3: displaying a message to the user to show 
// whether their string is a palindrome or not
function displayResults(palindrome) {
	let alert = document.getElementById('alert');
	
	// put the HTML into the page
	if (palindrome) {
		document.getElementById('heading').innerHTML =
		'Well done! You entered a Palindrome!';
		
		document.getElementById(
			'result'
			).innerHTML = `Your phrase reversed message is: ${palindrome}`;
			
			alert.classList.replace('alert-danger', 'alert-success');
		} else {
			document.getElementById('heading').innerHTML =
				'Sorry My Friend!'
			document.getElementById('result').innerHTML = 'Your phrase reversed message is not a palindrome';
			alert.classList.replace('alert-success', 'alert-danger');
		}
		
	alert.classList.remove('invisible');
}



// BONUS
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

// check if the words can be compared to itself
function checkForPalindromeC(userInput) {
	let resultStr = Array.from(userInput.toLowerCase())
	resultStr = resultStr.reverse().join('')
	console.log(resultStr)

	if (resultStr == userInput.toLowerCase()) {
		return resultStr.toLocaleLowerCase()
	}
}

// checkForPalindromeC('password')
// checkForPalindromeC('tacocat')
