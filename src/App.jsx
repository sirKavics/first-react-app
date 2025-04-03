import "./App.css";
import Todo from "./Components/Todo.jsx";
import Title from "./Components/Title.jsx";
import Modal from "./Components/Modal.jsx";
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>
      {showModal ? <Modal title="Confirm Delete?"/> : null}
    </div>
  );
}

export default App;
