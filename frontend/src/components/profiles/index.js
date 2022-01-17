import React from 'react'
import {Container, Title, List, Item, Picture, Name} from './styles/profiles'

export default function Profiles({children}) {
    return (
        <Container >
            {children}
        </Container>
    )
}

Profiles.Title = ({children}) => {
    return <Title>{children}</Title>
}
Profiles.List = ({children}) => {
    return <List>{children}</List>
}
Profiles.User = ({children, ...restProps}) => {
    return <Item {...restProps}>{children}</Item>
}
Profiles.Picture = ({src, ...restProps}) => {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}></Picture>
}
Profiles.Name = ({children}) => {
    return <Name>{children}</Name>
}