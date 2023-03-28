// Wszystkie funkcje zwracają PROMISE. 
// Promise to typ generyczny, którego domyślnie subtypem jest <any>
// Moemy to jednak zrobić lepiej 

interface SingleToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getToDo(id:number): Promise<SingleToDo>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/${id}')
    return await response.json();
}
(async ()=> {
    const todo=await getToDo(10);
    console.log(todo.title);

})();