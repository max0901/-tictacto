import Square from "./square";
import "./App.css";

function Board({onplay,isNext,squares}) {

  
  const handleClick = (i) => {
      if(winner(squares)||squares[i]){
          return;
        }
        const nextSquare = squares.slice();
    if (isNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onplay(nextSquare);
   
  };
  const winner=(squares)=>{
      const lines=[
          [1,2,3],
          [3,4,5],
          [6,7,8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
                return squares[a]
            }
        }
        return null;
    }
    const gameWinner=winner(squares);
    let status;
    if(gameWinner){
        status="Winner:"+gameWinner

    }
    else{
        status="Next Player"+(isNext?"X":"O")
    }
    return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
      </div>
    </>
  );
}
export default Board;
