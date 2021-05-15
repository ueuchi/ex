import React, {useState} from 'react'
// import { useAlert } from 'react-alert'
import { makeStyles } from '@material-ui/core/styles';
//削除アイコン表示
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
//ダイアログ表示
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function DeleteDialog({addTodo}) {
    const [value, setValue] = useState('')
    // const alert = useAlert()
    
    //デリートボタンを位置指定
    const useStyles = makeStyles((theme) => ({
        fab: {
            margin: theme.spacing(2),
        },
        absoluteLeft: {
            position: 'absolute',
            bottom: theme.spacing(2),
            left: theme.spacing(3),
        },
    }));
    const classes = useStyles();

    //ダイアログ表示。非表示
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //はいを押した時の挙動
    const erase = e => {
        e.preventDefault()
        if (value === ""){//タスクが空の場合
            // alert.error('タスクの中身が空です')//エラーメッセージを出力
            return false//追加ボタン本来の動作をキャンセル
        }else{
            addTodo(value);    //追加ボタン本来の動作を実行
            document.task.reset() //タスクの中身をリセット
            setValue("") //再レンダー
            setOpen(false);
        }
    }

    return (
        <form onSubmit={erase}>
            {/* デリートアイコン */}
            <Tooltip title="全削除" color="primary" onClick={handleClickOpen}>
                <IconButton aria-label="delete" className={classes.absoluteLeft}>
                <DeleteIcon />
                </IconButton>
            </Tooltip>
            {/* ダイアログ中身 */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"全項目の削除"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    チェックが入った全ての項目を削除します。
                    よろしいですか？
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    いいえ
                </Button>
                <Button onClick={handleClose} color="primary">
                    はい
                </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
    }