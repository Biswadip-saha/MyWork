const anagram = (str, anaStr) => {
	const aCharMap = buildCharMap(str);
	const anaCharMap = buildCharMap(anaStr);

	if (Object.keys(aCharMap).length != Object.keys(anaCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] != anaCharMap[char]) {
			return false;
		}
	}

	return true;
};

const buildCharMap = (str) => {
	const charMap = {};
	for (let char of str.toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
};

module.exports = anagram;
