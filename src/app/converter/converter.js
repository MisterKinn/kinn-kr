let exchangeRates = {};
let lastUpdateTime = null;

function displayErrorMessage(message) {
    console.error(message);
    alert(message);
}

function displayLastUpdateTime() {
    const updateElement = document.querySelector("#lastUpdateTime");

    if (lastUpdateTime) {
        const formattedTime = new Date(lastUpdateTime).toLocaleString();
        updateElement.textContent = `Last Updated: ${formattedTime}`;
    } else {
        updateElement.textContent = "Data has not been updated yet.";
    }
}

async function updateExchangeRates() {
    try {
        const response = await fetch(
            "https://api.exchangerate-api.com/v4/latest/USD" // Fetch Exchange Rates
        );
        const data = await response.json();

        if (data.rates) {
            // Filter desired currencies from the API response
            const desiredCurrencies = [
                "USD",
                "KRW",
                "AUD",
                "BRL",
                "CAD",
                "CNY",
                "EUR",
                "GBP",
                "JPY",
                "MXN",
                "PHP",
            ];
            const filteredRates = Object.fromEntries(
                Object.entries(data.rates).filter(([currency]) =>
                    desiredCurrencies.includes(currency)
                )
            );

            exchangeRates = filteredRates;
            lastUpdateTime = Date.now();
            console.log("Exchange Rates Updated:", exchangeRates);
            displayLastUpdateTime();
        } else {
            console.error("Failed to update Exchange Rates:", data);
        }
    } catch (error) {
        console.error("Error updating Exchange Rates:", error);
    }
}

function mapCountryCode(apiCountryCode) {
    const codeMapping = {
        US: "usd",
        KR: "krw",
        AU: "aud",
        BR: "brl",
        CA: "cad",
        CN: "cny",
        EU: "eur",
        GB: "gbp",
        JP: "jpy",
        MX: "mxn",
        PH: "php",
    };

    return codeMapping[apiCountryCode] || apiCountryCode;
}

async function getUserCountry() {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        if (data.country) {
            return mapCountryCode(
                document.querySelector("#fromCurrency").value
            );
        } else {
            console.error("Failed to get user country:", data);
            return null;
        }
    } catch (error) {
        console.error("Error getting user country:", error);
        return null;
    }
}

async function initialize() {
    const defaultCurrency = "";

    if (defaultCurrency) {
        const fromCurrencyElement = document.querySelector("#fromCurrency");
        const toCurrencyElement = document.querySelector("#toCurrency");

        fromCurrencyElement.value = defaultCurrency;
        toCurrencyElement.value = "usd";

        await updateExchangeRates();
        displayLastUpdateTime();

        setInterval(updateExchangeRates, 3600000); // Update Exchange Rates every 1 hr
    } else {
        console.error(
            "Failed to get user country code. Please set default currency manually."
        );
    }
}

if (typeof window !== "undefined") {
    window.addEventListener("load", initialize);
}

function calculateExchangeRate(fromCurrency, toCurrency) {
    if (
        exchangeRates &&
        exchangeRates[fromCurrency] &&
        exchangeRates[toCurrency]
    ) {
        return exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    }
    return null;
}

async function convertCurrency(fromCurrency, toCurrency, amount) {
    const fromCurrencyElement = document.querySelector("#fromCurrency");
    const toCurrencyElement = document.querySelector("#toCurrency");
    const amountElement = document.querySelector("#amount");

    if (!fromCurrencyElement || !toCurrencyElement || !amountElement) {
        console.error(
            "Required elements not found. Please check your HTML structure."
        );
        return;
    }

    fromCurrency = String(fromCurrency).toUpperCase();
    toCurrency = String(toCurrency).toUpperCase();
    amount = parseFloat(amount);

    if (!amount) {
        // No amount
        return;
    }

    try {
        if (Object.keys(exchangeRates).length === 0) {
            await updateExchangeRates();
        }

        const exchangeRate = calculateExchangeRate(fromCurrency, toCurrency);
        if (exchangeRate === null) {
            return;
        }

        const result = (amount * exchangeRate).toFixed(2);

        const formattedFromCurrency = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: fromCurrency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            currencyDisplay: "symbol",
        }).format(amount.toFixed(2));

        const formattedToCurrency = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: toCurrency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            currencyDisplay: "symbol",
        }).format(result);

        const resultElement = document.querySelector("#result");

        if (!resultElement) {
            console.error(
                "Result element not found. Please check your HTML structure."
            );
            return;
        }

        resultElement.innerHTML = `${formattedFromCurrency} = ${formattedToCurrency}`;

        const lastUpdatedElement = document.querySelector("#lastUpdated");
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = `Last Updated: ${new Date().toLocaleString()}`;
        }
    } catch (error) {
        console.error("Error converting currency:", error);
        displayErrorMessage("Error converting currency.");
    }
}

export {
    exchangeRates,
    lastUpdateTime,
    displayErrorMessage,
    updateExchangeRates,
    mapCountryCode,
    getUserCountry,
    calculateExchangeRate,
    convertCurrency,
};
