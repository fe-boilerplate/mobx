// require('./styles/main.scss')
import React from 'react'
import { render } from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import App from './App'
import AppState from './stores/AppState'
import routes from './routes'
const appState = new AppState()

render(
  <App routes={routes} store={appState} />,
  document.getElementById('root')
)
