let box = document.querySelectorAll('.box');
let GAME_ON = false
let level = 0
let highscore = 0
let gamePattern = []
let userClickedPattern = []

if (localStorage.getItem("memory-game") != null) {
    highscore = JSON.parse(localStorage.getItem("memory-game")).hiscore;
    hiscore.innerHTML = `High Score: ${highscore}`
}
const gameOver = () => {
    container.classList.add("shake")
    setTimeout(function () {
        container.classList.remove("shake")
    }, 500);
    highscore = Math.max(highscore, level);
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    btn.disabled = false
    setTimeout(() => {
        GAME_ON = false;
    }, 1000);
}
const checkAnswer = k => {
    if (userClickedPattern[k] !== gamePattern[k]) {
        gameOver()
    }
    if (k === gamePattern.length - 1) {
        gamePattern = []
        setTimeout(function () {
            showRandomPattern()
        }, 1000);
        userClickedPattern = []
    }
}
const handleBoxEvent = (e) => {
    if (!GAME_ON) return;
    let userChosen = e.target.id.split("-")[1]
    userClickedPattern.push(userChosen)
    flashBox(userChosen,0)
    checkAnswer(userClickedPattern.length - 1)
}
const flashBox = (n,i) => {
    setTimeout(() => {
        box[n].classList.add("filled");
    }, 500*i);
    setTimeout(function () {
        box[n].classList.remove("filled");
    }, 400*(i+1));
}
const showRandomPattern = () => {
    for (let i = 0; i <= level; i++) {
        let randomBoxNumber = Math.floor(Math.random() * 6)
        flashBox(randomBoxNumber,i)
        gamePattern.push("" + randomBoxNumber)
    }
    level++
    highscore = Math.max(highscore, level)
    score.innerHTML = "Score: " + level
    hiscore.innerHTML = "High Score: " + highscore
    localStorage.setItem("memory-game",
        JSON.stringify({ hiscore: highscore })
    )
}
const gameEvent = () => {
    if (GAME_ON) return;
    GAME_ON = true
    level = 0
    btn.disabled = true;
    setTimeout(() => {
        showRandomPattern()
    }, 300);
}
btn.addEventListener('click', gameEvent);
box.forEach(e => e.addEventListener("click", handleBoxEvent))