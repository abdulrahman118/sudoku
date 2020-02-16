import React from 'react';
import Box from './Box';

const BoardRow = ({ row, rowId, selectCell, currentCell, errorCells }) => {
    return (
        <div className="row" id={rowId}>
            {row.map((number,idx) =>
                <Box key={idx} number={number} rowId={rowId} columnId={idx} selectCell={selectCell} 
                    currentCell={currentCell} errorCells={errorCells} />
            )}
        </div>
    )
}

export default BoardRow;