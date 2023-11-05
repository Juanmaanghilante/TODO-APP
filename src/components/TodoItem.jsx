
import DeleteIcon from "./DeleteIcon";
import CompleteIcon from "./CompleteIcon";
function TodoItem(props) {
  return (
    <li className="listli">
    
    <CompleteIcon
     completed= {props.completed} 
     onComplete={props.onComplete}
    />
    
      <p className={`task ${props.completed && "tasks"}`}>{props.text}</p>
<DeleteIcon
onDelete={props.onDelete}
/>
      {/* <span   onClick={props.onDelete}     className="tareaterminada2">
        {" "}
        <i className="fa-regular fa-trash-can"></i>
      </span> */}
    </li>
  );
}
export default TodoItem;

// task
