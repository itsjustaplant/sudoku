/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

// JS program to implement the approach
class Sudoku {
  N: number;

  K: number;

  SRN: number;

  mat: number[][];

  answer: number[][]; // unique solution

  // Constructor
  constructor() {
    this.N = 9;
    this.K = 58; // 58
    this.SRN = 3;

    // Initialize all entries as false to indicate
    // that there are no edges initially
    this.mat = Array.from({
      length: this.N
    }, () => Array.from({
      length: this.N
    }, () => 0));
    this.answer = Array.from({
      length: this.N
    }, () => Array.from({
      length: this.N
    }, () => 0));

    this.fillValues();
  }

  // Sudoku Generator
  fillValues() {
    // Fill the diagonal of SRN x SRN matrices
    this.fillDiagonal();

    // Fill remaining blocks
    this.fillRemaining(0, this.SRN);

    // Remove Randomly K digits to make game
    this.removeKDigits();
  }

  // Fill the diagonal SRN number of SRN x SRN matrices
  fillDiagonal() {
    for (let i = 0; i < this.N; i += this.SRN) {
      // for diagonal box, start coordinates->i==j
      this.fillBox(i, i);
    }
  }

  // Returns false if given 3 x 3 block contains num.
  unUsedInBox(rowStart: number, colStart: number, num: number) {
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        if (this.mat[rowStart + i][colStart + j] === num) {
          return false;
        }
      }
    }
    return true;
  }

  // Fill a 3 x 3 matrix.
  fillBox(row: number, col: number) {
    let num = 0;
    for (let i = 0; i < this.SRN; i++) {
      for (let j = 0; j < this.SRN; j++) {
        while (true) {
          num = this.randomGenerator(this.N);
          if (this.unUsedInBox(row, col, num)) {
            break;
          }
        }
        this.mat[row + i][col + j] = num;
        this.answer[row + i][col + j] = num;
      }
    }
  }

  // Random generator
  randomGenerator(num: number) {
    return Math.floor(Math.random() * num + 1);
  }

  // Check if safe to put in cell
  checkIfSafe(i: number, j: number, num: number) {
    return (
      this.unUsedInRow(i, num)
          && this.unUsedInCol(j, num)
          && this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
    );
  }

  // check in the row for existence
  unUsedInRow(i: number, num: number) {
    for (let j = 0; j < this.N; j++) {
      if (this.mat[i][j] === num) {
        return false;
      }
    }
    return true;
  }

  // check in the row for existence
  unUsedInCol(j: number, num: number) {
    for (let i = 0; i < this.N; i++) {
      if (this.mat[i][j] === num) {
        return false;
      }
    }
    return true;
  }

  // A recursive function to fill remaining
  // matrix
  fillRemaining(i: number, j: number): boolean {
    // Check if we have reached the end of the matrix
    if (i === this.N - 1 && j === this.N) {
      return true;
    }

    // Move to the next row if we have reached the end of the current row
    if (j === this.N) {
      i += 1;
      j = 0;
    }

    // Skip cells that are already filled
    if (this.mat[i][j] !== 0) {
      return this.fillRemaining(i, j + 1);
    }

    // Try filling the current cell with a valid value
    for (let num = 1; num <= this.N; num++) {
      if (this.checkIfSafe(i, j, num)) {
        this.mat[i][j] = num;
        this.answer[i][j] = num;
        if (this.fillRemaining(i, j + 1)) {
          return true;
        }
        this.mat[i][j] = 0;
      }
    }

    // No valid value was found, so backtrack
    return false;
  }

  // Remove the K no. of digits to
  // complete game
  removeKDigits() {
    let count = this.K;

    while (count !== 0) {
      // extract coordinates i and j
      const i = Math.floor(Math.random() * this.N);
      const j = Math.floor(Math.random() * this.N);
      if (this.mat[i][j] !== 0) {
        count--;
        this.mat[i][j] = 0;
      }
    }
  }
}

export default Sudoku;
