import React from 'react'
import { LockBody, Picture, ReleaseBody, Spinner } from './styles/loading'

export default function Loading({src}) {
    return (
        <Spinner>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = () =>{
    return <ReleaseBody/>
}
