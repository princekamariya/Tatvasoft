import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index.js";
import CartItem from "./CartItem.js";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

const baseURL = "https://book-e-sell-node-api.vercel.app";

const Cart = () => {
    const { isAuthenticated, setIsAuthenticated, user, setUser } =
        useContext(Context);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItem = async () => {
            await axios
                .get(baseURL + "/api/cart?userId=" + user.id)
                .then((response) => {
                    setItems(response.data.result);
                })
                .catch((error) => {
                    toast.error(error);
                });
        };
        fetchItem();
    }, []);

    const findTotal = () => {
        let sum = 0;
        items.forEach((item) => {
            console.log("hello");
            sum = sum + item.book.price * item.quantity;
        });
        return sum;
    };

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
                    Cart
                </center>
                <br />
            </h3>
            <div className="cartDetailsOuter">
                <div className="cartDetails">
                    <p>
                        <b> My Shopping Bag({items.length} Items)</b>
                    </p>
                    {items.length > 0 && <p>
                        <b> Total price: {findTotal()} ₹ </b>
                    </p>}
                </div>
            </div>
            <div>
                {items.map((item) => {
                    return (
                        <>
                            <CartItem item={item} /> <br />
                        </>
                    );
                })}
            </div>
            <div className="placeOrderButtonOuter">
                <div className="placeOrderButton">
                    <Button variant="contained" color="error">
                        Place order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
