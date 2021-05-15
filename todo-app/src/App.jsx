import React, {useState} from 'react'
import shortid from 'shortid'
import InputForm from "./InputForm";
import FormDialog from './FormDialog';
import DeleteDialog from './styles/DeleteDialog';
import List from "./List";
import Title from "./Title";

const App = () => {
  const [todos, setTodos] =  useState([])

  // 追加ボタン
  const addTodo = (content, number) => {
    setTodos([
        ...todos,
        {
          content,
          number,
          id: shortid.generate()
        }
    ])
  }

  // 削除ボタン
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //全選択ボタン
  const onChecked = (check) => {

  }

  return (
    <div className="App">
      <Title />
      <InputForm
        // todos={todos}
        // setTodos={setTodos}
        addTodo={addTodo}
        onChecked={onChecked}
      />
      <List 
        todos={todos}
        deleteTodo={deleteTodo}
      />
      <FormDialog
          addTodo={addTodo}
      />
      <DeleteDialog />
    </div>
  );
}

export default App;