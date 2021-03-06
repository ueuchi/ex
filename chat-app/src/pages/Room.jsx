import React, { useState, useEffect, useContext } from 'react'
// import Login from './Login'
// import SignUp from './SignUp'
import firebase from '../config/firebase'

const Room = (db) => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        // firebase.firestore().collection('messages')
        db.collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })
    }, [])

    const user = useContext

    const handleSubmit = () => {
        db().collection('message').add({
            content: value,
            user: user.displayName
        })
    }
    
    return (
        <>
            <h1>ChatRoom</h1>
            <ul>
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form>
                <input 
                    type="text" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room