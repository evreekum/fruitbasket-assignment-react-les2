import React from "react";

function CounterButtons({counter, setCounter, fruitName}) {

    return (
        <article  className="fruit-buttons">
            <h2>{fruitName}</h2>
            <button
                type="button"
                onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
            >
                -
            </button>
            <p>{counter}</p>
            <button
                type="button"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
        </article>
    )
}

export default CounterButtons;