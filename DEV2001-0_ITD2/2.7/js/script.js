//
//

//* IIFE Function
(function () {
    const canvas = document.getElementById("chartCanvas");
    const ctx = canvas.getContext("2d");
    const form = document.getElementById("graphForm");
    const minRangeInput = document.getElementById("minRange");
    const maxRangeInput = document.getElementById("maxRange");
    const showGraphBtn = document.getElementById("showGraphBtn");
    const averageDisplay = document.getElementById("average");

    showGraphBtn.addEventListener("click", createChart);

    //* Get Random Color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createChart() {
        //* Clear previous graph
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //* Validate form inputs
        if (!form.checkValidity()) {
            alert("Please enter valid input values.");
            return;
        }

        const minRange = parseInt(minRangeInput.value);
        const maxRange = parseInt(maxRangeInput.value);

        if (minRange > maxRange) {
            alert(
                "Minimum range should be less than or equal to the maximum range."
            );
            return;
        }

        const dataPoints = [];
        let sum = 0;
        const barColors = [];

        //* Generate random numbers and calculate average
        for (let i = 0; i < 5; i++) {
            const randomNumber =
                Math.floor(Math.random() * (maxRange - minRange + 1)) +
                minRange;
            dataPoints.push(randomNumber);
            sum += randomNumber;
            barColors.push(getRandomColor());
        }

        const average = sum / dataPoints.length;
        averageDisplay.textContent = average.toFixed(2);

        //* Calculate the maximum data value
        const maxDataValue = Math.max(...dataPoints);

        //* Draw the graph (bar chart in this example)
        const barWidth = canvas.width / (2 * dataPoints.length + 1);
        const scale = canvas.height / maxDataValue;

        for (let i = 0; i < dataPoints.length; i++) {
            const x = (2 * i + 1) * barWidth;
            const height = dataPoints[i] * scale - 20;

            //s Draw the bar with a random color
            ctx.fillStyle = barColors[i];
            ctx.fillRect(x, canvas.height - height, barWidth, height);

            //s Display labels above each bar
            ctx.fillStyle = "white"; // Resetting the fill color for text

            ctx.fillText(`Random #${i + 1}`, x, canvas.height);

            //s Display the random number at bar bottom
            ctx.fillStyle = "black";
            ctx.fillText(
                dataPoints[i].toString(),
                x + barWidth / 2,
                canvas.height - height - 10
            );
        }
    }
})();
