import { clsx } from "clsx" 

export default function GameStatus({isGameOver, isGameLost, isRight, isGameWon, isLastGuessIncorrect, fareWellMessage}) {
  console.log(isGameOver)

  const noStatusDisplayed = ""
  const className = clsx("game-status", {
          won: isGameWon,
          lost: isGameLost,
          farewell: isLastGuessIncorrect && !isGameOver         
        })
     console.log(isRight)
    function gameText(){
      if(isGameOver){
        if(isGameWon){
          return(
            <>
              <p> You Win! </p>
              <p> Well done! 🎉</p>
            </> 
          )
        }
        if(isGameLost){
          return(<>
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly 😭</p>
          </>)
        }   
      }else{
        if(isLastGuessIncorrect){
          return fareWellMessage()
        }else{
          return<></>
        }
      }}
  return (
    <div 
        aria-live="polite" 
        role="status" 
        className = {className}
       >
        {gameText()}       
    </div>
  )
}