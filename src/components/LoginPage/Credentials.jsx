import { Input, TextField, } from "@mui/material";
import Button from '@mui/material/Button';
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Fetch";
import login_gradient from "./login-gradient.jpg"
import login_image from "./login-image.png"

export const Credentials = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleCredentials = () => {
        isAuthenticated(username, password).then(res => {
            res ? navigate("/Home") : console.log("Authentication Invalid") //Change to user error message
        })
    }

    return (
        <>
            <div className="flex">
                <div className="h-screen w-1/2">
                    <img className="object-fill h-full w-full" src={login_gradient} alt="gradient" />
                </div>

                <div className="h-screen w-1/2 bg-white grid place-items-center">
                    <div className="h-1/2 w-1/2">
                        <div>
                            <TextField
                                id="outline-basic"
                                label="Username"
                                variant="outlined"
                                type='text'
                                onChange={event => setUsername(event.target.value)}
                            />
                        </div>

                        <div>
                            <TextField
                                id="outline-basic"
                                label="Password"
                                variant="outlined"
                                type='text'
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>

                        <div>
                            <Button variant="contained" onClick={handleCredentials}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
