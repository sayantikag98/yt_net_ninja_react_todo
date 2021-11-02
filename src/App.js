import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import CreateTodo from "./Components/CreateTodo";
import Footer from "./Components/Footer";
import {useFetch} from "./Custom_Hooks/useFetch";
import DisplayTodo from "./Components/DisplayTodo";
import NotFound from "./Components/NotFound";
import Homepage from "./Components/Homepage";
import {useEffect, useState} from "react";

export default function App() {

  const {data, error, isPending} = useFetch("http://localhost:5000/todos");
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  return (
    <div id = "root-div">
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/" component = {Homepage}/>
          <Route exact path = "/todos">
            {isPending && <div className = "loading-div">Loading ...</div>}
            {todos ? <TodoList todos = {todos}/> : <div className = "error-div">{error}</div>}  
          </Route>
          <Route exact path = "/todos/create">
            <CreateTodo setTodos = {setTodos}/>
          </Route>
          <Route exact path = "/todos/:id">
            <DisplayTodo setTodos = {setTodos}/>
          </Route>
          <Route path = "*" component = {NotFound}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
