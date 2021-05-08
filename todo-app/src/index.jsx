import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
 
const options = {
  timeout: 3000,
  transition: transitions.SCALE,
  position: positions.BOTTOM_CENTER
}
 
const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)
 
render(<Root />, document.getElementById('root'))