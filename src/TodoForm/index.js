import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
        
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={ onSubmit }>
            <label>New Task</label>
            <textarea
                placeholder='Hi, what do you want to do today?'
                onChange={onChange}
            />
            <div className="TodoForm-ButtonContainer">
                <button type="button"
                className='TodoForm-button TodoForm--button--cancel'
                onClick={onCancel}
                >Exit</button>
                <button type="submit"
                className='TodoForm-button TodoForm--button--add'
                >Add</button>
            </div>
        </form>
    )
}

export {TodoForm};