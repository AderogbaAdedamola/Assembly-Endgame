import Hangman from "./Hangman"
import GameStatus from "./GameStatus"
import Word from "./Word.jsx"
import Keyboard from "./Keyboard"
import LanguageChips from "./LanguageChips"
import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./languages"
import { getCurrentWord,  getFarewellText } from "./utilis.js"
import Confetti from 'react-confetti'

function App() {
  const [currentWord, setCurrentWord] = useState(() => getCurrentWord())
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const [guessedLetters, setGuessedLeters] =useState([])
  // const [displayedLetters, setDisplayedLetters] = useState(new Array(currentWord.length).fill(""))
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const numGuessesLeft = languages.length - 1
  const isGameLost = wrongGuessCount >= numGuessesLeft
  const isGameOver = isGameWon && isGameLost ? false : isGameWon || isGameLost 
  const currentLanguage = wrongGuessCount > 0 && languages[wrongGuessCount - 1].name
  const fareWellMessage = () => getFarewellText(currentLanguage)
  
const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
console.log(isLastGuessIncorrect)

  const keyboard = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
    return(<button 
      className={className}
      key={letter}
      disabled={isGameOver}
      aria-disabled={guessedLetters.includes(letter)}
      aria-label={`Letter ${letter}`}
      onClick={() =>addLetters(letter)}
      style={{
          opacity: isGameOver ? "0.5" : "1"
          }}>
      {letter.toUpperCase()}
    </button>)
    })

    function addLetters(letter){
      if(isGameOver){
        return
      }
      else{
        // const wordArray = currentWord.split("")
        setGuessedLeters(prevGuess => prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter,])
        // wordArray.map((each, index) => {
        //   console.log("het " + letter)
        //   if(letter === each){
        //       displayedLetters[index] = letter
        //     console.log("true combo")
        //     }
        //   })}
      }
    }
    function resetGame(){
      setCurrentWord(getCurrentWord())
      setGuessedLeters([])
    }
  return (
    <>
      <main>
      {
          isGameWon && 
              <Confetti
                  recycle={false}
                  numberOfPieces={1000}
              />
      }
        <Hangman/>
        <GameStatus
          isGameOver={isGameOver}
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isLastGuessIncorrect={isLastGuessIncorrect}
          fareWellMessage={fareWellMessage}/>
        <LanguageChips wrongGuessCount={wrongGuessCount} />
      
        <Word 
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          lastGuessedLetter={lastGuessedLetter}
          isGameLost={isGameLost}
          />
        <Keyboard 
          keyboard={keyboard} 
          isGameOver={isGameOver}
          guessedLetters={guessedLetters}
          resetGame={() => resetGame()}
          />
      
      </main>
    </>
  )
}

export default App
