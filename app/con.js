const axios = require('axios');
// API details for converting INR to USD
const apiKeyExchangeRate = 'YOUR_API_KEY'; // Replace with your API key
const baseCurrency = 'USD';
const targetCurrency = 'INR';
// API details for converting USD to Gold
const endpointGold = 'https://api.metalpriceapi.com/v1/latest';
const apiKeyGold = 'bfca23b91354f653036fa053f4e68f3d';
const currencies = 'XAU';
// Amount in INR (Rupees)
const amountINR = 10000; // Example amount, replace this with your desired amount
// Fetch exchange rate
const exchangeRateEndpoint = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;

axios.get(exchangeRateEndpoint)
    .then(response => {
        if (response.data && response.data.rates && response.data.rates[targetCurrency]) {
            // Calculate equivalent amount in USD
            const exchangeRate = response.data.rates[targetCurrency];
            const amountUSD = amountINR / exchangeRate;

            // Fetch gold rate
            axios.get(`${endpointGold}?api_key=${apiKeyGold}&base=${baseCurrency}&currencies=${currencies}`)
                .then(response => {
                    const goldRatePerOunce = response.data.rates.XAU;
                    const goldRatePerGram = goldRatePerOunce / 0.00000587248;
                    const goldPerUSD = 1 / goldRatePerGram;

        
                    const equivalentGold = goldPerUSD * amountUSD;
                    const gramgold = quivalentGold.toFixed(2);
                    const espvalue = (1/0.15)*gramgold;

                    console.log(`${amountINR} INR is equivalent to ${equivalentGold.toFixed(2)} grams of gold.`);
                })
                .catch(error => {
                    console.error('Error fetching gold rate:', error.message);
                });
        } else {
            console.error('Error: Unable to fetch exchange rate data');
        }
    })
    .catch(error => {
        console.error('Error fetching exchange rate:', error.message);
    });