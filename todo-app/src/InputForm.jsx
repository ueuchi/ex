import React, {useState} from 'react'
import { useAlert } from 'react-alert'
import FormDialog from './FormDialog';
import Button from '@material-ui/core/Button';

const InputForm = ({addTodo}) => {
    const [value, setValue] = useState('')
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

    return(
        <form name="task" onSubmit={add} >
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
            <FormDialog
                // setTodos={setTodos}
                addTodo={addTodo}
            />
        </form>
    )
}

export default InputForm;

const Button  = Button`
    color:
`