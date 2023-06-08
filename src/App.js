import "./App.css";
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useNavigate,
    Navigate,
} from "react-router-dom";
import { useContext, useState } from "react";

import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import NotFound from "./Components/NotFound.js";
import Home from "./Components/Home";
import Register from "./Components/Register";
import AddBook from "./Components/AddBook.js";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./Components/Login";
import { Context } from "./index.js";

import { BsFillCartCheckFill } from "react-icons/bs";
import EditBooks from "./Components/EditBooks";
import EditBook from "./Components/EditBook";
import Footer from "./Components/Footer";
import UpdateUser from "./Components/UpdateUser";
import SearchResult from "./Components/SearchResult";
import Cart from "./Components/Cart";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);
    const handleClick = () => {
        console.log("click");
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const moveToCart = () => {
        navigate("/cart");
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <>
                    <Box sx={{ flexGrow: 1 }} className="box">
                        <div
                            className="redDiv"
                            style={{
                                height: "10px",
                                backgroundColor: "#F13A41",
                            }}
                        ></div>
                        <AppBar
                            position="static"
                            sx={{ backgroundColor: "#fff" }}
                        >
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={handleClick}
                                >
                                    <MenuIcon sx={{ color: "black" }} />
                                </IconButton>
                                <img src="" alt="" />
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1, color: "black" }}
                                >
                                    BooksStore
                                </Typography>
                                <Button
                                    sx={{
                                        color: "black",
                                        borderColor: "black",
                                        height: "40px",
                                    }}
                                    variant="outlined"
                                    onClick={moveToCart}
                                >
                                    <BsFillCartCheckFill size={25} />
                                    &nbsp;
                                    <p style={{ color: "#F13A41" }}>
                                        {/* <b>0</b> */}
                                    </p>
                                    &nbsp;
                                    <p>Cart</p>
                                </Button>
                                <Button color="inherit">
                                    {isAuthenticated === false ? (
                                        <Button
                                            sx={{
                                                color: "black",
                                                borderColor: "black",
                                                height: "40px",
                                            }}
                                            variant="outlined"
                                            onClick={{}}
                                        >
                                            Login
                                        </Button>
                                    ) : (
                                        <Button
                                            sx={{
                                                color: "black",
                                                borderColor: "black",
                                                height: "40px",
                                            }}
                                            variant="outlined"
                                            onClick={() => {
                                                setIsAuthenticated(false);
                                                setUser({});
                                            }}
                                        >
                                            Logout
                                        </Button>
                                    )}
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    {isOpen === false ? (
                        <></>
                    ) : (
                        <div className="navbar">
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/"}>Home</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/add"}>Add a Book</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/admin"}>Admin</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/update"}>Update Profile</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/about"}>About</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/contact"}>Contact</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/login"}>Login</Link>
                                </Typography>
                            </div>
                            <div className="nav">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    padding="normal"
                                    sx={{ flexGrow: 1 }}
                                >
                                    <Link to={"/register"}>Register</Link>
                                </Typography>
                            </div>
                        </div>
                    )}

                    <SearchResult />

                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/add" element={<AddBook />} />
                        <Route path="/admin" element={<EditBooks />} />
                        <Route path="/editbook" element={<EditBook />} />
                        <Route path="/update" element={<UpdateUser />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </>
            </div>
            <br /> <br />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
