import React, {useState} from 'react'
import { useAlert } from 'react-alert'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const InputForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const alert = useAlert()
    const useStyles = makeStyles((theme) => ({
        fab: {
          margin: theme.spacing(2),
        },
        absolute: {
          position: 'absolute',
          bottom: theme.spacing(2),
          right: theme.spacing(3),
        },
    }));
    const classes = useStyles();


    const add = e => {
        e.preventDefault()
        if (value === ""){//タスクが空の場合
            alert.error('タスクの中身が空です')//エラーメッセージを出力
            return false//追加ボタン本来の動作をキャンセル
        }else{
            addTodo(value);    //追加ボタン本来の動作を実行
            document.task.reset() //タスクの中身をリセット
            setValue("")
        }
    }

    return(
        <form name="task" onSubmit={add} >
            <label>タスク</label>
            <input 
                type="text"
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
            <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={add}
            >追加
            </Button>
            <Tooltip title="Add" aria-label="add">
                <Fab color="secondary" className={classes.absolute}>
                <AddIcon />
                </Fab>
            </Tooltip>
        </form>
    )
}

export default InputForm;