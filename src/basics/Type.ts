// stworzenie wlasnego typu

const abc: number | string = 111;
const cba: number | string = 222;

function sum (a: number | string, b: number | string):
number | string {
   return (a as string) + (b as string);
}

//skrócona wersja

type NumOrStr = number | string;

const abc1: NumOrStr = 111;
const cba1: NumOrStr = 222;

function  sum1( a: NumOrStr,b: NumOrStr) : NumOrStr {
    return (a as string) + (b as string);
}
