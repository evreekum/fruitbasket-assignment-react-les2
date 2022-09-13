import React, {useState} from "react";

function Buttons({fruitName}) {
    const [counter, setCounter] = useState(0);

    return (
        <div className="fruit-container">
            <h2>{fruitName}</h2>
            <button
                type="button"
                onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}

            >
                -
            </button>
            {counter}
            <button
                type="button"
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
        </div>
    )
}

export default Buttons;