import { loadingProgress, loadingSuccess, loadingFailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadingProgress())
        const response = await fetch("http://localhost:8000/todos")
        console.log(response)
        const data = response.json();
        console.log(data)
        dispatch(loadingSuccess(data))
    }
    catch(err){
        dispatch(loadingFailure())
        dispatch(displayAlert(err))
    }
}

export const displayAlert = (text) => () => {
    alert(text);
}