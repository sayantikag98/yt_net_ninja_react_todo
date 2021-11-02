import { Link } from "react-router-dom";



export default function Header(){
    return (
        <header id = "header">
            <h1 id = "main-title">To do list</h1>
            <div id = "main-links-div">
                <Link to = "/todos">Home</Link>
                <Link to = "/todos/create">New Todo</Link>
            </div>
        </header>
    );
}