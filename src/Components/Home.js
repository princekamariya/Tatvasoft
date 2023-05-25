import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Grid, Paper } from "@mui/material";
import Posts from "./Posts";
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
