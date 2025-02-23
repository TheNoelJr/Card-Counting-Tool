import React, { useState } from "react";

const CardCountingApp = () => {
    const [count, setCount] = useState(0);

    const handleCardClick = (value) => {
        setCount(count + value);
    };

    return (
        <div>
            <h1>Card Counting Tool</h1>
            <p>Current Count: {count}</p>
            <button onClick={() => handleCardClick(1)}>Cards 2-6 (+1)</button>
            <button onClick={() => handleCardClick(0)}>Cards 7-9 (0)</button>
            <button onClick={() => handleCardClick(-1)}>Cards 10-A (-1)</button>
        </div>
    );
};

export default CardCountingApp;
