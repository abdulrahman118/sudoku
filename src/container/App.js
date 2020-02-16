import React, { Component } from 'react';
import './App.css';
import BoardRow from '../components/BoardRow';
import eraser from '../eraser.png';
import { puzzles } from '../puzzles';

const initialState = {
  puzzleInput: [],
  values:
    [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]],
  currentCell: '',
  x: '',
  y: '',
  errorCells: []
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    this.loadPuzzle();
  }

  selectCell = (x, y) => {
    // console.log('click');
    const id = `${x}${y}`;

    this.setState({ x: x, y: y, currentCell: id });

  }

  validateNumber = (number) => {
    // console.log('chck', number);
    // console.log('chck', number);

    if (this.state.currentCell && !isNaN(this.state.y) && !isNaN(this.state.x)) {
      // console.log('click');
      let { values, errorCells } = this.state;
      const { x, y } = this.state;

      if (this.state.puzzleInput[x][y] === 0) {
        values[this.state.x][this.state.y] = number;

        if (this.isValidNumber(number)) {
          //  console.log('valid');        

          if (errorCells.includes(this.state.currentCell)) {
            errorCells.splice(errorCells.indexOf(this.state.currentCell), 1);
          }

          this.setState({ values: values, errorCells: errorCells });
          // console.log(this.state.values);          
          const isSolved = this.checkforSolution();

          if (isSolved) {
            alert("Congratulations! You hav solved th puzzle!");
            this.loadPuzzle();
          }

        } else {
          //  console.log('invalid');
          errorCells.push(this.state.currentCell);

          this.setState({ values: values, errorCells: errorCells });
        }
      }
    }

  }
  createButtonOptions = () => {
    let buttons = [];
    for (let i = 1; i < 10; i++) {
      buttons.push(<div className='button' key={i} onClick={() => this.validateNumber(i)}>{i}</div>)

    }
    buttons.push(<div className='eraser' key="eraser" onClick={this.eraseCurrentCell}><img src={eraser} alt="eraser" /></div>)
    return buttons;
  }

  isValidNumber = (number) => {
    const { values, x, y } = this.state;

    for (let i = 0; i < 9; i++) {
      if (i !== y && values[x][i] === number)
        return false;
    }

    for (let i = 0; i < 9; i++) {
      if (i !== x && values[i][y] === number)
        return false;
    }

    const xRegion = Math.ceil((x + 1) / 3);
    const yRegion = Math.ceil((y + 1) / 3);

    for (let i = (3 * (xRegion - 1)); i < 3 * xRegion; i++) {
      for (let j = (3 * (yRegion - 1)); j < 3 * yRegion; j++) {
        if (i !== x && j !== y && values[i][j] === number) {
          return false;
        }
      }
    }


    return true;
  }

  checkforSolution = () => {
    const { values } = this.state
    let isSolved = true;

    for (let i = 0; i < 9; i++) {

      if (values[i].includes(0)) {
        isSolved = false;
        break;
      }

      for (let j = 1; j <= 9; j++) {
        if (!values[i].includes(j)) {
          isSolved = false;
          break;
        }
      }
    }

    if (isSolved) {
      let valueArray = [];
      for (let i = 0; i < 9; i++) {
        valueArray = [];

        for (let j = 0; j < 9; j++) {
          valueArray.push(values[j][i])
        }

        for (let k = 1; k <= 9; k++) {
          if (!valueArray.includes(k)) {
            isSolved = false;
            break;
          }
        }
      }
    }

    return isSolved;

  }

  eraseCurrentCell = () => {
    // console.log('erase');
    const { currentCell, x, y } = this.state;
    let { values } = this.state;

    if (!isNaN(currentCell) && this.state.puzzleInput[x][y] === 0) {
      values[x][y] = 0;
      const box$ = document.getElementById(currentCell).firstChild;
      box$.innerHTML = "";
      this.setState({ values: values });
    }
    // console.log(this.state.values);
  }

  loadPuzzle = () => {
    const values = puzzles.map(row => row.slice(0));
    this.setState({ values: values, puzzleInput: puzzles });
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * (9)) + 1
  }
  render() {
    const { values, currentCell, errorCells } = this.state
    return (
      <div className="container">
        <h1>S U D O K U</h1>
        <div className="board">
          {
            values.map((row, idx) => <BoardRow key={idx} row={row} rowId={idx} selectCell={this.selectCell}
              currentCell={currentCell} errorCells={errorCells} />)

          }
        </div>
        <div className="button-options">
          {
            this.createButtonOptions()
          }
        </div>
      </div>
    );
  }

}

export default App;
