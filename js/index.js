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

	console.log(disassemble(target.value));
});