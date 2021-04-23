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
const wordDefContainerEl = document.getElementById("wordDefinitionContainer");
const fetchWordAndRender = () => {
  // fetches random word
  const API_KEY = "9ng3mailtyfjrv7jz3x13l1z2bubppsaqqg05x253xp2pqztk";
  const API_URL = "http://api.wordnik.com/v4/words.json/randomWord?api_key="+API_KEY;
  fetch(API_URL)
      .then(res => res.json())
      .then((wordObj) => {
        const word = wordObj.word;
        const wordArray = word.split("");
        wordArray.forEach((char) => {
          gameWordContainerEl.innerHTML += "<div class=\"wordChar\">" +
              "<div class=\"hide letter"+char.toUpperCase()+"\">" + char.toUpperCase() + "</div>"
              + "</div>"
        })
        // find word definition
        const WORD_DEFINITION_API =
            "https://api.wordnik.com/v4/word.json/"+word+"/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false" +
            "&api_key="+API_KEY;
        fetch(WORD_DEFINITION_API)
            .then(res => res.json())
            .then((defObj) => {
              wordDefContainerEl.innerHTML += "<p>Hint: "+defObj[0].text+"</p>"
            });
      });
}
fetchWordAndRender();

// function for clicking letter
const gameInfoContainerEl = document.getElementById("gameInfoContainer");
let tryCount = 5;
gameInfoContainerEl.innerHTML += "<p>Attempts Remaining: " + tryCount + "</p>"
const clickedLetter = (letter) => {
  const gameLetter = document.getElementsByClassName("letter" + letter);
  if (tryCount > 0) {
    if (gameLetter.length === 0) {
      tryCount--;
      gameInfoContainerEl.innerHTML = "<p>Attempts Remaining: " + tryCount + "</p>"
    }
    if (gameLetter.length > 0) {
      while (gameLetter.length > 0) {
        gameLetter[0].className = "visible";
      }
    }
  }
  // show all letters
  if (tryCount === 0) {
    gameInfoContainerEl.innerHTML = "<p>Nice Try. Game Over!</p>"
    const gameWord = document.getElementsByClassName("hide");
    while (gameWord.length > 0) {
      gameWord[0].className = "visible";
    }
  }
}

const checkGameStatus = () => {
  // todo: win condition
}

checkGameStatus();
