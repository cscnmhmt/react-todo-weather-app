import React, { useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi2';

const AddTodoItem = function ({ handleAddTodos }) {
  const [title, setTitle] = useState('');
  const [warningMsg, setWarningMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (title === '') {
      setWarningMsg('can not be empty. please type duty');
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
    <div className="mt-3 w-full">
      <form
        className="flex items-center justify-between overflow-hidden rounded-lg border border-gray-600"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 text-black focus:outline-0 "
            name="title"
            onChange={handleOnChange}
            value={title}
          />
        </div>
        <button
          type="submit"
          className=" flex items-center justify-center gap-2 bg-sky-700 p-[5px] text-3xl"
        >
          <HiPlusCircle />
        </button>
      </form>
      {warningMsg ? (
        <span className="ml-2 text-sm italic text-red-500">{warningMsg}</span>
      ) : (
        ''
      )}
    </div>
  );
};

export default AddTodoItem;
