import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./components/Todo/TodoList";
import AddTask from "./components/Add/AddTask";



function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
