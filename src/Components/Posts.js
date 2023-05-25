import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Posts = (props) => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 24 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="body2">{props.body}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Posts;
