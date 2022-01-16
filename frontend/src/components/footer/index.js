import React from 'react'
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer';
export default function Footer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

Footer.Text = function FooterText({children}){
    return <Text>{children}</Text>
}

Footer.Row = function FooterRow({children}){
    return <Row>{children}</Row>
}

Footer.Column = function FooterColumn({children}){
    return <Column>{children}</Column>
}

Footer.Link = function FooterLink({children}){
    return <Link>{children}</Link>
}


Footer.Title = function FooterTitle({children}){
    return <Title>{children}</Title>
}

Footer.Break = function FooterBreak(){
return <Break/>
}