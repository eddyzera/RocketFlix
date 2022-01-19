import React from 'react'
import ReactDOM from 'react-dom'
import './style/css/style.css'
import App from './App'
import { ProviderStorage } from './provider/store'

ReactDOM.render(
  <ProviderStorage>
    <App />
  </ProviderStorage>,
  document.getElementById('root')
)
