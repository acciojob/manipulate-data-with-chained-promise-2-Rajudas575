//your JS code here. If required.

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

