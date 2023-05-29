import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import { Context } from "../index.js";
import { Navigate } from "react-router-dom";
import "../App.css";

import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

export const URL = "https://jsonplaceholder.typicode.com/posts";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const [post, setPost] = useState([]);
    const [error, setError] = useState("");

    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);
    useEffect(() => {
        const fetchPost = async () => {
            await axios
                .get(URL)
                .then((response) => {
                    setPost(response.data);
                })
                .catch((error) => {
                    setError(error);
                });
        };
        fetchPost();
    }, []);
    if (isAuthenticated === false) {
        console.log(isAuthenticated);
        return <Navigate to={"/login"} />;
    }

    if (error) {
        return (
            <>
                <p>Something Went Wrong: {error}</p>
            </>
        );
    }

    return (
        <>
            <div>
                <header>
                    <center> Hello {isAuthenticated} </center>
                    <h1>
                        <center> POST </center>
                    </h1>
                    <Grid container spacing={3}>
                        {post.map((p) => {
                            return (
                                <Grid item lg={4} md={6} sm={12} spacing={3}>
                                    <Item>
                                        <Posts
                                            id={p.id}
                                            title={p.title}
                                            body={p.body}
                                        />
                                    </Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </header>
            </div>
        </>
    );
};

export default Home;
