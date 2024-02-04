/*
Fortin, Jordan
2/2/24
Body Mass Calculator
4.2 Final Project
*/

//! stats
//s   BMI Range                            Weight Range
// >= 35 extreme                        Extreme Obese Range
// > 29.9 up to but not including 35    Obese
// > 24.9 up to but not including 29.9  Over Weight
// > 18.5 up to but not including 24.9  Normal/ Healthy Weight
// < 18.5                               Under Weight

//* Event Listener
document.querySelector("#submit_Btn").addEventListener("click", function (e) {
    if (
        document.querySelector("#feet").reportValidity() &&
        document.querySelector("#inch").reportValidity() &&
        document.querySelector("#lbs").reportValidity()
    ) {
        let feet = parseInt(document.querySelector("#feet").value);
        let inches = parseFloat(document.querySelector("#inch").value);
        let weight = parseFloat(document.querySelector("#lbs").value);

        let convertToInches = feet * 12 + inches;
        //s BMI One Way
        // let BMI = (weight / convertToInches / convertToInches) * 703;
        //s BMI Second way (More Precise)
        let BMI = (weight / convertToInches ** 2) * 703;

        if (BMI >= 35) {
            let message = `Your BMI is ${BMI.toFixed(
                1
            )}, indicating your weight is in Extreme Obese Range for adults of your age.`;

            document.querySelector("#picReturn").getAttribute;
            document.querySelector("#BMI-Message_Return").innerText = message;
            document.querySelector("#picReturn").style.visibility = "visible";
        } else if (BMI >= 29.9 && BMI < 35) {
            let message = `Your BMI is ${BMI.toFixed(
                1
            )}, indicating your weight is in Obese Range for adults of your age.`;

            document.querySelector("#picReturn").getAttribute;
            document.querySelector("#BMI-Message_Return").innerText = message;
            document.querySelector("#picReturn").src = "img/obeseWeight.jpg";
            document.querySelector("#picReturn").style.visibility = "visible";
        } else if (BMI >= 24.9 && BMI < 29.9) {
            let message = `Your BMI is ${BMI.toFixed(
                1
            )}, indicating your weight is in Over Weight Range for adults of your age.`;

            document.querySelector("#picReturn").getAttribute;
            document.querySelector("#BMI-Message_Return").innerText = message;
            document.querySelector("#picReturn").src = "img/overWeight.jpg";
            document.querySelector("#picReturn").style.visibility = "visible";
        } else if (BMI >= 18.5 && BMI < 24.9) {
            let message = `Your BMI is ${BMI.toFixed(
                1
            )}, indicating your weight is in Normal OR Healthy Weight Range for adults of your age.`;

            document.querySelector("#picReturn").getAttribute;
            document.querySelector("#BMI-Message_Return").innerText = message;
            document.querySelector("#picReturn").src = "img/healthyWeight.jpg";
            document.querySelector("#picReturn").style.visibility = "visible";
        } else if (BMI < 18.5) {
            let message = `Your BMI is ${BMI.toFixed(
                1
            )}, indicating your weight is in Under Weight Range for adults of your age.`;

            document.querySelector("#picReturn").getAttribute;
            document.querySelector("#BMI-Message_Return").innerText = message;
            document.querySelector("#picReturn").src = "img/underWeight.jpg";
            document.querySelector("#picReturn").style.visibility = "visible";
        }

        //s Logs
        console.log("-------  LOGS  ----------");

        console.log("Inches:", inches);
        console.log("Weight:", weight);
        console.log("Weight in Inches:", convertToInches);
        console.log("BMI:", BMI.toFixed(1));
        // console.log("");
    }
});
