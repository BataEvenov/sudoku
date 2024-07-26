const fs = require('fs')
//const puzzle = fs.readFileSync('./puzzle.txr', 'utf-8')
function read() {
  const puzzle = fs.readFileSync('./puzzles.txt', 'utf-8');
  const regExFor81 = /([1-9-]{81})/gm;
  const arrayOfSudoku = puzzle.match(regExFor81)
  const oneSudoku = arrayOfSudoku.shift()
  // const regExFor9 = /([-]*[0-9][-]*){9}/
  
  function slicer (oneSudoku){
  const short = oneSudoku.slice(0, 8)
console.log(short)
  }
 
  
  }
  //console.log(oneSudoku)

//console.log(typeof oneSudoku)
  //return puzzle
  /**
   * 
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */


console.log(read())

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
