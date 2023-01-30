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
    <div className="App h-screen bg-gray-900 p-4 text-white">
      <Header />
      <div className="mx-auto mt-[3rem] flex w-[330px] flex-col ">
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
