/*
* Render each letter A to Z
* */
const letterChoiceContainerEl = document.getElementById("letterChoiceContainer");
const letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"];

letterList.forEach((letter) => {
  letterChoiceContainerEl.innerHTML += "<div onclick=clickedLetter('"+letter+"')>" + letter + "</div>"
})

/*
* Get random word from API and render to screen
* */
const gameWordContainerEl = document.getElementById("gameWordContainer");
const fetchWordAndRender = async () => {
  // fetches random word
  const API_URL = "http://api.wordnik.com/v4/words.json/randomWord?api_key=9ng3mailtyfjrv7jz3x13l1z2bubppsaqqg05x253xp2pqztk";
  fetch(API_URL)
      .then(res => res.json())
      .then((wordObj) => {
        const word = wordObj.word;
        const wordArray = word.split("");
        console.log(wordArray);
        wordArray.forEach((char) => {
          gameWordContainerEl.innerHTML += "<div class=\"wordChar\">" + char.toUpperCase() + "</div>"
        })
      });
}
fetchWordAndRender();

// function for clicking letter
const clickedLetter = (letter) => {

  console.log(letter);
}
