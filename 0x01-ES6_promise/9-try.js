
import divideFunction from './8-try.js';

export function guardrail(mathFunction) {
    let arr = []

    try {
        arr.push(mathFunction(), 'Guardrail was processed')
    }catch(err) {
        arr.push(err.message, 'Guardrail was processed')
    }
    return arr;
}


console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));