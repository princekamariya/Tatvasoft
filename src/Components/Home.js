import React from "react";
import "../App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const Home = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <p>Home Page.</p>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.komododigital.co.uk/app/uploads/2022/11/React-1.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    REACT
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    React is a free and open-source front-end
                                    JavaScript library for building user
                                    interfaces based on components.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href="https://react.dev/">Learn More</a>
                            </Button>
                        </CardActions>
                    </Card>
                </header>
            </div>
        </>
    );
};

export default Home;
