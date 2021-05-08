import React, {useState} from 'react'
// import { useAlert } from 'react-alert'
import { makeStyles } from '@material-ui/core/styles';
//追加アイコン表示
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//ダイアログ表示
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//評価用
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function FormDialog({addTodo}) {
    const [value, setValue] = useState('')
    const [late, setLate] = useState(2);
    // const alert = useAlert()
    
    //プラスボタンを位置指定
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

    //ダイアログ表示。非表示
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //追加を押した時の挙動
    const add = e => {
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
        <form onSubmit={add}>
            {/* プラスアイコン */}
            <Tooltip title="追加" aria-label="追加" onClick={handleClickOpen}>
                <Fab color="primary" className={classes.absolute}>
                    <AddIcon /> 
                </Fab>
            </Tooltip>
            {/* ダイアログ中身 */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">タスク追加</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        タスクの内容を記述してください
                    </DialogContentText>
                    {/* 追加する内容 */}
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Typography component="legend">重要度</Typography>
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
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="内容"
                        type="text"
                        fullWidth
                        onChange={e => {
                            setValue(e.target.value)
                        }}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={add} color="primary">
                        追加
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
    }