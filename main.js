/*
    https://currencyfreaks.com/
    present free API
*/

fetch("https://api.currencyfreaks.com/latest?apikey=237ddf4792744326bcac67bb43148e27")
.then((result) => {
    let myData = result.json();
    return myData
}).then((result) => {
    let currency = Object.keys(result.rates);
    currency.forEach(ele => {
        let from = document.querySelector("#from");
        let opt = document.createElement("option");
        opt.innerHTML = ele;
        from.appendChild(opt);
    });
    let arrowIcon = document.querySelector(".fa-solid");
    let convert = from.cloneNode(true);
    arrowIcon.after(convert);
    convert.id = "convert";
    let toLabel = document.createElement("label");
    toLabel.innerHTML = "To:";
    toLabel.setAttribute("for", "convert");
    convert.before(toLabel)
    let amount = document.querySelector("#amount");
    let myPrice = document.querySelector(".price");
    document.forms[0].onsubmit = (e) => {
        e.preventDefault();
        myPrice.innerHTML = (amount.value / result.rates[from.value] * result.rates[convert.value]).toFixed(2);
    };
    arrowIcon.onclick = () => {
        [from.value, convert.value] = [convert.value, from.value];
    }
})