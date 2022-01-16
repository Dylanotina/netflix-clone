import React from 'react'
import {Item, Inner, Container, Title, Subtitle, Pane, Image} from './styles/jumbotron'


export default function Jumbotron({children, direction = 'row'}) {
    return (
        <Item>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}


Jumbotron.Container = function JumbotronContainer({children}) {
    return (
        <Container>
         {children}   
        </Container>
    )
}


Jumbotron.Title = function JumbotronTitle({children}) {
    return (
        <Title>
            {children}
        </Title>
    )
}

Jumbotron.Pane = function JumbotronPane({children}){
return <Pane>{children}</Pane>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children}){
return (<Subtitle>{children}</Subtitle>)
}

Jumbotron.Image = function JumbotronImage({...restProps}){
return <Image {...restProps}/>
}