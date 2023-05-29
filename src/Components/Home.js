import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import { Context } from "../index.js";
import { Navigate } from "react-router-dom";
import "../App.css";

import { Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";

const baseURL = "https://book-e-sell-node-api.vercel.app";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Home = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);

    useEffect(() => {
        const fetchPost = async () => {
            await axios
                .get(baseURL + "/api/book/all")
                .then((response) => {
                    setBooks(response.data.result);
                })
                .catch((error) => {
                    setError(error);
                });
        };
        fetchPost();
    }, []);
    if (isAuthenticated === false) {
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
                    <br />
                    <center> Hello {user.email} </center>
                    <h1>
                        <center> Books Listing </center>
                    </h1>
                    <Grid container spacing={3}>
                        {books.map((book) => {
                            return (
                                <Grid item lg={4} md={6} sm={12} spacing={3}>
                                    <Item alignItems={"flex-start"}>
                                        <Posts
                                            id={book.id}
                                            name={book.name}
                                            category={book.category}
                                            price={book.price}
                                            img={book.base64image}
                                            description={book.description}
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
