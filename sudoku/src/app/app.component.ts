import { Component } from '@angular/core';
import { SudokuService } from './sudoku.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sudoku';
  constructor(private sudokuService: SudokuService) {}
  values: string[][] = new Array(9).fill('').map(() => new Array(9).fill(''));
  disable = false;
  calculate() {
    console.log('Inside ts taking values');
    console.log(this.values);

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.values[i][j].length > 0) {
          let a = i.toString() + j.toString();
          document.getElementById(a)!.style.color = 'red';
        } else {
          let a = i.toString() + j.toString();
          document.getElementById(a)!.style.color = 'blue';
        }
      }
    }
    setTimeout(() => {
      let b = this.sudokuService.checkValidInput(this.values, 9);
      if (b) {
        this.sudokuService.solveSudoku(this.values);
        this.values = this.sudokuService.changeToString();
        console.log('True Input');
        this.disable = true;
      } else {
        alert('Wrong Input. Please check your input');
      }
    }, 1000);
  }
}
