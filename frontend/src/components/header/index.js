import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Background,ButtonLink,Container, Logo} from './styles/header'


export default function Header({bg = true, children}) {
    return bg ? <Background>{children}</Background> : children
}

Header.Frame = ({children}) => {
   return  <Container>{children}</Container>
}

Header.Logo = ({to, ...restProps}) => {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
} 

Header.ButtonLink = ({children, ...restProps}) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}
