const selectElement = document.getElementById("currency-one");
const currencyOptionsCollection = selectElement.options;
const CurrencyOptions = Array.from(currencyOptionsCollection);

//fetch from the api
// "http://localhost:3000/api/data"
fetch("http://localhost:3000/api/data")
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
        const currencyArray = Object.entries(data.data);

        currencyArray.map(currency => {
            console.log("currency", currency[0]);//get code for currency name
            //Get each currency into one option for the list of options
        })
    
    })
    .catch(error => console.error('Error fetching data:', error));


//Connect API data to currency 1 selection
//I need: Code and value
//Loop trough the data.data array, inside each array grab the name and log it
//The input text value should first only be nummbers
//one list item should connect to one currency
//second list item should be the currency it wants to be converted into
//It updated when convert button gets clicked!!