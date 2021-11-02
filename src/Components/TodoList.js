import Todo from "./Todo";
import { Link } from "react-router-dom";

export default function TodoList({todos}){
    return (
        <main>
            {!todos.length && <div style = {{padding: "10px"}}>No todo to display</div>}
            {todos.map(todo => <Link style = {{textDecoration: "none", color: "black"}}key = {todo.id} to = {`/todos/${todo.id}`}><Todo  todo= {todo}/></Link>)}   
        </main>
    );
}