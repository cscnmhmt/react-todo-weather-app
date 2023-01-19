import React from 'react';

const Info = function ({ todos, handleDeleteAll, handleCompleteAll }) {
  // finding compelted todo length with filter
  const completedTodosLength = todos.filter((todo) => todo.isCompleted).length;
  const todosLength = todos.length;

  return (
    <div>
      <h2>cscn's todo app</h2>
      <div>
        {todosLength} {todosLength <= 1 ? 'duty' : 'duties'}
      </div>
      {/* if todo length is equal to completed todo show this */}
      {completedTodosLength === todosLength && todosLength > 0 && (
        <span>All duties completed</span>
      )}
      {/* if todo length is bigger than completed todos show this */}
      {todosLength > completedTodosLength && (
        <span>
          {completedTodosLength} completed in {todosLength}
        </span>
      )}
      {todosLength > 0 && (
        <div>
          <button onClick={handleCompleteAll}>complete all</button>
          <button onClick={handleDeleteAll}>delete all</button>
        </div>
      )}
    </div>
  );
};

export default Info;
