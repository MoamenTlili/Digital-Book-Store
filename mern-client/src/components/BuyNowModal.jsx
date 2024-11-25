import React, { useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";

const BuyNowModal = ({ bookId, bookTitle }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        quantity: 1,
        mobileNumber: "",
        bookId: bookId,
        bookTitle: bookTitle,
    });

    const handleOpen = () => setOpen(!open);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOrderSubmit = () => {
        fetch("http://localhost:3000/place-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Order placed successfully");
            setOpen(false); // Close the modal on successful submission
        })
        .catch(error => {
            console.error("Error placing order:", error);
        });
    };

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded-xl"
            >
                Buy now
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                className="bg-pink-50"
                style={{
                    width: "40%", 
                    height: "auto", 
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    borderRadius: "8px",
                }}
            >
                <DialogBody>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-black placeholder-black"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-black placeholder-black"
                            onChange={handleChange}
                            value={formData.address}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Desired quantity"
                            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-black placeholder-black"
                            onChange={handleChange}
                            value={formData.quantity}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            placeholder="Enter your phone number"
                            className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-black placeholder-black"
                            onChange={handleChange}
                            value={formData.mobileNumber}
                        />
                    </div>
                    <div className="mb-3">
                        <Button
                            type="button"
                            onClick={handleOrderSubmit}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};
export default BuyNowModal;
