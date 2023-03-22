const zmienna: string="zmienna"
function func (a: number,b: number) {
    return a+b
}

// Jeśli uzyjemy: number po funkcji to mówimy jaki typ ma być zwrócony z funkcji

function funct (a:number, b:number): number {
    return a + b
}

// Jeśli napiszemy: void to znaczy, ze nasza funkcja nic nie zwraca

function functi (a: number, b: number): void {
    console.log (a+b)
}

// Jeśli funkcja moze zwrócić np. number albo null:

function functio (a: number, b: number): number | null {
    if(a=0){
        return null;
    }
    return a+b
}
// błąd
//const add= (a:number | string, b: number | string): 
//number | string => a + b;

//console.log(add(2,3));
//console.log(add('Hello','World'));

