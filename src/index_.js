var _a, _b;
var awesome = 'You must pay me';
awesome.toLowerCase();
document.getElementsByTagName('p')[0].innerText = awesome;
// primatives
var applyDiscount = function (price, discount, giveToCharity) {
    if (discount === void 0) { discount = 50; }
    var newPrice = price - (price * discount) / 100;
    if (giveToCharity) {
        newPrice--;
    }
    return newPrice;
};
var finalPrice = applyDiscount(200, 50, true);
var price = "$".concat(finalPrice, " Dollars!!");
document.getElementsByTagName('h2')[0].innerText = price;
console.log('final price', finalPrice);
// functions
var printCoords = function (coords) {
    console.log(coords.lat);
    console.log(coords.lng);
};
var user = { firstName: 'Codito', lastName: 'Dev' };
var displayUser = function (user) {
    var _a;
    var firsName = user.firstName.toUpperCase();
    var lastName = (_a = user.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    document.getElementsByTagName('h1')[0].innerText = "".concat(firsName, " ").concat(lastName);
};
displayUser(user);
var persons = [
    {
        name: 'James',
        job: 'Front-end',
        age: 28,
        isHappy: true,
        friendList: [{ name: 'Bob', job: 'Back-end', age: 44 }],
        sayHi: function (color) {
            console.log(color);
        },
    },
    { name: 'Bob', job: 'Back-end', age: 44 },
    { name: 'Codito', job: 'Full Stack', age: 36 },
];
(_b = (_a = persons[0]).sayHi) === null || _b === void 0 ? void 0 : _b.call(_a, 'red');
var formatedList = persons.map(function (person) {
    return "<li>".concat(person.name, " is ").concat(person.age, " and knows ").concat(person.job, " development</li>");
});
var liListString = formatedList.join('');
document.getElementById('app').innerHTML = "<ul>".concat(liListString, "</ul>");
// Interfaces
var Vehicle = /** @class */ (function () {
    function Vehicle(speed, brand) {
        var _this = this;
        this.setBrand = function (newBrand) {
            _this.brand =
                newBrand[0].toUpperCase() +
                    newBrand.slice(1, newBrand.length).toLowerCase();
        };
        this.speed = speed;
        this.brand = brand;
    }
    return Vehicle;
}());
var polestar = new Vehicle(250, 'Polestar 2');
console.log(polestar.brand);
polestar.setBrand('polestar iii');
console.log(polestar.brand);
