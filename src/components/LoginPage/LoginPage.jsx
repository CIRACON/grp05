import { React, useState } from 'react'
import { Credentials } from './Credentials'

export const LoginPage = () => {

    /* eslint-disable no-unused-vars */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    /* eslint-enable no-unused-vars */

    return (
        <>
            <Credentials
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </>
    )
}
