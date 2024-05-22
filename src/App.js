import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

/* const defaultTodos = [
{text: 'Verificar la MAJ de la base de datos', completed: true},
{text: 'Observar los rendimientos de la semana pasada', completed: false},
{text: 'Optimizar los archivos excel', completed: false},
{text: 'Escribir codigo para crear paginas web', completed: false},
{text: 'Terminar el curso de React', completed: false}
];


localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1') */

function App() {

  const localStorageTodos =  localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
 
  const[todos, setTodos] = React.useState(parsedTodos);
  const[searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const serchedTodos = todos.filter((todo) => {
     const todoText = todo.text.toLocaleLowerCase();
     const searchText = searchValue.toLocaleLowerCase();
     return todoText.includes(searchText);
    }
  );

  const saveTodos = (newTodos) => {

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return (
    
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {serchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed = {todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
