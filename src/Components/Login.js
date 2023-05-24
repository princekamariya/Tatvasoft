import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
    };

    return (
        <div className="loginContainer">
            <Flex align="center" justify="center" direction="column">
                <Text fontSize="2.5em">Login or Create Account</Text>
                <div className="loginForm">
                    <div className="login">
                        <div>
                            <p>New Customer</p>
                            <span>Registration is Free and Easy</span>
                            <ul>
                                <li>Faster Checkout</li>
                                <li>Save multiple Shopping addresses</li>
                                <li>View and Track orders and more</li>
                            </ul>
                            <button
                                className="loginButton"
                                style={{ marginTop: "90px" }}
                                onClick={() => {
                                    navigate("/register");
                                }}
                            >
                                Create an Account
                            </button>
                        </div>
                        <div>
                            <p>Registered Customers</p>
                            <form action="/" onSubmit={handleSubmit}>
                                <div className="loginInput">
                                    <p>Enter Email:</p>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleEmail}
                                    />
                                </div>
                                <div className="loginInput">
                                    <p>Password:</p>
                                    <input
                                        required
                                        type="password"
                                        placeholder="Conform Password"
                                        onChange={handlePassword}
                                    />
                                </div>
                                <button className="loginButton" type="submit">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Flex>
        </div>
    );
};

export default Login;
