import React from 'react'
import {Container,Input,Break,Button,Text} from './styles/optIn'


export default function OptIn({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

OptIn.Input = function OptInInput({...restProps}){
    return <Input {...restProps}/>
}

OptIn.Break = function OptInBreak(){
    return <Break/>
}

OptIn.Button = function OptInButton({children}){
    return <Button>{children}<img src='/images/icons/chevron-right.png' alt='Try Now' /></Button> 
}

OptIn.Text = function OptInText({children}){
    return <Text>{children}</Text>
}