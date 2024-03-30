window.onload = function() {
    const apiKey = "MPYYIBtS1F57AX5gJezgBweV";
    const apiUrl = "https://fxpricing.com/fx-widget/forex-cross-rates.php?symbol=EUR,USD,CHF,JPY,GBP,NZD,AED,INR&fcs_link=hide&click_target=blank&theme=dark&tm-cr=212529&hr-cr=FFFFFF13&flags=circle&font=Arial, sans-serif";

    // Fetch the data from the API
    fetch(apiUrl, {
        headers: {
            'Authorization': 'Bearer ' + apiKey
        }
    })
    .then(response => response.text())
    .then(data => {
        // Inject the widget HTML into the container
        document.getElementById('fx-widget-container').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
};

