function digital_root(n) {
	if (n < 1) {
		console.log("O valor nao pode ser negativo!");
		return 0;
	};
	const strNumber = n.toString();

	if (strNumber.length === 1) {
		return parseInt(strNumber, 10);
	}

	const sum = strNumber.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
	return digital_root(sum);
}

// Para alterar os calculos, basta alterar a consta `number`.
//  ↧ ↧ ↧ ↧ ↧
// const number = 16;

// const finalResult = digital_root(number);
// console.log("---------------------");
// console.log(` digital_root(${number}) `);
// console.log(`         ${finalResult} `);
// console.log("---------------------");

module.exports = digital_root;