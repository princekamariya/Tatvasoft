import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const baseURL = "https://book-e-sell-node-api.vercel.app";

const CartItem = (props) => {
    const handleDelete = async (e, id) => {
        await axios
            .delete(baseURL + `/api/cart?id=${id}`)
            .then((response) => {
                toast.success("Book Removed From Cart");
            })
            .catch((error) => {
                toast.error(`Some Problem while Removing From Cart: ${error}`);
                console.log(error);
            });
    };
    return (
        <div className="cartItemContainer">
            <div className="cartItemOuter">
                <div>
                    <img
                        src={props.item.book.base64image}
                        alt=""
                        className="cartItemimg"
                    />
                </div>
                <div className="cartItemInner">
                    <div className="cartItemInnerdiv1">
                        <p style={{ fontWeight: "600" }}>
                            {props.item.book.name}
                        </p>
                        <p style={{ fontWeight: "600" }}>
                            MRP ₹ {props.item.book.price}
                        </p>
                    </div>
                    <div className="cartItemInnerdiv2">
                        <div className="counter">
                            <button>+</button>
                            <p>{props.item.quantity}</p>
                            <button>-</button>
                        </div>
                        <a onClick={() => handleDelete(props.item.id)}>
                            Remove
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
