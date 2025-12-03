const currencyOneList = document.getElementById("currency-one");
const currencyOneOptionsCollection = currencyOneList.options;
const currencyOneOptions = Array.from(currencyOneOptionsCollection);

const currencyTwoList = document.getElementById("currency-two");
const currencyTwoOptionsCollection = currencyTwoList.options;
const currencyTwoOptions = Array.from(currencyTwoOptionsCollection);

console.log("Currency One", currencyOneOptions);
console.log("Currency Two", currencyTwoOptions);

//fetch from the api
fetch("http://localhost:3000/api/data")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const currencyArray = Object.entries(data.data); //transform object into array
        let currencyValueOne = 0;
        let currencyValueTwo = 0;

        currencyArray.map(currency => {
            console.log("currency", currency); //get code for currency name

            //Get each currency into one option for the list of options
            currencyOneOptions.forEach((optionOne) => {
                let createOption = document.createElement("option");
                let currencyNameOne = createOption.textContent = currency[0];
                let valueOne = createOption.value = currency[1].value;
                currencyOneList.appendChild(createOption);
                // console.log("option value one is ", currencyNameOne, valueOne);
                // console.log("optionOne", optionOne);

                currencyOneList.addEventListener("change", (currency) =>{
                    let currencyOneTargetValue = currency.target.value;
                    currencyValueOne = currencyOneTargetValue;
                    console.log("currencyclicked",currencyOneTargetValue);
                } )
            })

            currencyTwoOptions.forEach(() => {
                let createOption = document.createElement("option");
                let currencyNameTwo = createOption.textContent = currency[0];
                currencyValueTwo = currencyNameTwo;
                let valueTwo = createOption.value = currency[1].value;
                currencyTwoList.appendChild(createOption);
                // console.log("option value two is", currencyNameTwo, valueTwo);
            })

            //I'll need first currency value and compare it to usd
            //then take that usd value and transform it into the second currency by multiplying it
            const currencyConvertion = () => {
                //first selected currency + repeat the same for value two
                console.log("in conversion value one is", currencyValueOne);
                
                //transform first currency in usd
                // that amount of usd multiplied by value to get Second Selected currency

            }
            currencyConvertion();
        })
    })
    .catch(error => console.error('Error fetching data:', error));

//there should be a convertion operation when i click it for it to work
//I need:
// - Amount on field of the first currency
// - Transform that amount into second currency
//- Show amount of first currency and how much is it equal in the second currency

//Shorten Code, there is a way to make this half as long
//Add localStorage to save content after a reload
//Just Style it after that
//If i use all of my monthly uses, create a JSON file with my own local not live list of currencies, I'm not paying for it to work