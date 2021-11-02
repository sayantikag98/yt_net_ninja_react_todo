export default function Todo({todo}){
    return (
        <div id = "todo-div">
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>   
        </div>
    );
}