import React, { useState } from 'react';
import AddTodoItem from './components/TodoApp/AddTodoItem';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import TodoItems from './components/TodoApp/TodoItems';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(todoTitle) {
    setTodos([
      ...todos,
      {
        id: Number(new Date().getTime()),
        title: todoTitle,
        isCompleted: false,
      },
    ]);
  }

  function toggleCompleted(todoId) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function deleteTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function deleteAllTodos() {
    setTodos([]);
  }

  function completeAllTodos() {
    const newTodos = todos.map((todo) => {
      return {
        ...todo,
        isCompleted: true,
      };
    });
    setTodos(newTodos);
  }

  return (
    <div className="App p-4 text-white">
      <Header />
      <div className="mx-auto mt-[1rem] flex  w-full flex-col bg-gray-800 p-2 rounded-lg md:w-[330px] md:mt-[3rem] md:bg-transparent md:p-0">
        <Info
          todos={todos}
          handleDeleteAll={deleteAllTodos}
          handleCompleteAll={completeAllTodos}
        />
        <AddTodoItem handleAddTodos={addTodos} />
        <TodoItems
          todos={todos}
          handleCheckbox={toggleCompleted}
          handleDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
