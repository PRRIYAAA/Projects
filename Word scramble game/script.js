  const words = [ 
    "react", 
    "angular", 
    "javascript", 
    "bootstrap", 
    "addition",
    "meeting",
    "number",
    "exchange",
    "canvas",
    "garden",
    "position",
    "feather",
    "comfort",
    "tongue",
    "expansion",
    "country",
    "group",
    "taste",
    "field",
    "friend",
    "pocket",
    "needle",
    "expert",
    "statement",
    "second",
    "library",
]; 
  

const hints = [ 
    "JavaScript framework", 
    "JavaScript Framework", 
    "Scripting Language", 
    "Styling Library", 
    "The process of adding numbers",
    "Event in which people come together",
    "Math symbol used for counting",
    "The act of trading",
    "Piece of fabric for oil painting",
    "Space for planting flower and plant",
    "Location of someone or something",
    "Hair like outer covering of bird",
    "A pleasant feeling of relaxation",
    "The muscular organ of mouth",
    "The process of increase or grow",
    "A politically identified region",
    "A number of persons",
    "Ability of tongue to detect flavour",
    "Area of land for farming activities",
    "Person other than a family member",
    "A bag for carrying small items",
    "A thin and sharp metal pin",
    "Person with extensive knowledge",
    "A declaration of something",
    "One-sixtieth of a minute",
    "Place containing collection of books",

]; 
  
 
let displayWord = ""; 

  
 
function shuffle(str) { 
    strArray = Array.from(str); 
    for (let i = 0; i < strArray.length - 1; ++i) { 
        let j = Math.floor(Math.random() * strArray.length); 
        // Swap letters 
        let temp = strArray[i]; 
        strArray[i] = strArray[j]; 
        strArray[j] = temp; 
    } 
    return strArray.join(" "); 
} 
  
let result=0;
function check() { 
    let input = document.getElementById("input1"); 
    let output = document.getElementById("output"); 
    if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase()) 
    {
        result++; 
        output.innerHTML = "Result: Correct"; 
        

         }

    else{
        output.innerHTML = "Result: Incorrect"; 
        alert('NANDRIGAL KODI🙏🙏 and Your points is'+' '+result+' '+'click playagain');
    }
} 
  

function refresh()
{ 
    index = Math.floor(Math.random() * 26); 
    displayWord = words[index]; 
    displayHint = hints[index]; 
    scrambleWord =  document.getElementById("scrambleWord"); 
    scrambleWord.innerText = 
        shuffle(displayWord).toUpperCase(); 
    output.innerText = "Result:"; 

} 
  

refresh();

//Enter key => button
let input4 = document.getElementById("input1"); 
input4.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("check").click();
    }
});

//glowing bulb

var hintButton = document.getElementById('img');
hintButton.addEventListener('click', function() {
    alert(displayHint);

});

//clear input field
const inputField = document.getElementById('input1');
const nextButton = document.getElementById('refresh');
nextButton.addEventListener('click', function() {
    inputField.value = ''; 
});


//reload play again
function again(){
    location.reload();
}

//timer

let timeLeft = 15; 
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
  
let timerId;

function updateTimer() {
    timerDisplay.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerId);
        timerDisplay.textContent = 'Time\'s up!';
        alert('NANDRIGAL KODI🙏🙏 and Your points is'+' '+result+' '+'click playagain');
    }
}

function startTimer() {
    timeLeft = 15;
    timerDisplay.textContent = timeLeft; 
    clearInterval(timerId); 
    timerId = setInterval(updateTimer, 1000); 
}

startButton.addEventListener('click', startTimer);
nextButton.addEventListener('click',startTimer);
//input1.addEventListener('click',startTimer);

//rules
var doubt = document.getElementById('think');
doubt.addEventListener('click', function() {
    alert("1. Click start button Before You start"
        +"\n2. You have 15 seconds to answer each question"
        +"\n3. Click next button after answering"
        +"\n4. You cant go back to previous question"
        +"\n5. if You cant able to answer, click 💡"
        +"\n6.Want to Play again?? ,click play again");
});