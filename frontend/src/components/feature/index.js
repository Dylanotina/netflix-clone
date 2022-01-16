import React from 'react'
import {Container, Title, SubTitle} from './styles/feature'


export default function Feature({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

Feature.Title = function FeatureTitle({children}){
    return <Title>{children}</Title>
}

Feature.SubTitle = ({children}) => {
    return <SubTitle>{children}</SubTitle>
}