import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../Custom_Hooks/useFetch";
import Todo from "./Todo";

const DisplayTodo = ({setTodos}) => {
    const {id} = useParams();
    const url = `http://localhost:5000/todos/${id}`;
    const {data : todo, error, isPending} = useFetch(url);
    let history = useHistory();

    const HandleDelete = () => {
        fetch(url, {
            method: "DELETE"
        })
        .then(response => {
            console.log("todo deleted");
            fetch("http://localhost:5000/todos")
            .then(response => response.json())
            .then(data => {
                setTodos(data);
                history.push("/todos"); 
            })           
        })
        .catch(err => {
            console.log(err.message);
        });
    }
    return (
        <div>
            {isPending && <div className = "loading-div">Loading ...</div>}
            {todo ? <Todo todo = {todo}/> : <div className = "error-div">{error}</div>}
            <button id = "delete-todo" onClick = {HandleDelete}>Delete todo</button>
        </div>
    );
};

export default DisplayTodo;
