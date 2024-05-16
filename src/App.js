import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCoutner';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; 
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {<CreateTodoButton />}
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p> Llorar y lloraaar</p>
      <span>X</span>
    </li>
  );
}

export default App;
