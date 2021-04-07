import React from 'react'

const Form = ({ todos, setTodos }) => {
    const [value, setValue] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        
        setTodos([
            ...todos,
            {
                content: value
            }
        ])
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange={e => {
                    setValue(e.target.value)
                }}
                />
        </form>
    )
}

export default Form