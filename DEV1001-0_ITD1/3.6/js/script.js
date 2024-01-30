/*
Fortin, Jordan
1/29/24
3.6 HTML Forms
*/

// //! Conversion Stats
// 1 Gallon =
//          Quart	4 Quarts
//          Pint	8 Pints
//          Cups	16 Cups

document.querySelector("#submitBtn").addEventListener("click", function (e) {
    //
    //

    if (document.querySelector("#gallons").reportValidity()) {
        let gallons = parseInt(document.querySelector("#gallons").value);

        document.querySelector("#quartsReturn").innerText = 0;
        document.querySelector("#pintsReturn").innerText = 0;
        document.querySelector("#cupsReturn").innerText = 0;

        console.log("Gallons To Convert:", gallons);
        if (document.querySelector("#convertQuarts").checked) {
            let quarts = gallons * 4;

            document.querySelector("#quartsReturn").innerText = quarts;

            console.log("Quarts:", quarts);
        } else if (document.querySelector("#convertPints").checked) {
            let pints = gallons * 8;

            document.querySelector("#pintsReturn").innerText = pints;

            console.log("Pints:", pints);
        } else if (document.querySelector("#convertCups").checked) {
            let cups = gallons * 16;

            document.querySelector("#cupsReturn").innerText = cups;

            console.log("Cups:", cups);
        }
    }
});

document.querySelector("#resetBtn").addEventListener("click", function () {
    document.querySelector("#quartsReturn").innerText = 0;
    document.querySelector("#pintsReturn").innerText = 0;
    document.querySelector("#cupsReturn").innerText = 0;

    console.log("Clicked Conversions Cleared!");
});
