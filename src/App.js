import React, {useState} from 'react';
import './App.css';
import CounterButtons from "./components/CounterButtons";
import {useForm} from "react-hook-form";

function App() {
    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    function ResetButton() {
        setAardbeien(0);
        setBananen(0);
        setAppels(0);
        setKiwis(0);
    }

    const {register} = useForm();

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>

                <CounterButtons

                    fruitName="🍓 Aardbeien"
                    counter={aardbeien}
                    setCounter={setAardbeien}
                />

                <article>
                    <CounterButtons
                        fruitName="🍌 Bananen"
                        counter={bananen}
                        setCounter={setBananen}
                    />
                </article>
                <article>
                    <CounterButtons
                        fruitName="🍎 Appels"
                        counter={appels}
                        setCounter={setAppels}
                    />
                </article>
                <article>
                    <CounterButtons
                        fruitName="🥝 Kiwi's"
                        counter={kiwis}
                        setCounter={setKiwis}
                    />
                </article>


                <button
                    className="reset-button"
                    type="button"
                    onClick={() => ResetButton()}
                >
                    Reset
                </button>
            </section>

            <form>
                <fieldset>
                    <legend>Bestel Formulier:</legend>
                    <label htmlFor="first-name">
                        voornaam
                        <input
                            type="text"
                            id="first-name"
                            {...register("first-name")}
                        />
                    </label>

                    <label htmlFor="last-name">
                        achternaam
                        <input
                            type="text"
                            id="last-name"
                            {...register("last-name")}
                        />
                    </label>

                    <label htmlFor="age-field">
                        leeftijd
                        <input
                            type="number"
                            id="age-field"
                            {...register("age")}
                        />
                    </label>

                    <label htmlFor="postcode-field">
                        postcode
                        <input
                            type="text"
                            id="postcode-field"
                            {...register("postcode")}
                        />
                    </label>

                    <label htmlFor="delivery-frequency">
                        bezorgfrequentie
                        <select
                            {...register("bezorgfrequentie")}
                            id="delivery-frequency">
                            <option value="every-week">Iedere week</option>
                            <option value="every-other-week">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>
                    <label htmlFor="day-time">
                        <input
                            type="radio"
                            id="day-time"
                            value="overdag"
                            {...register("part-of-day")}
                        />
                        overdag
                    </label>
                    <label htmlFor="night-time">
                        <input
                            type="radio"
                            id="night-time"
                            value="'s avonds"
                            {...register("part-of-day")}
                        />
                        's avonds
                    </label>
                    <label htmlFor="comments-field">
                        opmerking
                        <textarea
                            {...register("comments")}
                            id="comments-field"
                            cols="60"
                            rows="10">

                        </textarea>
                    </label>

                    <label htmlFor="terms-and-conditions">
                        <input
                            type="checkbox"
                            id="terms-and-conditions"

                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                </fieldset>
            </form>
        </>
    );
}

export default App;
