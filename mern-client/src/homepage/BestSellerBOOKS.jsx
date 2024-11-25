import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';
const BestSellerBOOKS = () => {
    const [books, setBooks]=useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-books")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Best Selling Books!" />
        </div>
    );
}

export default BestSellerBOOKS;
