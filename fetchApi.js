const fetch = require ('node-fetch')

/*fetch ('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    
    .catch((error) => {
        console.log(error)
    })*/

    async function getCoin() {
        try {
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const data = await response.json();
            let BitcoinList = "";
            Array.forEach(bitcoin => {
                BitcoinList += `${bitcoin['name']} `;
                
            });
            //crear archivo
            fs.writeFile('bitcoin.csv', BitcoinList,(error) => {
                if(error){
                    console.log(error);
                    return;
                }
                console.log('se ha creado el archivo');
            })
        }catch(error){
            console.log(error)
        }
    }
getCoin();
