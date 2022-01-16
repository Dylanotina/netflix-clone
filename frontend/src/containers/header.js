import React from 'react'
import {Header} from '../components'
import logo from '../logo.svg'

function header({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to='/' src={logo} alt='Netflix' />
                <Header.ButtonLink to='/signin'>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default header
