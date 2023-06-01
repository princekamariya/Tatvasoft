import { BorderColor } from "@mui/icons-material";
import {
    Button,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    TextField,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../index.js";
import { Navigate } from "react-router-dom";

const baseURL = "https://book-e-sell-node-api.vercel.app";

const AddBook = () => {
    const navigate = useNavigate();
    const [bookName, setBookName] = useState("");
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState();
    const [category, setCategory] = useState(2);
    const [description, setDescription] = useState("");

    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);

    const handleName = (e) => {
        setBookName(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            toast.error("Please select an image.");
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = async () => {
            const base64Image = fileReader.result;

            try {
                const response = await axios.post(baseURL + "/api/book", {
                    name: bookName,
                    description: description,
                    price: price,
                    categoryId: 9,
                    base64image: base64Image,
                });

                toast.success("Book Added Successfully");
                console.log(response);
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    toast.error("Book already exists.");
                } else {
                    toast.error("Error adding book. Please try again.");
                }
                console.error(error);
            }
        };

        fileReader.readAsDataURL(file);
        navigate("/");
    };

    if (isAuthenticated === false) {
        return <Navigate to={"/login"} />;
    }
    return (
        <div>
            <span className="addBookHeading">
                <h3>
                    <center>Add Book</center>
                </h3>
            </span>
            <div className="addForm">
                <form action="" onSubmit={handleSubmit}>
                    <div className="addBookFormDiv1">
                        <label htmlFor="name">Book Name: </label>
                        <input
                            className="addFormInput"
                            type="text"
                            id="name"
                            onChange={handleName}
                        />
                        <br /> <br />
                        <label htmlFor="price">Book Price: </label>
                        <input
                            type="number"
                            className="addFormInput"
                            id="price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="addBookFormDiv2">
                        <label htmlFor="category">Category: </label>
                        <input
                            className="addFormInput"
                            type="text"
                            id="category"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <br /> <br />
                        <input
                            className="addFormInputImage"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input
                            className="addFormInput"
                            type="text"
                            id="description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>{" "}
                    <br />
                    <Button
                        variant="contained"
                        size="large"
                        color="error"
                        type="submit"
                    >
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
