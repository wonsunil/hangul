const choArray = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const jungArray = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const jongArray = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const jungJoinAbleWords = [
['ㅗ', 'ㅏ', 'ㅘ'],
['ㅗ', 'ㅐ', 'ㅙ'],
['ㅗ', 'ㅣ', 'ㅚ'],
['ㅜ', 'ㅓ', 'ㅝ'],
['ㅜ', 'ㅔ', 'ㅞ'],
['ㅜ', 'ㅣ', 'ㅟ'],
['ㅡ', 'ㅣ', 'ㅢ']
];

let data = "";

const isCho = char => {
	switch (char) {
		case "ㄱ": return 0;
		case "ㄲ": return 1;
		case "ㄴ": return 2;
		case "ㄷ": return 3;
		case "ㄸ": return 4;
		case "ㄹ": return 5;
		case "ㅁ": return 6;
		case "ㅂ": return 7;
		case "ㅃ": return 8;
		case "ㅅ": return 9;
		case "ㅆ": return 10;
		case "ㅇ": return 11;
		case "ㅈ": return 12;
		case "ㅉ": return 13;
		case "ㅊ": return 14;
		case "ㅋ": return 15;
		case "ㅌ": return 16;
		case "ㅍ": return 17;
		case "ㅎ": return 18;
	};
};
const isJung = char => {
	switch (char) {
		case "ㅏ": return 0;
		case "ㅐ": return 1;
		case "ㅑ": return 2;
		case "ㅒ": return 3;
		case "ㅓ": return 4;
		case "ㅔ": return 5;
		case "ㅕ": return 6;
		case "ㅖ": return 7;
		case "ㅗ": return 8;
		case "ㅘ": return 9;
		case "ㅙ": return 10;
		case "ㅚ": return 11;
		case "ㅛ": return 12;
		case "ㅜ": return 13;
		case "ㅝ": return 14;
		case "ㅞ": return 15;
		case "ㅟ": return 16;
		case "ㅠ": return 17;
		case "ㅡ": return 18;
		case "ㅢ": return 19;
		case "ㅣ": return 20;
	};
};
const isJong = char => {
	switch (char) {
		case "": return 0;
		case "ㄱ": return 1;
		case "ㄲ": return 2;
		case "ㄳ": return 3;
		case "ㄴ": return 4;
		case "ㄵ": return 5;
		case "ㄶ": return 6;
		case "ㄷ": return 7;
		case "ㄹ": return 8;
		case "ㄺ": return 9;
		case "ㄻ": return 10;
		case "ㄼ": return 11;
		case "ㄽ": return 12;
		case "ㄾ": return 13;
		case "ㄿ": return 14;
		case "ㅀ": return 15;
		case "ㅁ": return 16;
		case "ㅂ": return 17;
		case "ㅄ": return 18;
		case "ㅅ": return 19;
		case "ㅆ": return 20;
		case "ㅇ": return 21;
		case "ㅈ": return 22;
		case "ㅊ": return 23;
		case "ㅋ": return 24;
		case "ㅌ": return 24;
		case "ㅍ": return 24;
		case "ㅎ": return 24;
	};
};


const hangulAssemble = (cho, jung, jong) => {
	return String.fromCharCode(
		44032 +
		(isCho(cho) * 588) +
		(isJung(jung) * 28) +
		isJong(jong)
		);
};

const choJungJoinAble = (cho, jung) => {
	if (hangulAssemble(cho, jung, "") === "") return false;

	return true;
};

const choJungJongJoinAble = (cho, jung, jong) => {
	if (hangulAssemble(cho, jung, jong) === "") return false;

	return true;
};

const jungJoinAble = (jung, jung2) => {
	if (jung === "ㅗ" && jung2 === "ㅏ") return "ㅘ";
	if (jung === "ㄹ" && jung2 === "ㅂ") return "ㄼ";
	if (jung === "ㅜ" && jung2 === "ㅓ") return "ㅝ";

	return false;
};

const isJoinedJung = jung => {
	const disassembledJung = [];

	for(let i = 0; i < jungJoinAbleWords.length; i++) {
		if(jungJoinAbleWords[i][2] === jung) {
			disassembledJung.push(jungJoinAbleWords[i][0]);
			disassembledJung.push(jungJoinAbleWords[i][1]);

			break;
		};
	}

	if(disassembledJung.length === 0) return [jung];

	return disassembledJung;
};

const assemble = words => {
	const combinableText = [];

	let currentWordIndex = 0;
	let currentIndex = 0;

	words.forEach(word => {
		for (let i = 0; i < word.length; i++) {
			if (isCho(word[i]) !== undefined && currentIndex === 0) {
				combinableText.push([word[i]]);

				currentIndex++;
			}else if (currentIndex === 1) {
				if (isJung(word[i]) !== undefined) {
					if (jungJoinAble(word[i], word[i + 1])) {
						combinableText[currentWordIndex].push(jungJoinAble(word[i], word[i + 1]));
					}else combinableText[currentWordIndex].push(word[i]);
				};

				currentIndex++;
			} else if (currentIndex === 2) {
				if (isJong(word[i]) !== undefined) {
					if (choJungJongJoinAble(combinableText[currentWordIndex][0],
						combinableText[currentWordIndex][1],
						word[i])) {

						combinableText[currentWordIndex].push(word[i]);
					};
				};

				currentWordIndex++;
				currentIndex = 0;
			};
		};
	});

	let answer = "";

	combinableText.forEach(words => {
		const cho = words[0];
		const jung = words[1];
		const jong = words[2] ?? "";

		answer += String.fromCharCode(
			44032 +
			(isCho(cho) * 588) +
			(isJung(jung) * 28) +
			isJong(jong));
	});

	return answer;
};
const disassemble = words => {
	const limit = words.length;
	const disassembledWord = [];

	for(let i = 0; i < limit; i++) {
		const strCode = words[i].charCodeAt(0);
		const offset = 44032;
		const cho = parseInt((strCode - offset) / 588);
		const jung = parseInt((strCode - offset - (cho * 588)) / 28);
		const jong = parseInt((strCode - offset) % 28);

		disassembledWord.push([
			choArray[cho],
			...isJoinedJung(jungArray[jung]),
			jongArray[jong]
			]);
	}

	return disassembledWord;
};

const $input = document.querySelector("input");
$input.addEventListener("keyup", ({ target, key }) => {
	if(key !== "Enter") return false;

	data = target.value;
	console.log(disassemble(target.value));
	console.log(assemble(disassemble(target.value)));
});