// Малюємо котиків
const drawCats = function (howManyTimes) {
	for (let i = 0; i < howManyTimes; i += 1) {
		console.log(i + "  =^.^=");
	}
};

// drawCats(5);

let age = 12;
let olderThanAge = 13;
const accomponied = true;

const passageAllows = age >= olderThanAge || accomponied;
if (passageAllows) {
	false;
}
console.log(passageAllows);