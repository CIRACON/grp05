import  {React, useState } from "react";
import { setUsername, setPassword } from './LoginPage'

export const Credentials = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const seeCredentials = ({username, password}) => {
        console.log(username)
        // console.log(
    }

    return (
        <>
            <div>Credentials Component</div>
            <input type='text' placeholder='username' onChange={event => setUsername(event.target.value)} />
            <input type='text' placeholder='password' onChange={event => setPassword(event.target.value)} />
            <button type='submit' onSubmit={seeCredentials}>Submit</button>
        </>
    )
}
