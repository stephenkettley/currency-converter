const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const apiKey = "e9db405f692340679990dc9b";

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[`${currencySecondEl.value}`];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate.toFixed(
        2
      )} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);
