import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >New Task !</button>
  );
}
export { CreateTodoButton };