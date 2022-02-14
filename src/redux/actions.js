import * as types from './actionTypes';

export const addTodo = (obj) => {
    return {
        type: types.ADD_TODO,
        payload: obj,
    }
}

export const updateTodo = (obj) => {
    return {
        type: types.UPDATE_TODO,
        payload: obj,
    }
}

export const deleteTodo = (id) => {
    return {
        type: types.DELETE_TODO,
        payload: id,
    }
}

export const listTodo = (list) => {
    return {
        type: types.LIST_TODO,
        payload: list
    }
}