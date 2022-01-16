import React, {useState, useContext, createContext} from 'react'
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordeon';

const ToggleContext = createContext();

export default function Accordeon({children}) {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordeon.Title = function AccordeonTitle({children}){
    return <Title>{children}</Title>
}


Accordeon.Item = function AccordeonItem({children}){
    const [toggleShow, setToggleShow] = useState(false)
    
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
    <Item>{children}</Item>
    </ToggleContext.Provider>)
}

Accordeon.Frame = function AccordeonFrame({children}){
    return <Frame>{children}</Frame>
}

Accordeon.Header = function AccordeonHeader({children}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    
    return( <Header onClick={ () => setToggleShow(!toggleShow)}>{children}
    {toggleShow ? (<img src="/images/icons/close-slim.png" alt="Close"/>) : ( <img src="/images/icons/add.png" alt="Open" />)}
    </Header>)
}

Accordeon.Body = function AccordeonBody({children}){
    const {toggleShow} = useContext(ToggleContext)

    return <Body className={toggleShow ? 'open' : 'closed'}><span>{children}</span></Body>
}