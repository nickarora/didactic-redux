import React from 'react'
import { render } from 'react-dom'

import App from './components/app.jsx'

const div = document.createElement('div')

document.body.appendChild(div)

render(<App />, div)
