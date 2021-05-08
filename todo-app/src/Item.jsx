import React, {useState} from 'react'
import styles from './styles/item.module.css'
import styled, { css } from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';

const Item = ({content, id, deleteTodo, late, setLate}) => {
    const [isDone, setIsDone] = useState(false)
    const [checked, setChecked] = useState(false);
    // const [value, setValue] = useState(2);
    const Span = styled.span`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0.5em 1em;
        padding: 0.25em 1em;

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
    `;

    const Container = styled.div`
        text-align: center;
    `
    
    //チェック入れる、打ち消し線入れる
    const handleChecked = (event) => {
        setIsDone(!isDone)
        setChecked(event.target.checked);
    };

    const handleDelete = () => {
        deleteTodo(id)
    }

    // const useStyles = makeStyles((theme) => ({
    //     fab: {
    //       margin: theme.spacing(2),
    //     },
    //     absolute: {
    //       position: 'absolute',
    //       bottom: theme.spacing(2),
    //       right: theme.spacing(3),
    //     },
    //   }));
    
    return (
        <li>
            {/* <Button>aiueo</Button> */}
            <Checkbox
                checked={checked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
             <Rating
                name="simple-controlled"
                late={late}
                onChange={(event, newLate) => {
                    setLate(newLate);
                }}
                // onChange={ e => {
                //     setLate(e.target.late);
                // }}
            />
            <Container>
                <Span primary className={styles.contentText} style={
                    {textDecoration: isDone ? 'line-through' : 'none'}
                }>{content}</Span>
            </Container>
            <Tooltip title="削除">
                <IconButton aria-label="delete">
                <DeleteIcon onClick={handleDelete}/>
                </IconButton>
            </Tooltip>
            {/* <Button
                size="small"
                variant="contained" 
                color="secondary" 
                onClick={handleDelete}
            >削除
            </Button> */}
        </li>
    )
}

export default Item