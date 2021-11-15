
const ALPHABET = 26;
const ASCII_SMALL_CASE_A = 97;

/***
 * @param {string} stringToCheck
 * @param {string} anagram
 * @return {number[]}
 */
var findAnagrams = function (stringToCheck, anagram) {

    let sizeAnagram = anagram.length;
    let sizeStringToCheck = stringToCheck.length;

    const frequencyAnagram = new Array(ALPHABET);
    fillFrequencyAnagram(frequencyAnagram, anagram, sizeAnagram);

    const frequencyStringToCheck = new Array(ALPHABET);
    frequencyStringToCheck.fill(0);

    const allAnagrams = [];
    let startPointer = 0;

    for (let endPointer = 0; endPointer < sizeStringToCheck; endPointer++) {

        let ch = stringToCheck.codePointAt(endPointer);

        if (frequencyAnagram[ch - ASCII_SMALL_CASE_A] === 0) {
            startPointer = endPointer + 1;
            frequencyStringToCheck.fill(0);
        } else {
            frequencyStringToCheck[ch - ASCII_SMALL_CASE_A]++;
            if (endPointer - startPointer + 1 === sizeAnagram) {
                if (equalFrequency(frequencyStringToCheck, frequencyAnagram, ALPHABET)) {
                    allAnagrams.push(startPointer);
                }

                frequencyStringToCheck[stringToCheck.codePointAt(startPointer) - ASCII_SMALL_CASE_A]--;
                startPointer++;
            }
        }
    }
    return allAnagrams;
};


/***
 * @param {number[]} frequencyStringToCheck
 * @param {number[]} frequencyAnagram
 * @return {boolean}
 */
function equalFrequency(frequencyStringToCheck, frequencyAnagram) {
    for (let i = 0; i < ALPHABET; i++) {
        if (frequencyStringToCheck[i] !== frequencyAnagram[i]) {
            return false;
        }
    }
    return true;
}

/***
 * @param {number[]} frequencyAnagram
 * @param {string} anagram
 * @param {number} sizeAnagram 
 */
function fillFrequencyAnagram(frequencyAnagram, anagram, sizeAnagram) {
    frequencyAnagram.fill(0);
    for (let i = 0; i < sizeAnagram; i++) {
        frequencyAnagram[anagram.codePointAt(i) - ASCII_SMALL_CASE_A]++;
    }
}
