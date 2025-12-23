import { getCurrentWord } from "./utilis.js"


export default function Keyboard({keyboard, isGameOver, resetGame}){

    return(
        <>
            <div className="keyborad-status"></div>
            <div 

            className="keyboard"
             >
                {keyboard}
            </div>
            {isGameOver && 
                <button 
                    className="newGame"
                    onClick={() =>resetGame()}>
                        New Game
                </button>}
        </>
    )
}

