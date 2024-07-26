const fs = require('fs')
//const puzzle = fs.readFileSync('./puzzle.txr', 'utf-8')
function read(numSud) {
  const puzzle = fs.readFileSync('./puzzles.txt', 'utf-8');
  const regExFor81 = /([1-9-]{81})/gm;
  const arrayOfSudoku = puzzle.match(regExFor81)
  const oneSudoku = arrayOfSudoku[0]
  // const regExFor9 = /([-]*[0-9][-]*){9}/
  // const short = oneSudoku.slice(0, 10)

//// map style
  // const obosaniyMassiv = [];
  // const littlearrays= arrayOfSudoku.map((el) => [el])
  // const crazy = littlearrays.map((el, ) => el.map((el) => obosaniyMassiv.push(el.slice(0, 10))))
  
///-------
const array = []
for(let i = 0 ; i < oneSudoku.length; i+=9){
  
    array.push(oneSudoku.slice(i, i+9))
        
      }
      const arrrayOfArrays = array.map((el)=> [el])
    
      console.log(arrrayOfArrays)
return arrrayOfArrays
}
//console.log(oneSudoku.slice(0,9))
// console.log(array)




//   for(let i = 0; i < oneSudoku.length; i++){
//     if( i % 10 === 0){
//  console.log(oneSudoku.join(''))
//     }

//   }
  console.log()
 
 
  
    
  






 

 
//   }
 //console.log(short)
  
  
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
