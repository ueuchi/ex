import React from 'react'
import Form from './Form'
import List from './List'

const App = () => {
    const [todos, setTodos] = React.useState([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        },
    ])
    return (
        <>
            <h1>Todo App</h1>
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos}/>
        </>
    )
}

export default App