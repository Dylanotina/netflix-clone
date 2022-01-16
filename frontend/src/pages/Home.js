import React from 'react'
import FaqContainer from '../containers/faq'
import JumboContainer from '../containers/jumbotron'
import Header from '../containers/header'
import Footer from '../containers/footer'
import { Feature, OptForm } from '../components'

function Home() {
    return (
        <div>
            <Header>
               <Feature>
                   <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                   <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                   <OptForm>
                   <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break/>
                <OptForm.Input placeholder="Email adress"/>
                <OptForm.Button>Get Started</OptForm.Button>
                   </OptForm>
               </Feature>
            </Header>
            <JumboContainer/>
            <FaqContainer/>
            <Footer/>
        </div>
    )
}

export default Home
