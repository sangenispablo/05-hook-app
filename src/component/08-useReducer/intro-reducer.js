const initialState = [{
    id: 1,
    todo: 'Aprender React',
    done: false,
}]

const todoReducer = (state=initialState, action) => {

    // el signo de pregunta despues de action es para
    // no evaluar el if si viene un action con undefined
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Aprender React Native',
    done: false,
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo,
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);