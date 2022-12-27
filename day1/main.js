const keys = Array.from(document.querySelectorAll('.key'));

const keyCode = {              // creating an object with keycodes
  A: 65, 
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

function removeTransition(e) {     // remove the transition class
  if (e.propertyName !== 'transform') return;  // skip if it's not a transform
  e.target.classList.remove('playing');      // remove the transition class
}

function playSound(e) {             // play the sound
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]` // select the audio
    );
    
    const key = document.querySelector(  // select the key
    `div[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`  // select the key
    );
    
    if (!audio) return;                 // stop the function from running
    
    key.classList.add('playing');            // add the transition class
    audio.currentTime = 0;              // rewind to the start
    audio.play();                      // play the sound
  }
  
  
window.addEventListener('keydown', playSound);        // listen for the keydown event
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));  // listen for the transitionend event


keys.forEach((key) => 
key.addEventListener('click', (e) => {
  playSound(e);
  }));