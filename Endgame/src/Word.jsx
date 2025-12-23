

export default function Word({currentWord, guessedLetters, lastGuessedLetter, numGuessesLeft, isGameLost}){

    const word = currentWord.split("").map((letter, index) => {
        const missedLetters = isGameLost && !guessedLetters.includes(letter)
        return (
            <div 
              key={index}
              style={{
                color: missedLetters ? "#BA2A2A":"#FFF"
              }} >
                {
                  guessedLetters.includes(letter) ?
                    letter.toUpperCase() : 
                    isGameLost ? letter.toUpperCase() : ""
                }
            </div>)
    })
    
    return(
        <>
        <div className="word-container">
            {word}
        </div>
        {/*Scren Reader Section  */}
        <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>
                    {currentWord.includes(lastGuessedLetter) ? 
                        `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>
                <p>Current word: {currentWord.split("").map(letter => 
                guessedLetters.includes(letter) ? letter + "." : "blank.")
                .join(" ")}</p>
            
            </section>

            </>
    )
}
