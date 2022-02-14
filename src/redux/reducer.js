import * as types from './actionTypes';

const initialState = {
    todos: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case types.UPDATE_TODO:
            state.todos.forEach(item => {
                if (item.id === action.payload.id) {
                    item['title'] = action.payload.title;
                }
            });
            return {
                ...state,
            }
        case types.DELETE_TODO:
            const newTodos = state.todos.filter(item => item.id !== action.payload);
            return {
                ...state,
                todos: newTodos,
            }
        case types.LIST_TODO:
            return {
                ...state,
                todos: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;