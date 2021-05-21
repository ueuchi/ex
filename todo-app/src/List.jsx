import React from 'react'
import Item from './Item'
import styled, { css } from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const List = ({todos, addTodo, deleteTodo, handleChecked}) => {
    const classes = useStyles();
    return (
        // <StyledList>
        <Grid item xs={12}>
            <div style={{listStyle: 'none'}}>
                {todos.map(todo => {
                    return(
                        <Paper className={classes.paper}>
                            <Item 
                            todos={todos}
                            content={todo.content} 
                            number={todo.number}
                            touch={todo.touch}
                            id={todo.id}
                            key={todo.key}
                            addTodo={addTodo}
                            deleteTodo={deleteTodo}
                            handleChecked={handleChecked}
                            />
                        </Paper>
                    )
                })}
            </div>
        </Grid>
        // </StyledList>
    )
}

export default List

// const StyledList = styled.div`
//     border: 2px solid orange;
//     color: red
// `