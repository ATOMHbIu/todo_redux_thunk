export enum TodoActionTypes{
    UPDATE_ITEMS="UPDATE_ITEMS"
}

export interface ITodoItem{
    id: number;
    title: string;
    name: string;
    description?: string;
    finished: boolean;
}

export interface TodoState{
    todos: ITodoItem[];
}

interface UpdateItems{
    type: TodoActionTypes.UPDATE_ITEMS;
    payload: ITodoItem[];
}


export type TodoAction = UpdateItems;

