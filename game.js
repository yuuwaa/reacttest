import React, { useState } from "react";
import './App.css';


function Game(props) {
    const [history,sethistory]=useState([{ squares: new Array(9) }]);
    const [stepnumber,setStepNumber]=useState(0);
    const [xIsNext,setXIsNext]=useState(true);
    const handleClick =(i) =>{
    //この辺からよく分かりません。。。
      ???
    }
      const history = history.slice(0, stepNumber +1);
      const squares = history[history.length - 1].squares];
      const log(`history`) = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = state.xIsNext ? "X" : "O";
      setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      });
    }
  
    jumpTo(step) ;{
      setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }

      const history = state.history;
      const current = history[state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default App;