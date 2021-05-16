import React, {useState} from 'react'
import shortid from 'shortid'
import InputForm from "./InputForm";
import FormDialog from './FormDialog';
import DeleteDialog from './styles/DeleteDialog';
import List from "./List";
import Title from "./Title";

const App = () => {
  const [todos, setTodos] =  useState([])
  const [isDone, setIsDone] = useState(false)
  const [checked, setChecked] = useState(false);

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

  // チェック入れる、打ち消し線入れる
  const handleChecked = (event) => {
    setIsDone(!isDone)
    setChecked(event.target.checked);
};

  //全選択ボタン
  const onChecked = (tf) => {
    const ElementsCount = document.getElementsByTagName("li").length; // チェックボックスの数
    for( let i = 0 ; i<ElementsCount ; i++ ) {
       document.getElementsByTagName("li").elements[i].checked = tf; // ON・OFFを切り替え
    }

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
        handleChecked={handleChecked}
      />
      <FormDialog
          addTodo={addTodo}
      />
      <DeleteDialog />
    </div>
  );
}

export default App;