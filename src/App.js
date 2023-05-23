import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import NotFound from "./Components/NotFound.js";
import Home from "./Components/Home";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const [isOpen, setIsOpen] = useState(false);
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
                                    News
                                </Typography>
                                <Button color="inherit">Login</Button>
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
                        </div>
                    )}

                    <Routes>
                        <Route path="/about" element={<About />} />
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
