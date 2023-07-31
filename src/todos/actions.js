
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

export const LOAD_TODO_PROGRESS = "LOAD_TODO_PROGRESS";
export const loadingProgress = () =>({
    type:LOAD_TODO_PROGRESS,
})

export const LOAD_TODO_SUCCESS = "LOAD_TODO_SUCCESS";
export const loadingSuccess = todos =>({
    type:LOAD_TODO_SUCCESS,
    payload : {todos},
});

export const LOAD_TODO_FAILURE = "LOAD_TODO_FAILURE";
export const loadingFailure = () => ({
    type : LOAD_TODO_FAILURE,
})