import './TodoItem.css'
import { TiTick } from "react-icons/ti";
import { TiTrash } from "react-icons/ti";

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <TiTick  className={`Icon Icon-check ${props.completed 
        && "Icon-check--active" }`}
        onClick={props.onComplete}
      >
        V
      </TiTick >
      <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete" }`}>
        {props.text}
      </p>
      <TiTrash className='Icon Icon-delete' onClick={props.onDelete}>
        X
      </TiTrash>
    </li>
  );
}
  export { TodoItem };