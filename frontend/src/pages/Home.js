import React from 'react'
import FaqContainer from '../containers/faq'
import JumboContainer from '../containers/jumbotron'
import Header from '../containers/header'
import Footer from '../containers/footer'

function Home() {
    return (
        <div>
            <Header/>
            <JumboContainer/>
            <FaqContainer/>
            <Footer/>
        </div>
    )
}

export default Home
