import React, {useState} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const Item = ({content, id, deleteTodo}) => {
    const [isDone, setIsDone] = useState(false)
    const [checked, setChecked] = useState(false);

    const handleDelete = () => {
        deleteTodo(id)
    }

    const handleLine = () => {
        setIsDone(!isDone)
    }
    
    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };
    
    
    return (
        <li>
            <Checkbox
                checked={checked}
                onChange={
                    handleLine,
                    handleChecked
                }
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>{content}</span>
            <Button
                size="small"
                variant="contained" 
                color="secondary" 
                onClick={handleDelete}
            >削除
            </Button>
        </li>
    )
}

export default Item