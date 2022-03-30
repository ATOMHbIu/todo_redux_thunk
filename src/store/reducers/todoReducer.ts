import {ITodoItem, TodoAction, TodoActionTypes, TodoState} from "../../types/Todo";

const initState: TodoState = {
    todos: [{
        id: 0,
        title: "find",
        name: "найти",
        description: "task for FINDING new job",
        finished: false
    },{
        id: 1,
        title: "new",
        name: "новую",
        description: "task for finding NEW job",
        finished: false
    },{
        id: 2,
        title: "job",
        name: "работу",
        description: "task for finding new JOB",
        finished: false
    }]
}

export const TodoReducer = (state= initState, action:TodoAction): TodoState=>{
    switch (action.type){
        case TodoActionTypes.UPDATE_ITEMS:
            return {todos: action.payload};
        default:
            return state;
    }
}