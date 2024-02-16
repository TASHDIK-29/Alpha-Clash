// Vangari Way 
// function play(){
//     //hide home screen by adding hidden class
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // show playground by remove hidden class
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

// Pro Way ---> utility.js
function play(){
    // Hide everything except Playground
    hideElementById('home-screen');
    hideElementById('score-card');
    showElementById('play-ground');

    // set Life And Score
    displayUpdatedResultById('current-life', 5);
    displayUpdatedResultById('current-score', 0);

    continueGame();
}

function continueGame(){
    const alphabet = getRandomAlphabet();
    
    const randomAlphabet = document.getElementById('random-alphabet');
    randomAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

document.addEventListener('keyup', handelKBDButtonPress)

function handelKBDButtonPress(event){
    //console.log(event)
    const playerPressed = event.key;

    // Escape from game if pressed escape button
    if(playerPressed === 'Escape')
    {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('random-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    //console.log(playerPressed, expectedAlphabet);

    // check
    if(playerPressed === expectedAlphabet)
    {
        console.log('win');
        // update score

        //---------Vangari Way-----------------------
        
        // 1. get current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreInText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreInText);

        //2. increase score
        // const newScore = currentScore + 1 ;

        //3. show updated score
      //  currentScoreElement.innerText = newScore ;

      //---------Pro Way------By Utility-------------

        const currentScore = getCurrentValueById('current-score');
        const newScore = currentScore + 1 ;
        displayUpdatedResultById('current-score', newScore);


        // start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('fuck uuu');
        // update Life

        //-----------Vangari Way-------------------
        //1. get current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeInText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeInText);

        //2. reduce Life
        // const newLife = currentLife - 1 ;

        //3. show updated Life
        //currentLifeElement.innerText = newLife ;

        //------------Pro Way------By Utility--------------

        const currentLife = getCurrentValueById('current-life');
        const newLife = currentLife - 1 ;
        displayUpdatedResultById('current-life', newLife);

        // check life
        if(newLife === 0)
        {
            gameOver();
        }
   }

   function gameOver(){
    hideElementById('play-ground');
    showElementById('score-card');

    // display Final Score
    const finalScore = getCurrentValueById('current-score');
    displayUpdatedResultById('final-score', finalScore);

    // Remove last Alphabet Background color
    const lastAlphabet= currentElementTextById('random-alphabet');
    console.log(lastAlphabet);
    removeBackgroundColorById(lastAlphabet);
   }
}