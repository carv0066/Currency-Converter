import Currencyapi from '@everapi/currencyapi-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const client = new Currencyapi(process.env.CURRENCY_API_KEY);
client.historical({
    date: '01-01-2021'
}).then(response => {
    console.log(response)
});