import ListItem from "./ListItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList=()=>{

    const {todos} = useTypedSelector(state=> state.todo);
    const {updateList} = useActions();

    const updateDelete =(id: number)=>{
        const updated = todos.filter(e=>e.id!==id);
        updateList([...updated]);
    }

    return(
        <>
            <div className="todo_list">
                {todos.length>0&&
                    todos.map((e, i)=> (
                        <ListItem
                            key={e.id} {...e}
                            fireDelete={()=>updateDelete(e.id)}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default TodoList;