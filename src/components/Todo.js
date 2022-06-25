import styles from '../style.module.css';

const Todo = ({item, todoList, setTodoList}) => {
    const deleteTodo=()=>{
        setTodoList(todoList.filter((todoItem) => todoItem.id !== item.id));
    }
    return(
        <div className={styles.todoitem}>
            <h3 className={styles.todoname}>{item.name}</h3>
            <button onClick={deleteTodo} className={styles.deletebutton}>Done</button>
        </div>
    )
}
export default Todo;