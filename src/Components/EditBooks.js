import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import EditBook from "./EditBook";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)`
    color: black;
`;

const baseURL = "https://book-e-sell-node-api.vercel.app";

const EditBooks = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const handleDelete = async (id) => {
        await axios
            .delete(baseURL + `/api/book?id=${id}`)
            .then((response) => {
                toast.success("Book Deleted Successfully");
                fetchPost();
            })
            .catch((error) => {
                toast.error(`Some Problem while deleting Book: ${error}`);
                console.log(error);
            });
    };

    const handleEdit = async (
        id,
        name,
        description,
        price,
        categoryId,
        base64image
    ) => {
        const book = {
            id: id,
            name: name,
            description: description,
            price: price,
            categoryId: categoryId,
            base64image: base64image,
        };
        navigate("/editbook", {
            state: {
                id: id,
                name: name,
                description: description,
                price: price,
                categoryId: categoryId,
                base64image: base64image,
            },
        });
    };
    const fetchPost = async () => {
        setLoading(true);
        await axios
            .get(baseURL + "/api/book/all")
            .then((response) => {
                setBooks(response.data.result);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchPost();
    }, []);
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
                    Book Page
                </center>
            </h3>
            <div
                style={{
                    paddingLeft: "200px",
                    paddingRight: "200px",
                    paddingBottom: "100px",
                }}
            >
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow
                                sx={{
                                    backgroundColor: "white",
                                }}
                            >
                                <StyledTableCell>
                                    <span
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Book Name
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <span
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Price
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <span
                                        style={{
                                            fontWeight: "bolder",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Category
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "white" }}>
                            {books.map((book) => (
                                <TableRow
                                    key={book.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                        color: "black",
                                    }}
                                >
                                    <StyledTableCell
                                        sx={{ fontSize: "17px" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {book.name}
                                    </StyledTableCell>
                                    <StyledTableCell sx={{ fontSize: "17px" }}>
                                        {book.price}
                                    </StyledTableCell>
                                    <StyledTableCell sx={{ fontSize: "17px" }}>
                                        {book.category}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button
                                            variant="outlined"
                                            color="success"
                                            onClick={() =>
                                                handleEdit(
                                                    book.id,
                                                    book.name,
                                                    book.description,
                                                    book.price,
                                                    book.categoryId,
                                                    book.base64image
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>
                                        &nbsp;
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() =>
                                                handleDelete(book.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </StyledTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default EditBooks;
