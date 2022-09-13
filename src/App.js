import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";


function App() {

    // const plusCounter = () => setCounter(counter + 1);
    // const minCounter = () => setCounter(counter - 1);
    // if (counter <= 0) {
    //     minCounter = () => setCounter(0);
    // }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <Buttons
                fruitname="Aardbeien"
            />

         {/*   <div className="fruit-container">
                <h2>Aardbeien</h2>
                <button
                    type="button"
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter === 0}
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

            <div className="fruit-container">
                <h2>Aardbeien</h2>
                <button
                    type="button"
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter === 0}
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


            </div>*/}



            {/*<ButtonPlus onClickFunc={plusCounter}/>*/}
        </>
    );
}

export default App;
