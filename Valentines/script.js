const showLetterButton = document.getElementById('showLetter');
const letter = document.getElementById('letter');
const loveSound = document.getElementById('loveSound');

showLetterButton.addEventListener('click', () => {
    letter.classList.add('show'); 
    showLetterButton.disabled = true;
    loveSound.play(); // Play the sound
});

showLetterButton.addEventListener('click', () => {
    letter.classList.add('show');
    loveSound.play(); 
    showLetterButton.classList.add('clicked'); // Add the new class
});
