import React from 'react'
import Item from './Item'

const List = ({todos, deleteTodo}) => {
    return (
        <ul style={{listStyle: 'none'}}>
            {todos.map(todo => {
                return(
                    <Item 
                        content={todo.content} 
                        id={todo.id}
                        key={todo.key}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default List