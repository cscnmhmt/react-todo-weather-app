import React, { useState } from 'react';

const AddTodoItem = function ({ handleAddTodos }) {
  const [title, setTitle] = useState('');
  const [warningMsg, setWarningMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (title === '') {
      setWarningMsg('can not be empty');
      return;
    }
    setTitle('');
    handleAddTodos(title);
  }

  function handleOnChange(e) {
    const { value } = e.target;
    setTitle(value);
    setWarningMsg('');
  }

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 text-stone-900"
          name="title"
          onChange={handleOnChange}
          value={title}
        />
        <span>{warningMsg}</span>
        <button type="submit" className="border-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodoItem;
