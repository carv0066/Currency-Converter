import express from "express";
import cors from "cors";
import Currencyapi from '@everapi/currencyapi-js';
import dotenv from 'dotenv';
const app = express();
const port = 3000;

app.use(cors());

// Load environment variables
// dotenv.config();

//GET REQUEST
//Grabbed value from API and log response
// const client = new Currencyapi(process.env.CURRENCY_API_KEY);

// app.get("/api/data", async (req, res) => {
//     console.log("Frontend requested data!");

//     try {
//         const latest = await client.latest();
//         res.json(latest);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({error: "failed to fetch latest currencies"});
//     }

// })

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


// Checking status on the amount of monthly uses i have left
// client.status().then(response => {
//     console.log("status", response);
// });


//Currency JS List not API(Free Version)

//import local data
import { mockCurrencies } from "./src/currencies.js";

app.get("/list/data", async (req, res) => {
    console.log("Frontend requested data!");
    res.json(mockCurrencies);
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});