const a1 = prompt('enter dot a1');
const a2 = prompt('enter dot a2');
const b1 = prompt('enter dot b1');
const b2 = prompt('enter dot b2');
const c1 = prompt('enter dot c1');
const c2 = prompt('enter dot c2');

const dividesByHalf = (a1, a2, b1, b2, c1, c2) => {
	let divideBy = 2;

	if ( (+a1 + +b1) / divideBy === +c1 && (+a2 + +b2) / divideBy === +c2) {
		return console.log(true);
	} else {
		return console.log(false);
	}
}

dividesByHalf(a1, a2, b1, b2, c1, c2);
