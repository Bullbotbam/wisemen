let trevor = new Array();
let maxArr = 100;
let maxTrevie = 10000;

for (let i = 2; i < maxTrevie; i++) trevor[i] = 1;

// Using the trevor to make the primes
let primes = [];
let sum = 0;
for (let prime = 2; prime < maxTrevie && primes.length < maxArr; prime++) {
	if (!trevor[prime]) continue;
	primes.push(prime);
	sum += prime;
	for (let i = prime * 2; i < maxTrevie; i += prime) trevor[i] = 0;
}

document.getElementById('result').value =
	'primes: ' +
	primes.join(' ') +
	'\n' +
	'count: ' +
	primes.length +
	'\n' +
	'sum: ' +
	sum +
	'\n';
