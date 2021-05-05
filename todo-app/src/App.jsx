import React, {useState} from 'react'
import shortid from 'shortid'
import InputForm from "./InputForm";
import List from "./List";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const [todos, setTodos] =  useState([])
  const classes = useStyles();

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
      <Grid item xs={12}>
        <Paper className={classes.paper}>Todo-app</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <InputForm
            todos={todos}
            setTodos={setTodos}
            addTodo={addTodo}
          />
        <List 
          todos={todos}
          deleteTodo={deleteTodo}
        />
        </Paper>
      </Grid>
    </div>
    // <div className="App">
    //     <h1>Todo-app</h1>
    //       <InputForm
    //         todos={todos}
    //         setTodos={setTodos}
    //         addTodo={addTodo}
    //       />
    //     <List 
    //       todos={todos}
    //       deleteTodo={deleteTodo}
    //     />
    // </div>
  );
}

export default App;
