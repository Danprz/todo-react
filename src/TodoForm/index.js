import React from 'react';
import './TodoForm.css'

function TodoForm() {
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>New Task</label>
            <textarea
                placeholder='Que quieres hacer hoy ?'
            />
            <div className="TodoForm-ButtonContainer">
                <button type=""
                className='TodoForm-button TodoForm--button--cancel'
                >Exit</button>
                <button type="submit"
                className='TodoForm-button TodoForm--button--add'
                >Add</button>
            </div>
        </form>
    )
}

export {TodoForm};