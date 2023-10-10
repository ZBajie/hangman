
const number = 1;
switch(number){
    case 1: 
    hangmanGame();

    
}

function hangmanGame(){
    const listOfWords = ['january', 'monday','elephant', 'summer', 'lawyer','school']
    word = listOfWords[ Math.floor(Math.random() * listOfWords.length)];
    console.log(word)
    linesForLetterInWord(word)
}

function linesForLetterInWord(word){
    const letterList = document.querySelector('#letterlist')
    for (let i = 0; i < word.length; i++){
        const letterItem = document.createElement('li')
        letterItem.innerText = '_';
        letterList.append(letterItem)
        
    }

}
