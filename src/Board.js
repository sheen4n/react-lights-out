import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

const Board = () => {
  const CONFIG = {
    nrows: 3,
    ncols: 4,
    chanceLightStartsOn: 0.5
  };

  const { nrows, ncols, chanceLightStartsOn } = CONFIG;

  const createBoard = () => {
    let board = [...Array(nrows)].map(x => Array(ncols));

    for (let i = 0; i < nrows; i++) {
      for (let j = 0; j < ncols; j++) {
        board[i][j] = Math.random() < chanceLightStartsOn ? true : false;
      }
    }

    return board;
  };

  /** handle changing a cell: update board & determine if winner */

  const flipCellsAround = (y, x) => {
    const newBoard = [...board];

    const flipCell = (row, col) => {
      if (col >= 0 && col < ncols && row >= 0 && row < nrows) {
        newBoard[row][col] = !board[row][col];
      }
    };
    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // TODO: determine is the game has been won
    const win = board.every(row => row.every(cell => cell === false));
    setBoard(newBoard);
    setHasWon(win);
    // setHasWon(true);
  };

  /** Render game board or winning message. */
  const makeTable = () => {
    const tblBoard = board.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, columnIndex) => (
          <Cell
            key={`${rowIndex}-${columnIndex}`}
            isLit={cell}
            flipCellsAroundMe={() => flipCellsAround(rowIndex, columnIndex)}
          />
        ))}
      </tr>
    ));

    return (
      <table className='Board'>
        <tbody>{tblBoard}</tbody>
      </table>
    );
  };

  const [board, setBoard] = useState(createBoard());
  const [hasWon, setHasWon] = useState(false);

  return (
    <div>
      {hasWon ? (
        <div className='winner'>
          <span className='neon-orange'>YOU</span>
          <span className='neon-blue'>WIN!</span>
        </div>
      ) : (
        <div>
          <div className='Board-title'>
            <div className='neon-orange'>Lights</div>
            <div className='neon-blue'>Out</div>
          </div>
          {makeTable()}
        </div>
      )}
    </div>
  );
};

export default Board;
