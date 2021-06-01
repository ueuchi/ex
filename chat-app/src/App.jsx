import React, { useState } from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import AuthProvider from './AuthService'
import LoggedInRoute from './LoggedInRoute'
//emoji
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {
    const [isOpne, setIsOpen] = useState(false)
    const handleOpen = () => {
        
    }

    return (
        <AuthProvider>
            {/* emoji */}
            {/* <Picker set='apple' /> */}
            <button onClick={handleOpen()}>emoji</button>
            <Router>
                {/* <ul>
                    <li><Link to='/'></Link>Room</li>
                    <li><Link to='/login'></Link>Login</li>
                    <li><Link to='/signup'></Link>Signup</li>
                </ul> */}
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App