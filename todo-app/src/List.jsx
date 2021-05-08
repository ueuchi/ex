import React from 'react'
import Item from './Item'
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

const List = ({todos, deleteTodo}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <div style={{listStyle: 'none'}}>
                {todos.map(todo => {
                    return(
                        <Paper className={classes.paper}>
                            <Item 
                            content={todo.content} 
                            id={todo.id}
                            key={todo.key}
                            deleteTodo={deleteTodo}
                            />
                        </Paper>
                    )
                })}
            </div>
        </Grid>
    )
}

export default List