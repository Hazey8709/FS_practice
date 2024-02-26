class Car {
    constructor(brand, name, miles, driveType, year) {
        this.brand = brand;
        this.name = name;
        this.miles = miles;
        this.driveType = driveType;
        this.year = year;
    }

    displayInfo() {
        return `Car: ${this.name} (${this.brand}), Miles: ${this.miles}, Drive Type: ${this.driveType}, Year: ${this.year}`;
    }
}

class Main {
    constructor() {
        this.cars = (JSON.parse(localStorage.getItem("cars")) || []).map(
            (carData) =>
                new Car(
                    carData.brand,
                    carData.name,
                    carData.miles,
                    carData.driveType,
                    carData.year
                )
        );

        this.addButton = document.getElementById("addButton");
        this.displayButton = document.getElementById("displayButton");
        this.resetButton = document.getElementById("resetBtn");
        this.output = document.getElementById("output");

        //s Events
        this.addButton.addEventListener("click", this.add.bind(this));
        this.displayButton.addEventListener("click", this.display.bind(this));

        this.resetButton.addEventListener("click", this.resetForm.bind(this));
    }

    add() {
        const brand = document.getElementById("brand").value;
        const name = document.getElementById("name").value;
        const miles = parseInt(document.getElementById("miles").value, 10);
        const driveType = document.getElementById("driveType").value;
        const year = parseInt(document.getElementById("year").value, 10);

        if (!document.getElementById("carForm").checkValidity()) {
            alert("Please fill in all the fields with valid data.");
            return;
        }

        //s Find & Check for Duplicate
        const existingCar = this.cars.find(
            (car) => car.miles === miles && car.year === year
        );

        if (existingCar) {
            alert("Car with the same Miles and Year already added previously.");
            return;
        }

        const car = new Car(brand, name, miles, driveType, year);
        this.cars.push(car);

        //s Update local storage
        localStorage.setItem("cars", JSON.stringify(this.cars));

        //! Update average miles with the new car
        // const existingAverage = Utility.calculateAverageMiles(null, 0, 0);
        // const updatedAverage = Utility.calculateAverageMiles(this.cars);
        // const updatedAverage = Utility.calculateAverageMiles(
        //     car,
        //     existingCar,
        //     this.cars.length
        // );

        //s Confirmation Message
        console.log(`${brand}, ${name} added to list!`);
        alert(`${brand}, ${name} added to list!`);

        this.resetForm();

        //! // Display all with the updated average
        // this.display(updatedAverage);
    }

    //s Reset Form
    resetForm() {
        const brandInput = document.getElementById("brand");
        const nameInput = document.getElementById("name");
        const milesInput = document.getElementById("miles");
        const driveTypeInput = document.getElementById("driveType");
        const yearInput = document.getElementById("year");

        brandInput.value = "";
        nameInput.value = "";
        milesInput.value = "";
        driveTypeInput.value = "rwd"; // Set a default
        yearInput.value = "";
    }

    display() {
        this.output.innerHTML = "";

        if (this.cars.length === 0) {
            console.log("No cars to display.");
            alert("No cars to display.");
            return;
        }

        const averageMiles = Utility.calculateAverageMiles(this.cars);

        //s Log
        console.log("Average Miles Calculation:", averageMiles);

        this.cars.forEach((car) => {
            const carInfo = document.createElement("p");
            carInfo.textContent = `${car.displayInfo()}, Average Miles per Year: ${averageMiles.toFixed(
                2
            )}`;
            this.output.appendChild(carInfo);
        });
    }
}

(() => {
    const app = new Main();
})();
