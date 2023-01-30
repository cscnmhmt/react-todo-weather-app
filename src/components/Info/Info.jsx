import React from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import { HiTrash } from 'react-icons/hi2';

const Info = function ({ todos, handleDeleteAll, handleCompleteAll }) {
  // finding compelted todo length with filter
  const completedTodosLength = todos.filter((todo) => todo.isCompleted).length;
  const todosLength = todos.length;

  return (
    <div>
      <h2 className="mb-10 text-center text-4xl font-bold">cscn's todo app</h2>
      <div className="flex items-center justify-between">
        <p className="rounded-lg border border-green-700  bg-green-200 px-4 py-1 font-bold text-green-900">
          {todosLength} {todosLength <= 1 ? 'duty' : 'duties'}
        </p>
        {/* if todo length is equal to completed todo show this */}
        {completedTodosLength === todosLength && todosLength > 0 && (
          <p className="rounded-lg border border-green-700  bg-green-200 px-4 py-1 font-bold text-green-900">
            All duties completed
          </p>
        )}
        {/* if todo length is bigger than completed todos show this */}
        {todosLength > completedTodosLength && (
          <p className="rounded-lg border  border-green-700 bg-green-200 px-4 py-1 font-bold text-green-900">
            {completedTodosLength} completed in {todosLength}
          </p>
        )}
      </div>

      {todosLength > 0 && (
        <div className="mt-5 flex items-center justify-between">
          <button
            className="bg flex h-[40px] items-center justify-center gap-1 rounded-lg bg-orange-400 px-3"
            onClick={handleCompleteAll}
          >
            <HiOutlineCheckCircle />
            Complete all
          </button>
          <button
            className="flex h-[40px] items-center justify-center gap-1 rounded-lg  bg-red-500 px-3"
            onClick={handleDeleteAll}
          >
            Delete all
            <HiTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default Info;
