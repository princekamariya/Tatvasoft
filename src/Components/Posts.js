import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../index.js";
import axios from "axios";
import { toast } from "react-hot-toast";

const baseURL = "https://book-e-sell-node-api.vercel.app";

const Posts = (props) => {
    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);

    const handleClick = (book) => {
        axios
            .post(baseURL + "/api/cart", {
                bookId: book.id,
                userId: user.id,
                quantity: 1,
            })
            .then((response) => {
                toast.success("Book added Successfully");
            })
            .catch((error) => {
                toast.error("Book is already there in cart");
            });
    };
    return (
        <div>
            <Card sx={{ minWidth: 250, backgroundColor: "#fff" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={props.img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ textAlign: "left", color: "black" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body1" color="gray">
                            Category: {props.category}
                        </Typography>
                        <Typography variant="body2" color="gray">
                            {props.description.substring(0, 60) + "..."}
                        </Typography>
                        <br />
                        <Typography variant="h6" color="gray">
                            Price {props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        variant="contained"
                        size="large"
                        color="error"
                        sx={{
                            width: "100%",
                            color: "white",
                        }}
                        onClick={() => handleClick(props)}
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;
