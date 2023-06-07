{
const calculateResult = (amount, currency) => {

    const EUR = 4.59;
    const USD = 4.19;
    const GBP = 5.22;
    const CHF = 4.66;

    switch (currency) {
        case "EUR":
            return amount / EUR;

        case "USD":
            return amount / USD;

        case "GBP":
            return amount / GBP;

        case "CHF":
            return amount / CHF;

    }
};

const updateResultText = (amount, result, currency) =>{
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency)

    updateResultText(amount, result, currency);

};

const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
};
    init();
}