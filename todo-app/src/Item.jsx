import React, {useState} from 'react'
import styles from './styles/item.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
//ダイアログ表示
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Item = ({content, id, deleteTodo, number, touch, addTodo, todos}) => {
    const [isDone, setIsDone] = useState(false)
    const [checked, setChecked] = useState(false);
    
    //チェック入れる、打ち消し線入れる
    const handleChecked = (event) => {
        setIsDone(!isDone)
        setChecked(event.target.checked);
        console.log(todos)
        // console.log(event.target.checked)
    };

    //ダイアログ表示。非表示
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleDelete = () => {
        if(checked === true) {
            deleteTodo(id)
        } else {
            handleClickOpen()
        }
    }
    
    const erase = e => {
        e.preventDefault()
        deleteTodo(id)
        setOpen(false);
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
        <li style={
            {textDecoration: isDone ? 'line-through' : 'none'}
        }>
            <Checkbox
                checked={checked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            優先度：
            <Rating name="read-only" value={number} readOnly />
            <span primary className={styles.contentText} style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>タスク：{content}</span>
            <Tooltip title="削除">
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={handleDelete}/>
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"全項目の削除"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    チェックが入っていません。タスクを削除してもよろしいですか？
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    いいえ
                </Button>
                <Button onClick={erase} color="primary">
                    はい
                </Button>
                </DialogActions>
            </Dialog>
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

//トグルチェックド