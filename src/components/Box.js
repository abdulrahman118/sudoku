import React from 'react';


const Box = ({ number, rowId, columnId, selectCell, currentCell, errorCells }) => {
    const id = `${rowId}${columnId}`;
    const labelDisplay = number === 0 ? '' : number;
    let className = "box " + id;
    className = className + (currentCell === id ? " active" : "");
    className = className + (errorCells.includes(id) ? " error" : "");

    return (

        <div className={className} id={id} onClick={() => selectCell(rowId, columnId)} ><label>{labelDisplay}</label></div>
    )
}

export default Box;