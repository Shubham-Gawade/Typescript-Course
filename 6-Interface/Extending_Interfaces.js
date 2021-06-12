var car1 = {
    make: "Maruti",
    model: "Brezza",
    year: 2017,
    color: "red",
    numberOfDoors: 4,
    seats: 4,
    auto: false
};
for (var item in car1) {
    console.log(item + " " + car1[item]);
}
