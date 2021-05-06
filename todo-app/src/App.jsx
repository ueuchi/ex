import React, {useState} from 'react'
import shortid from 'shortid'
import InputForm from "./InputForm";
import List from "./List";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const App = () => {
  const [todos, setTodos] =  useState([])
  const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    menuButton: {marginRight: theme.spacing(2)},
    title: {flexGrow: 1}
  }));
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
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Todo-list
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
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
