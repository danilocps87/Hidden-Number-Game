//Variables:

let listUsedNumbers = [];

let maxlimit = 10;

let hiddenNumber = anyNumber();

let alreadyNumbers = [];

let result

let attempt = 1;

let wAttempt;

let kick = document.querySelector('input');

//Functions:

function checkKick(){
    kick.value;
    console.log(`button event! #${hiddenNumber}`);
    
    if(kick.value == hiddenNumber){
        showText('h1', 'Right Number!');
        wAttempt = attempt > 1 ? 'attempts' : 'attempt';
        showText('p', `You found the hidden number after ${attempt} ${wAttempt}!`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if(kick.value > hiddenNumber){
            showText('p', `The Hidden Number is lower than ${kick.value}!`);
        } else {
            showText('p', `The Hidden Number is higher than ${kick.value}!`);
        }
        attempt++;
        clearInput();
        kick.focus();
    }
}

function showText(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'US English Female', {rate:1.2});
}

function anyNumber() {
    let chosenNumber = parseInt(Math.random() * maxlimit + 1);

    let listSize = listUsedNumbers.length;

    if(listSize == maxlimit){
        listUsedNumbers = [];
    }
    if(listUsedNumbers.includes(chosenNumber)){
        return anyNumber();
    }else{
        listUsedNumbers.push(chosenNumber);
        console.log(listUsedNumbers);
        return chosenNumber;
    }
}

function clearInput(){
    kick = document.querySelector('input');
    kick.value = '';
    focus(kick.value);
}

function restartGame(){
    hiddenNumber = anyNumber();
    clearInput();
    attempt = 1;
    console.log(hiddenNumber);
    startMessage();
    document.getElementById('restart').setAttribute('disabled', true);
    kick.focus();
}

function startMessage(){
    showText('h1', 'Hidden Number Game');
    showText('p', `Choose a number from 1 to ${maxlimit}`);
}

//Program:

console.log(hiddenNumber);

startMessage();

kick.focus();