'use strict';
 /*
 1.1
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
  */
//es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price / 100 * 25);
};

const product1 = new Product ('dress', 1000);
product1.make25PercentDiscount();
console.log(product1);
const product2 = new Product ('jeans', 2000);
product2.make25PercentDiscount();
console.log(product2);

//или
const ProductNew = {
    nameNew: 'productShop',
    priceNew: null,
    make25PercentDiscountNew: function () {
        this.priceNew = this.priceNew - (this.priceNew / 100 * 25);
    }
};

let product3 = Object.create(ProductNew);
product3.nameNew = 'shirt';
product3.priceNew = 500;
product3.make25PercentDiscountNew();
console.log(product3);

//es6

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

const product4 = new ProductEs6('umbrella', 300);
product4.make25PercentDiscount();
console.log(product4);