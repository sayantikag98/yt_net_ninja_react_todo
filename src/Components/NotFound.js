import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div id = "not-found-div">
            <h4>No such page exists!! 😟</h4>
            <Link style= {{fontSize:"10px"}} to = "/todos">Back to Home Page</Link>
        </div>
    )
}

export default NotFound
