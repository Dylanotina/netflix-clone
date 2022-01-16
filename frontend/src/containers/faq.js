import React from 'react'
import FaqData from '../fixtures/faqs.json'
import {Accordeon} from '../components'

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
        </Accordeon>
    )
}

export default faq
