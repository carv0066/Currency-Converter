const amount = document.getElementById("amount");

const currencyOneList = document.getElementById("currency-one");
const currencyOneOptionsCollection = currencyOneList.options;
const currencyOneOptions = Array.from(currencyOneOptionsCollection);

const currencyTwoList = document.getElementById("currency-two");
const currencyTwoOptionsCollection = currencyTwoList.options;
const currencyTwoOptions = Array.from(currencyTwoOptionsCollection);

//fetch from the api
fetch("http://localhost:3000/api/data")
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const currencyArray = Object.entries(data.data); //transform object into array
        let currencyValueOne = 0;
        let currencyValueTwo = 0;
        let currencyNameOne = "";
        let currencyNameTwo = "";

        currencyArray.map(currency => {
            console.log("currency", currency); //get code for currency name

            //Get each currency into one option for the list of options
            currencyOneOptions.forEach(() => {
                let createOption = document.createElement("option");
                createOption.textContent = currency[0];

                createOption.dataset.code = currency[1].code;
                createOption.value = currency[1].value;

                let codeOne = currency[1].code;
                let valueOne = currency[1].value;
                currencyNameOne = codeOne;
                console.log(codeOne, "code one is")

                // let item = option.dataset.item;
                // console.log("option is", option);
                //That is incorrect i need to grab the dataset correctly, once im able to get the dataset of each individual item, I'll be able to continue

                currencyOneList.appendChild(createOption);
            })

            currencyTwoOptions.forEach(() => {
                let createOption = document.createElement("option");
                createOption.textContent = currency[0];

                createOption.dataset.code = currency[1].code;
                createOption.value = currency[1].value;

                let codeTwo = currency[1].code;
                let valueTwo = currency[1].value;
                currencyNameTwo = codeTwo;

                currencyTwoList.appendChild(createOption);
            })
        })

        currencyOneList.addEventListener("change", (event) => {
            let currencyOneTargetValue = event.target.value;
            currencyValueOne = currencyOneTargetValue;
            currencyConvertion();
        })

        currencyTwoList.addEventListener("change", (event) => {
            let currencyTwoTargetValue = event.target.value;
            currencyValueTwo = currencyTwoTargetValue;
            currencyConvertion();
        })

        const currencyConvertion = () => {
            //first selected currency + repeat the same for value two
            console.log("in conversion value one is", currencyValueOne);
            if (currencyValueTwo !== "ZWL") { //Why after selecting value one does value two becomed ZWL, instead of just staying at 0;
                console.log("in conversion value two is", currencyValueTwo);

                //Amount logs after currency is selected
                amount.addEventListener("input", (event) => {
                    console.log("amount is", event.target.value, event.target.dataset.item); //its not fully working, it always gives me the last element code being ZWL
                })
                //amount in input in its own currency 
                //amount in input is equal to currencyValueOne
                //amount in input in currencyValueOne needs to be multiplied to become USD
                //usd amount should be transformed into currencyValueTwo
                //Show Results
            }
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
//If i use all of my monthly uses, create a JSON file with my own local not live list of currencies, I'm not paying for it to work