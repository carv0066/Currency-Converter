const amount = document.getElementById("amount");
const dataCodeNodeList = document.querySelectorAll("[data-code");
const dataCode = Array.from(dataCodeNodeList);
console.log("data code", dataCode);

const currencyOneList = document.getElementById("currency-one");
const currencyOneOptionsCollection = currencyOneList.options;
const currencyOneOptions = Array.from(currencyOneOptionsCollection);

const currencyTwoList = document.getElementById("currency-two");
const currencyTwoOptionsCollection = currencyTwoList.options;
const currencyTwoOptions = Array.from(currencyTwoOptionsCollection);

//fetch from the api
fetch("http://localhost:3000/list/data")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // const currencyArray = Object.entries(data.data); //transform object into array
        const currencyArray = data; // for local
        console.log("Currency Array is:", currencyArray);
        let currencyValueOne = 0;
        let currencyValueTwo = 0;
        let currencyNameOne = "";
        let currencyNameTwo = "";

        currencyArray.map(currency => {
            console.log("currency", currency); //get code for currency name

            //Get each currency into one option for the list of options
            currencyOneOptions.forEach((option) => {
                let createOption = document.createElement("option");
                createOption.textContent = currency.name;

                createOption.dataset.code = currency.code;
                createOption.value = currency.value;

                let codeOne = currency.code;
                let valueOne = currency.value;
                currencyNameOne = codeOne;
                currencyOneList.appendChild(createOption);

                console.log("option is", codeOne)
            })

            currencyTwoOptions.forEach(() => {
                let createOption = document.createElement("option");
                createOption.textContent = currency.name;

                createOption.dataset.code = currency.code;
                createOption.value = currency.value;

                let codeTwo = currency.code;
                let valueTwo = currency.value;
                currencyNameTwo = codeTwo;

                currencyTwoList.appendChild(createOption);
            })

        })

        currencyOneList.addEventListener("change", (event) => {
            let currencyOneTargetValue = event.target.value;
            currencyValueOne = currencyOneTargetValue;
            console.log("target code", event.target.selectedOptions[0].dataset.code);

            amount.addEventListener("input", (event) => {
                console.log("amount  one is", event.target.value);//grab amount in unique currency, transform it to usd, then to second currency
            })
            currencyConvertion();
        })

        currencyTwoList.addEventListener("change", (event) => {
            let currencyTwoTargetValue = event.target.value;
            currencyValueTwo = currencyTwoTargetValue;
            console.log("target code 2", event.target.selectedOptions[0].dataset.code);
            currencyConvertion();
        })

        const currencyConvertion = () => {
            //first selected currency + repeat the same for value two
            console.log("in conversion value one is", currencyValueOne);
            console.log("in conversion value two is", currencyValueTwo);


            //Amount logs after currency is selected
            //amount in input in its own currency 
            //amount in input is equal to currencyValueOne
            //amount in input in currencyValueOne needs to be multiplied to become USD
            //usd amount should be transformed into currencyValueTwo
            //Show Results

            //transform first currency in usd
            // that amount of usd multiplied by value to get Second Selected currency

        }

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