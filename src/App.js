import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
{text: 'Verificar la MAJ de la base de datos', completed: true},
{text: 'Observar los rendimientos de la semana pasada', completed: false},
{text: 'Optimizar los archivos excel', completed: false},
{text: 'Escribir codigo para crear paginas web', completed: false},
{text: 'Terminar el curso de React', completed: false}
];

function App() {
  const[todos, setTodos] = React.useState(defaultTodos);
  const[searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const serchedTodos = todos.filter((todo) => {
     const todoText = todo.text.toLocaleLowerCase();
     const searchText = searchValue.toLocaleLowerCase();
     return todoText.includes(searchText)
    }
  );
  console.log('Los usuarios buscan todo de ' + searchValue);

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
            completed = {todo.completed} />
        ))}
        
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
