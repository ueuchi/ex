import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'

const Login = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)

    if(user) {
        return<Redirect to="/" />
    }

    return (
        <>
            <h1>Login</h1>        
            <form>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password'
                        placeholder='password' 
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login