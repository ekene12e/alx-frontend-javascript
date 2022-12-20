
/*let a = (name) => console.log(`hello ${name}`);
a('Ekene');
export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
  export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  console.log(taskFirst());
  */
  /*function f(...args) {
    if (args.length == 0)
    {
        args = 'Nil';
        return `lenght = 0, contents = ${args}`;
    }
    return `lenght = ${args.length}, contents = ${args}`;
  }
  console.log(f(2, 1, 6, 8, 99));
  console.log(f());

  export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income,
      gdp,
      capita,
    };
  
    return budget;
  }

  console.log(getBudgetObject(400, 700, 900));*/

  export default function returnHowManyArguments( ...args ) {
    return args.length
  }
  returnHowManyArguments("Hello", "Holberton", 2020);