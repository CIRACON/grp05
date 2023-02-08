import { Input, TextField, } from "@mui/material";
import Button from '@mui/material/Button';
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Fetch";

export const Credentials = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleCredentials = () => {
            
        console.log(isAuthenticated(username, password))

            if (isAuthenticated(username, password)) {
                navigate("/Home");
           
            } else {
                // throw error to user
                navigate("/");
            }
        }
    

    return (
        <>
            <div>Credentials Component</div>
            <TextField
                id="outline-basic"
                label="Username"
                variant="outlined"
                type='text'
                onChange={event => setUsername(event.target.value)}
            />

            <TextField
                id="outline-basic"
                label="Password"
                variant="outlined"
                type='text'
                onChange={event => setPassword(event.target.value)}
            />

            {/* On submit this should send the username & password to the DB and check to see if there is a username
            Matching those credentials.

            If yes, move to welcome page.
            If no, prompt warning. */}
            <Button variant="contained" onClick={handleCredentials}>Submit</Button>

        </>
    )
}
