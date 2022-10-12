/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = (a, b) => a + b;
  this.subtraction = (a, b) => a - b;
  this.multiplication = (a, b) => a * b;
  this.division = (a, b) => a / b;
}

const calculator = new Calculator();

console.log(calculator.sum(1, 3));
console.log(calculator.subtraction(6, 2));
console.log(calculator.multiplication(4, 1));
console.log(calculator.division(8, 2));
