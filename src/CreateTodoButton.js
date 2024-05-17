import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
      <button className='CreateTodoButton'
      onClick={
        (event) =>  {
          console.log('le diste cick al boton')
          console.log(event)
          console.log(event.target)
        }
      }
      
      >New task !</button>
    );
  }

  export { CreateTodoButton };