import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useContext, useState } from "react";

import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import NotFound from "./Components/NotFound.js";
import Home from "./Components/Home";
import Register from "./Components/Register";

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

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);
    const handleClick = () => {
        console.log("click");
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <div>
                <BrowserRouter>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={handleClick}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1 }}
                                >
                                    BooksStore
                                </Typography>
                                <Button color="inherit">
                                    {isAuthenticated === false ? (
                                        <Link
                                            to={"/login"}
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Login
                                        </Link>
                                    ) : (
                                        <Button
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

                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
