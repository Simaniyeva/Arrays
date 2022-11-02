const Products = [{
        ProductId: 1,
        ProductName: "Phone",
        ProductPrice: 500
    },
    {
        ProductId: 2,
        ProductName: "Laptop",
        ProductPrice: 1000
    },
    {
        ProductId: 3,
        ProductName: "Scanner",
        ProductPrice: 300
    },
    {
        ProductId: 4,
        ProductName: "PC",
        ProductPrice: 1300
    },
    {
        ProductId: 5,
        ProductName: "Tv",
        ProductPrice: 1600
    },
    {
        ProductId: 6,
        ProductName: "Camera",
        ProductPrice: 550
    },
    {
        ProductId: 7,
        ProductName: "PowerBank",
        ProductPrice: 60
    },
    {
        ProductId: 8,
        ProductName: "Keyboard",
        ProductPrice: 72
    },
    {
        ProductId: 9,
        ProductName: "Wireless Mouse",
        ProductPrice: 50
    },
    {
        ProductId: 10,
        ProductName: "Speaker",
        ProductPrice: 65
    }
];
let count = 0;
let sum = 0;
for (let i = 0; i < Products.length; i++) {
    if (Products[i].ProductId % 2 != 0) {
        sum += Products[i].ProductPrice;
        count++;
    }
}
console.log("Average: " + sum / count);