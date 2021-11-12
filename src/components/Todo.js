import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  
  const [currentState, changeState] = useState(false);

  function deleteHandler() {
    console.log(`Clicked ${props.text}!`);
    changeState(true);
  }

  function closeModalHandler(){
      changeState(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {currentState && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {currentState && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}

export default Todo;
