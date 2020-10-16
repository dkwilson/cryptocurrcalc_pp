class CryptoAPI {

    // query the rest api with a currency and cryptocurrency
    async queryAPI(currency, cryptocurrency){
        const apiKey = config.apiKey;
        const url = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${cryptocurrency}&convert=${currency}`);

        const result = await url.json();

        // return the object
        return result;
    }

    //get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        const apiKey = config.apiKey;
        const url = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${apiKey}`);

        //return json
        const cryptocurrencies = await url.json();

        return cryptocurrencies;

    }
}