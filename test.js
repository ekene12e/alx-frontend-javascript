
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

  console.log(getBudgetObject(400, 700, 900));

  export default function returnHowManyArguments( ...args ) {
    return args.length
  }
  console.log(returnHowManyArguments("Hello", "Holberton", 2020));/
  export default function concatArrays(array1, array2, string) {
    return [...array1, ...array2, ...string];
  }
  console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

  function getSanFranciscoDescription() {
    const year = 2017;
    const budget = {
      income: '$119,868',
      gdp: '$154.2 billion',
      capita: '$178,479',
    };
  
    console.log( `As of ${year}, it was the seventh-highest income county in the United States,
with a per capita personal income of ${budget.income}. As of 2015, San Francisco
proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`);
  }
  getSanFranciscoDescription();
  function getBudgetObject(income, gdp, capita = 60) {
    const budget = {
      income,
      gdp,
      capita
    };
  
    return budget;
  }
  console.log(getBudgetObject(400, 700));

  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
  
    [`income-${getCurrentYear()}`] : income,
    [`gdp-${getCurrentYear()}`] : gdp,
    [`capita-${getCurrentYear()}`] :capita
  };
    return budget;
  }


export default function appendToEachArrayValue(array, appendString) {
  let returnValue = [];
  for (let idx of array) {
    idx = appendString + idx;
    returnValue.push(idx);
  }
  return returnValue;*/

// export default function createEmployeesObject(departmentName, employees) {
//   let emp = {};
//   emp[departmentName] = employees;
//   return emp
// }
// console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
  si() {
    let arr = [];
    for (const side of this.sides) {
      arr.push(side);
  }
      return arr;    
}
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([pentagon.getSides()]); // [1,2,3,4,5]
console.log(pentagon.si()); // [)