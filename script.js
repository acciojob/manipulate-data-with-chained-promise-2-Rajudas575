//your JS code here. If required.
getArray()
	.then(numbers => filterEvenNumbers(numbers)) // Step 1: Filter even numbers
	.then(evenNumbers => {
		// Update the DOM after 1 second (filtering step)
		setTimeout(() => {
			document.getElementById("output").innerText = `Even numbers: ${evenNumbers.join(', ')}`;
		}, 1000);
		return evenNumbers; // pass the even numbers to the next promise
	})
	.then(evenNumbers => multiplyEvenNumbersByTwo(evenNumbers)) // Step 2: Multiply even numbers by 2
	.then(finalNumbers => {
		// Update the DOM after 2 more seconds (multiplying step)
		setTimeout(() => {
			document.getElementById("output").innerText = `Even numbers multiplied by 2: ${finalNumbers.join(', ')}`;
		}, 2000);
	});

function getNumbers() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 3000);
	});
}

function filterEvenNumbers(numbers) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const evenNumbers = numbers.filter(num => num % 2 === 0);
			document.getElementById('output').innerText = `Even numbers: ${evenNumbers.join(', ')}`;
			resolve(evenNumbers);
		}, 1000);
	});
}

function multiplyEvenNumbersByTwo(evenNumbers) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const multiplied = evenNumbers.map(num => num * 2);
			document.getElementById('output').innerText = `Multiplied even numbers: ${multiplied.join(', ')}`;
			resolve(multiplied);
		}, 2000);
	});
}

 getNumbers()
.then(filterEvenNumbers)
.then(multiplyEvenNumbersByTwo)
.catch(error => console.error("Error:", error));

