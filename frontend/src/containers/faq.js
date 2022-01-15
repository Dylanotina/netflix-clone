import React from 'react'
import FaqData from '../fixtures/faqs.json'
import {Accordeon, OptForm} from '../components'

function faq() {
    return (
        <Accordeon>
            <Accordeon.Title>Frequently Asked Questions</Accordeon.Title>
            <Accordeon.Frame>
                {FaqData.map(item => (
                    <Accordeon.Item key={item.id}>
                        <Accordeon.Header>{item.header}</Accordeon.Header>
                        <Accordeon.Body>{item.body}</Accordeon.Body>
                    </Accordeon.Item>
                ))}
            </Accordeon.Frame>
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break/>
                <OptForm.Input placeholder="Email adress"/>
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </Accordeon>
    )
}

export default faq
