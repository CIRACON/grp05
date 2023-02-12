import { TextField, } from "@mui/material";
import Button from '@mui/material/Button';
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import { isAuthenticated } from "../../Fetch";
import login_gradient from "./login-gradient.jpg"
import login_gradient2 from "./Illustration3.png"

export const Credentials = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleCredentials = () => {
        isAuthenticated(username, password).then(res => {
            res ? navigate("/home") : console.log("Authentication Invalid") //Change to user error message
        })
    }

    return (
        <>
            <div className="flex">
                <div className="h-screen w-3/5">
                    {/* <img className="object-fill h-full w-full" src={login_gradient} alt="gradient" /> */}
                    <img className="object-fill h-full w-full" src={login_gradient2} alt="gradient" />
                </div>

                <div className="h-screen w-2/5 bg-white grid place-items-center">
                    <div className="h-1/2 w-full grid place-items-center">
                    
                        <div className="font-sans  text-lg text-left font-bold">
                            Sign in
                        </div>

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
                                type='password'
                                onChange={event => setPassword(event.target.value)}
                            
                            />
                        </div>

                        <div>
                            <Button
                                variant="contained" onClick={handleCredentials}
                                sx={{width: 210}}
                            >
                                Sign in
                            </Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
