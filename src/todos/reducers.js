import { CREATE_TODO, REMOVE_TODO, MARK_TO_COMPLETED, LOAD_TODO_PROGRESS, LOAD_TODO_SUCCESS, LOAD_TODO_FAILURE } from "./actions";


export const isLoading =(state = false , action)=>{
    const {type} = action;

    switch(type){
        case LOAD_TODO_PROGRESS:
            return true;

        case LOAD_TODO_SUCCESS:
        case LOAD_TODO_FAILURE:
            return false;

        default:
            return state
    }

}


export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            }
            return state.concat(newTodo);
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        case MARK_TO_COMPLETED: {
            const { text } = payload;
            return state.map(todo => {
                    if(todo.text === text){
                        return { ...todo , isCompleted: true}
                    }
                    return todo
                }
            )
        }
        default:
            return state;

    }
}




// import { CREATE_TODO, REMOVE_TODO, MARK_TO_COMPLETED, LOAD_TODO_PROGRESS, LOAD_TODO_SUCCESS, LOAD_TODO_FAILURE } from "./actions";


// export const isLoading = (state = false, action) => {
//     const { type } = action;

//     switch (type) {
//         case LOAD_TODO_PROGRESS:
//             return true;

//         case LOAD_TODO_SUCCESS:
//         case LOAD_TODO_FAILURE:
//             return false;

//         default:
//             return state
//     }
// }


// export const todos = (state = [], action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case CREATE_TODO: {
//             const { text } = payload;
//             const newTodo = {
//                 text,
//                 isCompleted: false,
//             }
//             return state.concat(newTodo);
//         }
//         case REMOVE_TODO: {
//             const { text } = payload;
//             return state.filter(todo => todo.text !== text);
//         }


//         case MARK_TO_COMPLETED: {
//             const { text } = payload;
//             return state.map(todo => {
//                 if (todo.text === text) {
//                     return { ...todo, isCompleted: true }
//                 }
//                 return todo
//             }
//             )
//         }


//         case LOAD_TODO_SUCCESS: {
//             const { todos } = payload;
//             return todos
//         }

//         case LOAD_TODO_PROGRESS:
//         case LOAD_TODO_FAILURE:
//             return false
            
//         default:
//             return state;

//     }
// }