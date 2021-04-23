const wordList = ["hello", "world", "dictionary", "astonish", "fishing", "jazz", "fire", "doors", "sticky", "fingers",
  "platinum", "silver", "experience", "dagger", "shelf", "dinner", "revolution", "documentation", "junior", "empty",
  "dark", "bright", "thesaurus", "cuisine", "geography", "that", "bird", "cockatiel", "parrot", "bengal", "paralyzed",
  "ghoul", "scientist", "filial", "language", "comma", "river", "life", "enigma", "puzzle", "interference",
  "development", "perseverance", "ghastly", "difficulty", "flow", "ancient", "bizarre", "fencing", "olympics", "greece",
  "awareness", "professional", "amateur", "tree", "underground", "chess", "number", "fish", "yard", "meet", "sleep",
  "manual", "easy", "newt", "dance", "trance", "pool", "cool", "word"]

const easyWords = [];
const normalWords = [];

// fetches random word
const API_URL = "http://api.wordnik.com/v4/words.json/randomWord?api_key=9ng3mailtyfjrv7jz3x13l1z2bubppsaqqg05x253xp2pqztk";
fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data));

// add words to separate arrays
for (const word of wordList) {
  if (word.length <= 5) {
    easyWords.push(word);
  }
  if (word.length > 5) {
    normalWords.push(word);
  }
}

/*
* Render each letter A to Z
* */
const letterChoiceContainerEl = document.getElementById("letterChoiceContainer");
const letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
"U", "V", "W", "X", "Y", "Z"];

const clickedLetter = (letter) => {
  console.log(letter);
}

letterList.forEach((letter) => {
  letterChoiceContainerEl.innerHTML += "<div onclick='clickedLetter(" +  letter + ")'>" + letter + "</div>"
})


/*
* Render input boxes based on word
* * * * * * * * * * * */
const inputBoxContainerEl = document.getElementById("inputBoxContainer");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
const getRandomWord = () => {
  const randWordIndex = getRandomInt(0, wordList.length);
  return wordList[randWordIndex];
}
const renderInput = () => {
  const gameWord = getRandomWord();
  const gameWordArray = gameWord.split("");
  gameWordArray.forEach((char) => {
    inputBoxContainerEl.innerHTML += "<div class='inputBox'>" +  + "</div>"
  })
}
renderInput();
/* End
* * * * * * * * */

