class Utility {
    static calculateAverageMiles(cars) {
        if (!cars || cars.length === 0) {
            return 0;
        }

        const currentDate = new Date();
        const totalMilesByAge = cars.reduce((sum, car) => {
            const age = currentDate.getFullYear() - car.year;
            return sum + car.miles / age;
        }, 0);

        return totalMilesByAge / cars.length;
    }
}

//! Error updating Average miles per year. First car added will have correct average miles per year but as more is added it is updated for each car in the list.
