import { useState } from "react";
import Board from "./board";

function Game(){
    const [history, setHistory] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const currentSquares=history[history.length - 1]
    
    const handleplay=(nextSquares)=>{
        setHistory([...history,nextSquares])
        setIsNext(!isNext)
    }
    return (
        <div className="game">
          <div className="game-board">
            <Board onplay={handleplay} isNext={isNext} squares={currentSquares} />
          </div>
          <div className="game-info">
            <ol>{/*TODO*/}</ol>
          </div>
        </div>
      );
}
export default Game;