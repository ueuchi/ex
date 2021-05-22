// import React, {useState, useEffect} from 'react'
import React, {useState} from 'react'
// import firebase from './config/firebase'
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

  // 追加処理
  const addTodo = (content, number) => {
    setTodos([
        ...todos,
        {
          content,
          number,
          checked: false,
          isDone: false,
          id: shortid.generate()
        }
    ])
  }

  // 削除処理
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // チェック入れる、打ち消し線入れる
//   const handleChecked = (event, index) => {
//     const newTodos = [...todos];
//     newTodos[index].isDone = true;
//     setChecked(event.target.checked);
//     console.log(todos)
// };
  const handleChecked = (event) => {
    setIsDone(!isDone)
    setChecked(event.target.checked);
    console.log(todos[0].isDone)
};

// const onChangeCheck = (index) => {
//     const newTodos = [...todos];
//     if (newTodos[index].isDone === false) {
//       newTodos[index].isDone = true;
//     } else {
//       newTodos[index].isDone = false;
//     }
//     setTodos(newTodos);
//   };

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
        checked={checked}
        isDone={isDone}
        addTodo={addTodo}
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