import Todo from "../Components/Todo.jsx";
import Title from "../Components/Title.jsx";
import Modal from "../Components/Modal.jsx";
import Counter from "../Components/Counter.jsx";
import React, { useState, useEffect } from "react";

function CrashCourse() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log('ONLY on mount')
  }, [])

  useEffect(() => {
    console.log(`on mount AND on ${showModal} change`)
    // setShowModal(!showModal)
  }, [showModal])

  useEffect(() => {
    console.log('EVERY render')
    // setShowModal(!showModal)
  })
  
  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
      </div>
      <div>
        <Counter />
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="Confirm Delete?"
        />
      )}
    </div>
  );
}

export default CrashCourse;