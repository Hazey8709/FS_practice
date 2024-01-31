/*
Fortin, Jordan
1/29/24
3.6 HTML Forms
*/

// //* Conversion Stats
// 1 Gallon =
//          Quart	4 Quarts
//          Pint	8 Pints
//          Cups	16 Cups

//! Problem #1

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

            //s console.log("Quarts:", quarts);
        } else if (document.querySelector("#convertPints").checked) {
            let pints = gallons * 8;

            document.querySelector("#pintsReturn").innerText = pints;

            //s console.log("Pints:", pints);
        } else if (document.querySelector("#convertCups").checked) {
            let cups = gallons * 16;

            document.querySelector("#cupsReturn").innerText = cups;

            //s console.log("Cups:", cups);
        }
    }
});

document.querySelector("#resetBtn").addEventListener("click", function () {
    document.querySelector("#quartsReturn").innerText = 0;
    document.querySelector("#pintsReturn").innerText = 0;
    document.querySelector("#cupsReturn").innerText = 0;

    console.log("Conversions Cleared!");
});

//! Problem # 2

document.querySelector("#resultBtn").addEventListener("click", function (e) {
    let dvd_Col = parseInt(document.querySelector("#dvds").value);
    let blueRay_Col = parseInt(document.querySelector("#bluRays").value);
    let ultraViolet_Col = parseInt(
        document.querySelector("#ultraViolets").value
    );
    let movTotal = dvd_Col + blueRay_Col + ultraViolet_Col;

    if (movTotal < 50) {
        let message = `Your collection contains only #${movTotal} movies, which makes you a bronze star member.`;

        document.querySelector("#picReturn").getAttribute;
        document.querySelector("#movieAmountReturn").innerText = message;
        document.querySelector("#picReturn").style.visibility = "visible";
    } else if (movTotal >= 50 && movTotal < 100) {
        let message = `Your collection contains only #${movTotal} movies, which makes you a silver star member.`;

        document.querySelector("#picReturn").getAttribute;
        document.querySelector("#movieAmountReturn").innerText = message;
        document.querySelector("#picReturn").src = "img/silverStar.jpg";
        document.querySelector("#picReturn").style.visibility = "visible";
    } else if (movTotal >= 100) {
        let message = `Your collection contains only #${movTotal} movies, which makes you a gold star member.`;

        document.querySelector("#picReturn").getAttribute;
        document.querySelector("#movieAmountReturn").innerText = message;
        document.querySelector("#picReturn").src = "img/goldStar.jpg";
        document.querySelector("#picReturn").style.visibility = "visible";
    }
});

document.querySelector("#dvds").innerText = 0;
document.querySelector("#bluRays").innerText = 0;
document.querySelector("#ultraViolets").innerText = 0;
