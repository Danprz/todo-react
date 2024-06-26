import './CreateTodoButton.css';
import { HiPencilAlt } from "react-icons/hi";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    ><HiPencilAlt className='icon' /></button>
  );
}
export { CreateTodoButton };