import React from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                // ...

            </form>
        </div>
    )
}

export default SignUp