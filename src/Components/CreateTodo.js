import {useState} from "react";
import { useHistory } from "react-router-dom";

export default function CreateTodo({setTodos}){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPending, setIsPending] = useState(false);
    let history = useHistory();

    const HandleSubmit = (event) => {
        event.preventDefault();
        setIsPending(true);
        fetch("http://localhost:5000/todos", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title,
                body
            })

            // use json.stringify(pass in the object body of the post)
        })
        .then(response => {
            if(!response.ok)
                throw new Error("Error!! Please Check...");
            else {
                console.log("Data posted to JSON server");
                setTitle("");
                setBody("");
                setIsPending(false);
                fetch("http://localhost:5000/todos")
                .then(response => response.json())
                .then(data => {
                    setTodos(data);
                    history.push("/todos",true);
                })   
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    const HandleOnChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    const HandleOnChangeBody = (event) => {
        setBody(event.target.value);
    };

    return(
        <main id = "create-new-todo-main">
            <form id = "create-new-todo-form" onSubmit = {HandleSubmit}>
                <label>
                    Title
                </label>
                <input id = "new-todo-title" required autoFocus value = {title} onChange = {HandleOnChangeTitle}/>
                <label>
                    Body
                </label>
                <textarea id = "new-todo-body" required value = {body} onChange = {HandleOnChangeBody}></textarea>
                {isPending ? <button disabled id = "new-todo-submit">Submitting ...</button>:<button id = "new-todo-submit">Submit</button>}
            </form>
        </main>
    );
}