// option-1: direct set on html--

{/* <button onclick="makeGray()">Make gray</button>
<br><br>
<button id="make-blue">Make Blue</button>
<br>
<button id="make-purple">Make purple</button> */}

//option-2: add onclick function [important we will use this]
function makeGray(){
    document.body.style.backgroundColor= 'gray';
};

// option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option-3 another option- [we will use this some time]
const purpleButton = document.getElementById('make-purple');
   purpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple';
   }

// option-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
 document.body.style.backgroundColor = 'pink';
}

// option-4 another 
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function mkeGreen(){
  document.body.style.backgroundColor = 'green';
})

// option-4 final [importan we will use this]
const goldenrodButton = document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
