import Todo from "./Todo";
const TodoList = ({todoList, setTodoList})=>{
    return(
        <div>
            {todoList.map((item)=>(
                <Todo 
                setTodoList={setTodoList} 
                key={item.id} 
                item={item} 
                todoList={todoList}
                ></Todo>
            ))}
        </div>
    )
}
export default TodoList;