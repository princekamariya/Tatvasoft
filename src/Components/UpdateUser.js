import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../index.js";

const baseURL = "https://book-e-sell-node-api.vercel.app";

const UpdateUser = () => {
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");

    if (isAuthenticated === false) {
        return <Navigate to={"/login"} />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(baseURL + "/api/user", {
                id: user.id,
                email: email,
                firstName: firstName,
                lastName: lastName,
                roleId: user.roleId,
                role: user.role,
                password: password,
            });

            toast.success("Details Updated Successfully");
            console.log(response);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error(
                    "Some Problem in Updating Details ! Please Try Again."
                );
            } else {
                toast.error(
                    "Some Problem in Updating Details ! Please Try Again."
                );
            }
            console.error(error);
        }
        navigate("/");
    };

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>
                <center
                    style={{
                        display: "inline-block",
                        padding: "10px",
                        fontSize: "35px",
                        textAlign: "center",
                        borderBottom: "3px solid #FF101B",
                    }}
                >
                    Update Profile
                </center>
            </h3>

            <div className="updateUserForm">
                <form action="" onSubmit={handleSubmit}>
                    <div className="updateForm">
                        <div className="updateFormInputDiv">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                                className="updateFormInput"
                                type="text"
                                id="firstName"
                                placeholder="Enter new first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="updateFormInputDiv">
                            <label htmlFor="lastName">Second Name *</label>
                            <input
                                className="updateFormInput"
                                type="text"
                                id="lastName"
                                placeholder="Enter new last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <div className="updateForm">
                        <div className="updateFormInputDiv">
                            <label htmlFor="email">Email *</label>
                            <input
                                className="updateFormInput"
                                type="text"
                                id="email"
                                placeholder="Enter new email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="updateFormInputDiv">
                            <label htmlFor="password">Password *</label>
                            <input
                                className="updateFormInput"
                                type="password"
                                id="password"
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <Button
                        sx={{
                            color: "white",
                            backgroundColor: "#80bf32",
                            "&:hover": {
                                backgroundColor: "#6ca52c",
                            },
                        }}
                        variant="contained"
                        size="large"
                        type="submit"
                    >
                        Save
                    </Button>
                    <span> </span>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        onClick={() => navigate("/")}
                    >
                        Cancel
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
