// konwersja jednego typu w drugi wykonana w sposob jawny np.
const text: string = 'tekst';
const num: number = Number(text);

// rzutowanie w przypadku JSON:
// dzięki uzyciu as string; zmienna data jest typu number a nie any
const json1 = '123';
const data1 = JSON.parse(json1) as string;
console.log(data1, typeof data1);