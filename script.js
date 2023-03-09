//create variables for button and fortune display area
let fortuneButton = document.querySelector('#button');
let fortuneDisplay = document.querySelector('#fortune');
//when button clicked, run a function
fortuneButton.addEventListener('click', fortuneGenerator);
//create function that generates fortune
//when function is called, create a randomizer that cycles through my fortune array, randomly choose an index, and displays the text...
//of that index on the page.
function fortuneGenerator() {
    const fortuneOptions = ['I am strong.', 'I alone hold the truth of who I am.', 'I am loved and worthy.', 'I am allowed to feel good.',
        'I am exactly where I need to be in life.', 'I deserve greatness.', 'I bring value to myself and those around me.', 
        'My weirdness is wonderful.', 'My body is beautiful.', 'I am open to continuous growth and development.',
        'I am grateful for the life I have been given.', 'I release the fears that do not serve me.', 'I deserve respect from others.',
        'I am allowed to have feelings and to recognize and communicate them to others.', 'My opinions and perspective matter.', 
        'I am intelligent.', 'I am confident I will succeed.', 'I am optimistic about the future.', 'I am allowed to say no.', 
        'I am allowed to slow my pace and rest.']
    const randomIndex = Math.floor(Math.random() * fortuneOptions.length);
    const generatedFortune = fortuneOptions[randomIndex];
    fortuneDisplay.innerHTML = generatedFortune;
}