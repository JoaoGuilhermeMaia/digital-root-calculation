const digital_root = require('./index.js');

test('digital_root(16) deve retornar 7', () => {
	expect(digital_root(16)).toBe(7);
});

test('digital_root(942) deve retornar 6', () => {
	expect(digital_root(942)).toBe(6);
});

test('digital_root(132189) deve retornar 6', () => {
	expect(digital_root(132189)).toBe(6);
});

test('digital_root(493193) deve retornar 2', () => {
	expect(digital_root(493193)).toBe(2);
});