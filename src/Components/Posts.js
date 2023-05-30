import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

const Posts = (props) => {
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
                    >
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;
