import { React, useState } from 'react'
import { Credentials } from './Credentials'

export const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Credentials
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </>
    )
}
