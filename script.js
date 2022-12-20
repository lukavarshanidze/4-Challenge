// first Project
// Challenge 1: Your Age in Days
function ageInDays(){
        var birthYear = prompt('how old are you');
        var yourAgeInDays = birthYear * 365;
        var ageInDayss = document.createTextNode('you are' + yourAgeInDays + ' days old');
        var h1 = document.createElement('h1');
        h1.setAttribute('id', 'ageInDays');
        h1.appendChild(ageInDayss);
        document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}


//second Project
// challenge 2:
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
//challenge: 3

//  WARNING!:  in //-this is made by my ways

// function rpsGame(yourChoice) {
//     var humanChoice, botChoice;
//     humanChoice = yourChoice.id;
//     botChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
//     results = decideWinner(humanChoice, botChoice);
//     rpsFrontEnd(yourChoice.id, botChoice, results);
// }

// function decideWinner(yourChoice, computerChoice) {

//     if(yourChoice == 'rock' && computerChoice == 'rock' || yourChoice == 'paper' && computerChoice == 'paper' || yourChoice == 'scissors' && computerChoice == 'scissors') {
//         return 'you tied !';
//     }
//     else if(yourChoice =='rock' && computerChoice == 'scissors' || yourChoice == 'paper' && computerChoice == 'rock' || yourChoice == 'scissors' && computerChoice == 'paper'){
//         return 'you won !';
//     }
//     else{
//         return 'you lose !';
//     }
// }

// function rpsFrontEnd(humanImageChoice, botImageChoice, decideWinner) {
//     var imagesDatabase = {
//         'rock': document.getElementById('rock').src,
//         'paper': document.getElementById('paper').src,
//         'scissors': document.getElementById('scissors').src
//     }

//     // let's remove all the images.
//     document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissors').remove();

//     //
//     var humanDiv = document.createElement('div');
//     var botDiv = document.createElement('div');
//     var messageDiv = document.createElement('div');

//     humanDiv.innerHTML = "<img src = " + imagesDatabase[humanImageChoice] +" height=150 width=150>"
//     messageDiv.innerHTML = "<h1 style = 'font-size:60px;'> "+ decideWinner +"</h1>"
//     botDiv.innerHTML = "<img src=" + imagesDatabase[botImageChoice] +" height=150 width=150>"

//     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
//     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
//     document.getElementById('flex-box-rps-div').appendChild(botDiv);
// }
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = chooseWithMath(math());
    var winner = decideWinner(humanChoice,botChoice);
    var message = finalMessage(winner);
    lastOne(yourChoice.id, botChoice,message);

}

function math(){
    return Math.floor(Math.random() * 3);
}
function chooseWithMath(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourScore, botScore){
    var dataBase = {
        'rock': {'paper':0, 'rock': 0.5, 'scissors':1},
        'paper': {'scissors':0, 'paper': 0.5, 'rock':1},
        'scissors': {'rock':0, 'scissors': 0.5, 'paper':1}
    }
    var urScore = dataBase[yourScore][botScore];
    var btScore = dataBase[botScore][yourScore];
    return [urScore,btScore];
}
function finalMessage([yourScore, botScore]){
    if(yourScore === 0){
        return{'message': 'you lose', 'color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'you tied', 'color':'yellow'};
    }
    else{
        return{'message':'you won', 'color': 'green'};
    }
}

function lastOne(humanImageChoice,botImageChoice, finalMessage){
    var rpsData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=" + rpsData[humanImageChoice] +" height= 150 width=150>"
    messageDiv.innerHTML = "<h1 style = 'font-size: 60px; color: "+ finalMessage['color'] +"'> " + finalMessage['message'] +"</h1>"
    botDiv.innerHTML = "<img src="+ rpsData[botImageChoice] +" height=150 width=150>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}







// Challenge 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for(let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
  

    
}

console.log('"copyAllButtons --> "', copyAllButtons);

function buttonColorChange(buttonThingy) {
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');

    }
}

function buttonColorReset(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
  
    for(let i=0; i<all_buttons.length; i++){
        var randomNumber = Math.floor(Math.random() * 4);

        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);

    }
}

