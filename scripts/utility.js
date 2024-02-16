function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//alphabets generator

function getRandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabetString.split('');
    

    // get a random index between 0 to 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet =alphabetsArray[index];
    return alphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}


function getCurrentValueById(elementId){
    const currentElement = document.getElementById(elementId);
    const currentValueInText = currentElement.innerText;
    const currentValue = parseInt(currentValueInText);
    return currentValue ;
}

function displayUpdatedResultById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function currentElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text ;
}