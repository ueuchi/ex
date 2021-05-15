import React, {useState} from 'react'
import styles from './styles/item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';

const Item = ({content, id, deleteTodo, number}) => {
    const [isDone, setIsDone] = useState(false)
    const [checked, setChecked] = useState(false);
    const [value, setValue] = React.useState(2);
    
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
            <Checkbox
                checked={checked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {/* <Rating name="read-only" number={number} readOnly /> */}
            <Rating name="read-only" value={number} readOnly />
            {/* <Container> */}
                <span primary className={styles.contentText} style={
                    {textDecoration: isDone ? 'line-through' : 'none'}
                }>{content}</span>
            {/* </Container> */}
            <Tooltip title="削除">
                <IconButton aria-label="delete">
                <DeleteIcon onClick={handleDelete}/>
                </IconButton>
            </Tooltip>
        </li>
    )
}

// const Span = styled.span`
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid palevioletred;
//     color: palevioletred;
//     margin: 0.5em 1em;
//     padding: 0.25em 1em;
    
//     ${props => props.primary && css`
//         background: palevioletred;
//         color: white;
//     `}
// `;
    
// const Container = styled.div`
//     text-align: center;
// `

export default Item