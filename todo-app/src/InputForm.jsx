import React, {useState} from 'react'
import { useAlert } from 'react-alert'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const InputForm = ({addTodo, onChecked}) => {
    const [value, setValue] = useState('')
    const [checked, setChecked] = useState(false);
    const alert = useAlert()

    //追加ボタンを押した時の挙動
    const add = e => {
        e.preventDefault()
        if (value === ""){//タスクが空の場合
            alert.error('タスクの中身が空です')//エラーメッセージを出力
            return false//追加ボタン本来の動作をキャンセル
        }else{
            addTodo(value);    //追加ボタン本来の動作を実行
            document.task.reset() //タスクの中身をリセット
            setValue("") //再レンダー
        }
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);
        onChecked(event.target.checked)
    };

    return(
        <form name="task" onSubmit={add} >
            <Checkbox
                checked={checked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />{"全選択ボタン\n"}
            <label>タスク</label>
            <input
                type="text"
                onChange={e => {
                    setValue(e.target.value)}}
            />
        <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={add}
        >追加
        </Button>
            
        </form>
    )
}

export default InputForm;

