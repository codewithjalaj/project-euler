function multiplesOf3and5(n) {
	let num = 0;
	for (let i = 1; i < n; i++) {
		i % 3 === 0 || i % 5 === 0 ? (num += i) : null;
	}
	return num;
}

multiplesOf3and5(1000);

// Test Cases

// multiplesOf3and5(49) should return 543.
// multiplesOf3and5(1000) should return 233168.
// multiplesOf3and5(8456) should return 16687353.
// multiplesOf3and5(19564) should return 89301183.
