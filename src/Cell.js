import React from 'react';
import './Cell.css';

const Cell = ({ isLit, flipCellsAroundMe }) => {
  let classes = 'Cell' + (isLit ? ' Cell-lit' : '');

  return <td className={classes} onClick={flipCellsAroundMe} />;
};

export default Cell;
