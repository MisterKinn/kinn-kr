"use client";
import React, { useState, useEffect } from "react";
import { exchangeRates, convertCurrency, getUserCountry } from "./converter";
import "../../styles/converter.css";
import Footer from "../../components/archive/home2/desktop/Footer";

function Converter() {
    const [fromCurrency, setFromCurrency] = useState("krw");
    const [toCurrency, setToCurrency] = useState("usd");
    const [amount, setAmount] = useState(100);

    useEffect(() => {
        async function initialize() {
            const defaultCurrency = await getUserCountry();
            setFromCurrency(defaultCurrency);
        }
        initialize();

        convertCurrency(fromCurrency, toCurrency, amount);
    }, [fromCurrency, toCurrency, amount]);

    const handleFromCurrencyChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setToCurrency(e.target.value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseFloat(e.target.value));
    };

    return (
        <div className="page-container">
            <header className="header">
                <a
                    href="https://kinn.kr/"
                    target="_blank"
                    title="Kinn's Lounge"
                >
                    <img
                        loading="lazy"
                        src="img/kinn-banner.png"
                        alt="Kinn's Lounge"
                        className="banner"
                    />
                </a>
            </header>

            <main className="main">
                <div className="converter-container">
                    <h1 className="title">Dynamic Converter</h1>
                    <label htmlFor="fromCurrency">From:</label>
                    <select
                        id="fromCurrency"
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="toCurrency">To:</label>
                    <select
                        id="toCurrency"
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <div id="result"></div>
                    <p id="lastUpdateTime"></p>
                </div>
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Converter;
