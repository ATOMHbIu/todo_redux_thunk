import {Dispatch} from "react";
import {ITodoItem, TodoAction, TodoActionTypes} from "../../types/Todo";

export const updateList =(data: ITodoItem[])=>{
    return (dispatch: Dispatch<TodoAction>)=>{
        dispatch({type: TodoActionTypes.UPDATE_ITEMS, payload: data})
    }
}