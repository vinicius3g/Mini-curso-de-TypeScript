type Todo = {
    title: string;
    description: string;
    complete: boolean;
}
//Readonly
const todo: Readonly<Todo> = {
    title: "assistir dark de novo",
    description: "relembrar detalhes",
    complete: false
}

console.log(todo)

// todo.complete = true

console.log(todo)

//Partial
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
    return {...todo, ...fieldsToUpdate}
}

const todo2:Todo = updateTodo(todo, {complete: true})

console.log(todo2)

//Pick 
type TodoPreview = Pick<Todo, "title"  | "description">

const todo3: TodoPreview = {
    title: "fechar assassin creed unity",
    description: "dsadasda"
}

//Omit
type TodoPreview2 = Omit<Todo, "description" | "complete">

const todo4: TodoPreview2 = {
    title: "fechar assassin creed unity"
    // description: "dsadasda"
}