import React, {useState} from 'react'
import shortid from 'shortid'
import InputForm from "./InputForm";
import List from "./List";

const App = () => {
  const [todos, setTodos] =  useState([
    // {content: '洗濯する'},
    // {content: '運動する'},
    // {content: '勉強する'}
  ])

  // 追加ボタン
  const addTodo = content => {
    setTodos([
        ...todos,
        {
            content: content,
            id: shortid.generate()
        }
    ])
  }

  // 削除ボタン
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo-app</h1>
      <InputForm
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
      />
      <List 
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
