class UI {
    constructor() {
        this.init();
    }

    init() {
        this.printCryptoCurrencies();
    }

    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data;

      
                // build <select> from API
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {

                    //add the <option>
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                })
            })
    }
    // prints a message 2 parameters, message, and classes

    printMessage(message, className) {
        const div = document.createElement('div');

        //add the classes
        div.className = className;

        // add the message
        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');

        messagesDiv.appendChild(div);

        // remove the message

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    //prints the result of the valuation /rate
    displayResult(result, currency) {
        // read currency


        const price = parseFloat(result.price);
        let HTMLTemplate = '';

        const prevResult = document.querySelector('#result > div');
        if(prevResult) {
            prevResult.remove();
        }

        HTMLTemplate += `
        <div class="card grey darken-1">
            <div class="card-content white-text">
                <span class="class-title">Result</span>
                    <p>The Price of ${result.id} from ${currency} is $ ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)}</p>
                    <p>Yesterday Change: $ ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(result['1d'].price_change)} </p>
                    <p>7 Day Change: $ ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(result['7d'].price_change)} </p>
                    <p>30 Day Change: $ ${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(result['30d'].price_change)} </p>
            </div>
        </div>
        `;

        // print the spinner
        this.showSpinner();

        setTimeout(() => {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;

            // hide spinner
            document.querySelector('.spinner img').remove();
        }, 2000);

        

    }

    showSpinner(){
        const spinnerGif = document.createElement('img');
        spinnerGif.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGif);
    }

}