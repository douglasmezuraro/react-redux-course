import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import First from './components/basics/First'
import WithArgument from './components/basics/WithArgument'

ReactDOM.render(
    <div>
        <WithArgument a='Primeiro' b='Segundo'>

        </WithArgument>
    </div>,
    document.getElementById('root')
)