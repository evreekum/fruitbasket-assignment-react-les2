import React, {useState} from 'react';
import './App.css';
import CounterButtons from "./Components/CounterButtons";
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

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onChange", defaultValues: {
            "deliveryFrequency" : "every-week",
            "partOfDay" : "day-time",
            "firstName" : " ",
            "lastName" : " ",
            "age" : "16"
        }
    });

    function onFormSubmit(data) {
        console.log(data);
        console.log(`Bestelling: 
        Aardbeien: ${aardbeien},
        Bananen: ${bananen},
        Appels: ${appels},
        Kiwi's: ${kiwis}`);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <CounterButtons
                    fruitName="🍓 Aardbeien"
                    counter={aardbeien}
                    setCounter={setAardbeien}
                />
                <CounterButtons
                    fruitName="🍌 Bananen"
                    counter={bananen}
                    setCounter={setBananen}
                />
                <CounterButtons
                    fruitName="🍎 Appels"
                    counter={appels}
                    setCounter={setAppels}
                />
                <CounterButtons
                    fruitName="🥝 Kiwi's"
                    counter={kiwis}
                    setCounter={setKiwis}
                />

                <button
                    className="reset-button"
                    type="button"
                    onClick={() => ResetButton()}
                >
                    reset
                </button>
            </section>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend> Bestel Formulier:</legend>

                    <label htmlFor="first-name">
                        voornaam
                        <input
                            type="text"
                            id="first-name"
                            {...register("firstName", {
                                required: "Voornaam mag niet leeg zijn",
                                minLength: {value: 2, message: "Voornaam moet minstens 2 letters bevatten"}
                            })}
                            size="50"
                        />
                    </label>
                    {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

                    <label htmlFor="last-name">
                        achternaam
                        <input
                            type="text"
                            id="last-name"
                            {...register("lastName", {
                                required: "Achternaam mag niet leeg zijn",
                                minLength: {value: 2, message: "Achternaam moet minstens 2 letters bevatten"}
                            })}
                            size="50"
                        />
                    </label>
                    {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

                    <label htmlFor="age-field">
                        leeftijd
                        <input
                            type="number"
                            id="age-field"
                            {...register("age", {
                                required: "Leeftijd mag niet leeg zijn",
                                min: {value: 16, message: "Klant moet minstens 16 jaar oud zijn"}
                            })}
                        />
                    </label>
                    {errors.age && <p className="error-message">{errors.age.message}</p>}

                    <label htmlFor="zipcode-field">
                        postcode
                        <input
                            type="text"
                            id="zipcode-field"
                            placeholder="1234AB"
                            {...register("zipcode", {
                                required: "Postcode mag niet leeg zijn",
                                minLength: {value: 6, message: "Postcode moet minsten 4 cijfers en 2 letters bevatten"}
                            })}
                        />
                    </label>
                    {errors.zipcode && <p className="error-message">{errors.zipcode.message}</p>}

                    <label htmlFor="delivery-frequency">
                        bezorgfrequentie
                        <select
                            {...register("deliveryFrequency")}
                            id="delivery-frequency">
                            <option value="every-week">Iedere week</option>
                            <option value="every-other-week">Om de week</option>
                            <option value="every-month">Iedere maand</option>
                        </select>
                    </label>

                    <section className="part-of-day-wrapper">
                        <label htmlFor="day-time">
                            <input
                                type="radio"
                                id="day-time"
                                value="day-time"
                                {...register("partOfDay")}
                            />
                            Overdag
                        </label>
                        <label htmlFor="night-time">
                            <input
                                type="radio"
                                id="night-time"
                                value="night-time"
                                {...register("partOfDay")}
                            />
                            's Avonds
                        </label>
                    </section>

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
                            {...register("checkedConditions", {required: true})}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    {errors.checkedConditions &&
                        <p className="error-message">Accepteer de voorwaarden voor verzenden</p>}

                    <button
                        className="submit-button"
                        type="submit"
                    >
                        verzenden
                    </button>

                </fieldset>

            </form>

        </>
    );
}

export default App;
