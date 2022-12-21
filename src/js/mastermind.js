/** Generate the secret four digits element.
 * @return Array of '0'....'9'- the secret four digits element. ,
 */
function generateNumber(){
    return new Array(4).fill(null).map(()=>Math.trunc(Math.random()*10.0))
}

/**The player give it the tips if the caracter too much or not a number the while cycle repeat asks for the tips. 
 * 
 *  @return Array of '0'....'9'- the player tips.
 */

function readGuess(){
    let tipsArrayNum;
    do {
        let tips= prompt('Give your tips!');
        let tipsArray = Array.from(tips);
        tipsArrayNum =tipsArray.map(Number);

        if (tipsArrayNum.length !== 4 ){
            alert(`Too much caracters!`)
        }
        else if (tipsArrayNum.some(isNaN)){
            alert(`Only numbers type here!`)
        }
        
        }while (tipsArrayNum.length !== 4 || tipsArrayNum.some(isNaN));
    return tipsArrayNum;
}

/** the counter counts how many good answer (good place good number). that's it blackCandidates.
 * 
 * @param guess : the user tips four digits array.
 * @param secret: random generated four digits array.
 * 
 * @return : give back the good answer.
*/
function getBlackCount(guess,secret){
    var blackCandidates = 0;
    for (let i in secret) {
        if (guess[i] === secret[i]) {
            blackCandidates += 1;
        }
    }
    return blackCandidates;
};

/** the counter count that the player number includes the secret number that's it whiteCandidates.
 * 
 * @param guess : the user tips four digits array.
 * @param secret: random generated four digits array.
 * 
 * @return: whiteCandidates subtraction blackCandidates because the blackCandidates already included whiteCandidates too.
*/

    function getWhiteCount(guess, secret, blackCount) {
        let whiteCandidates = 0;
      
        for (let number of guess) {
            if (secret.includes(number)) {
                whiteCandidates += 1;
            }
        }    
        return whiteCandidates - blackCount;
      };

      /** If the player every numbers guessed  they is won. 
       * 
       * @blackCount :blackCandidates (good place good number) equal 4 the player won.
       * 
       * @return true if guess all numbers and win.
      */
function isGameWon(blackCount){
    if (blackCount === 4){
        return false ;}
    else {return true;}
    };

/**present situation give back whitches number add the player of this how much includes the secret array and ot this how many number there is a good places And whict round is it that.
 * 
 * @blackCount :blackCandidates (good place good number
 * @whiteCount : how many number includes the secret number
 * @guess :  the user tips four digits array.
 * @i : which round is it at?
 * 
 * @return : give back the present situation
  */

function returnResult(blackCount,whiteCount,guess,i){
    console.log(` Your numbers: ${guess}. Good number in Good place: ${blackCount}. Good number in Wrong place: ${whiteCount}. You are at round ${i}`)
}

/** If no more attempt and lose or finde out thy array number and win the function write the console
 * 
 * @gameWon : If the player every numbers guessed  return false.
 * 
 */
function getFinalResult(GameWon){
    if (GameWon === true) {
        alert( "You Failed.")
    }
    else { alert("Congrat. You Win!")}
}


/**the players decide what they wants to play. */
function getNewGame(){
    let question = prompt("would you like to play? y / n");
    return ( question ==="y" ? gameLoop() : "Thank You." );
}



let newGame = getNewGame();

function gameLoop() {
    
    let secret = generateNumber();
    let GameWon = true;
    i=0;

    while (GameWon && i != 13) {
    
    let guess = readGuess();
    let blackCount = getBlackCount(guess,secret);
    let whiteCount = getWhiteCount(guess,secret,blackCount);
    var result = returnResult(blackCount,whiteCount,guess,i);
        GameWon = isGameWon(blackCount);
        ////alert(GameWon)
        i = i+1; 
    } ;
    
    let finalResult = getFinalResult(GameWon);
    getNewGame();
    
   }