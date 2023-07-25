
export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (text) =>({
    type:CREATE_TODO,
    payload: {text},
})


export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) =>({
    type:REMOVE_TODO,
    payload:{text},
})

export const MARK_TO_COMPLETED = "MARK_TO_COMPLETED";
export const markAsRead = (text) =>({
    type:MARK_TO_COMPLETED,
    payload: {text},
})