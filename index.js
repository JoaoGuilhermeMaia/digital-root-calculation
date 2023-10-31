function digital_root(n) {
	const strNumber = n.toString();

	if (strNumber.length === 1) {
		return parseInt(strNumber, 10);
	}

	const sum = strNumber.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
	return digital_root(sum);
}

// Para alterar os calculos, basta alterar a consta `number`.
//  ↧ ↧ ↧ ↧ ↧
const number = 16;

const finalResult = digital_root(number);
console.log("---------------------");
console.log(` digital_root(${number}) `);
console.log(`         ${finalResult} `);
console.log("---------------------");