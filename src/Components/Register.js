import React, { useState } from "react";
import "../App.css";

import { Flex, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword1 = (e) => {
        setPassword1(e.target.value);
    };
    const handlePassword2 = (e) => {
        setPassword2(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FirstName:", firstName);
        console.log("LastName:", lastName);
        console.log("Email:", email);
        navigate("/");
    };

    return (
        <div className="registerContainer">
            <Flex align="center" justify="center" direction="column">
                <Text fontSize="2.5em">Login or Create Account</Text>
                <VStack spacing="24px">
                    <div>
                        <form
                            action="/"
                            className="personalInfoForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="personalInfoForm">
                                <p className="personalInfo">
                                    Personal Information
                                </p>
                                <div className="nameDetails">
                                    <div className="inputClass">
                                        <p>First Name:</p>
                                        <input
                                            required
                                            onChange={handleFirstName}
                                            className="nameInput"
                                            placeholder="Enter First Name"
                                        />
                                    </div>
                                    <div className="inputClass">
                                        <p>Last Name:</p>
                                        <input
                                            required
                                            onChange={handleLastName}
                                            className="nameInput"
                                            placeholder="Enter Last Name"
                                        />
                                    </div>
                                </div>
                                <p>Enter Your Email:</p>
                                <input
                                    required
                                    onChange={handleEmail}
                                    className="emailInput"
                                    type="email"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <div>
                                <p className="loginInfo">Login Information</p>
                                <div className="passwordDetails">
                                    <div className="inputClass">
                                        <p>Password:</p>
                                        <input
                                            onChange={handlePassword1}
                                            required
                                            className="passwordInput"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </div>
                                    <div className="inputClass">
                                        <p>Conform Password:</p>
                                        <input
                                            required
                                            onChange={handlePassword2}
                                            className="passwordInput"
                                            placeholder="Conform Password"
                                            type="password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </VStack>
            </Flex>
        </div>
    );
};

export default Register;
