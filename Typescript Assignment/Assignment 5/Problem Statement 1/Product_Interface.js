var product1 = {
    id: 123,
    name: "IPhone",
    price: 100000,
    display: function () {
        console.log(this.id + " " + this.name + " " + this.price);
    }
};
console.log(product1.display());
