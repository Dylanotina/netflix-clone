import React, {useState} from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Background,ButtonLink,Container, Feature, FeatureCallOut, Logo, Text, Link, Group, Profile, Picture, Dropdown, Search, SearchIcon, SearchInput, PlayButton} from './styles/header'


export default function Header({bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Feature = ({children, ...restProps}) => {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = ({children, ...restProps}) => {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Frame = ({children}) => {
   return  <Container>{children}</Container>
}

Header.Group = ({children, ...restProps}) => {
    return  <Group {...restProps}>{children}</Group>
 }

Header.Text = ({children}) => {
    return  <Text>{children}</Text>
}

Header.Profile = ({children}) => {
    return  <Profile>{children}</Profile>
}

Header.Dropdown = ({children}) => {
    return  <Dropdown>{children}</Dropdown>
}

Header.Picture = ({src, ...restProps}) => {
    return  <Picture src={`/images/users/${src}.png`} {...restProps}  />
}

Header.TextLink = ({children, ...restProps}) => {
    return  <Link {...restProps}>{children}</Link>
}


Header.Search = function HeaderSearch({searchTerm, setSearchTerm ,...restProps}) {

    const [searchActive, setSearchActive] = useState(false)

    return ( <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)} >
            <img src="/images/icons/search.png" alt="Search"/>
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({target}) => setSearchTerm(target.value)} placeholder='Search films and series' active={searchActive}/>  
    </Search>)
}


Header.Logo = ({to, ...restProps}) => {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}
Header.PlayButton = ({children, ...restProps}) =>  {
    return <PlayButton>{children}</PlayButton> 
}

Header.ButtonLink = ({children, ...restProps}) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}
