let awesome: string = 'You must pay me';

awesome.toLowerCase();

document.getElementsByTagName('p')[0].innerText = awesome;

// primatives

const applyDiscount = (
  price: number,
  discount: number = 50,
  giveToCharity?: boolean
): number => {
  let newPrice = price - (price * discount) / 100;

  if (giveToCharity) {
    newPrice--;
  }

  return newPrice;
};

let finalPrice = applyDiscount(200, 50, true);

let price = `$${finalPrice} Dollars!!`;

document.getElementsByTagName('h2')[0].innerText = price;

console.log('final price', finalPrice);

// functions

const printCoords = (coords: { lat: string; lng: string }) => {
  console.log(coords.lat);
  console.log(coords.lng);
};

const user = { firstName: 'Codito', lastName: 'Dev' };

const displayUser = (user: { firstName: string; lastName?: string }) => {
  const firsName = user.firstName.toUpperCase();
  const lastName = user.lastName?.toUpperCase();
  document.getElementsByTagName('h1')[0].innerText = `${firsName} ${lastName}`;
};

displayUser(user);

// objects

interface Person {
  name: string;
  job: string;
  age: number;
  isHappy?: boolean;
  friendList?: Person[];
  sayHi?: (color: string) => void;
}

const persons: Person[] = [
  {
    name: 'James',
    job: 'Front-end',
    age: 28,
    isHappy: true,
    friendList: [{ name: 'Bob', job: 'Back-end', age: 44 }],
    sayHi: (color: string) => {
      console.log(color);
    },
  },
  { name: 'Bob', job: 'Back-end', age: 44 },
  { name: 'Codito', job: 'Full Stack', age: 36 },
];

persons[0].sayHi?.('red');

const formatedList: string[] = persons.map((person: Person): string => {
  return `<li>${person.name} is ${person.age} and knows ${person.job} development</li>`;
});

const liListString: string = formatedList.join('');

document.getElementById('app')!.innerHTML = `<ul>${liListString}</ul>`;

// Interfaces

class Vehicle {
  speed: number;
  brand: string;

  constructor(speed: number, brand: string) {
    this.speed = speed;
    this.brand = brand;
  }

  setBrand = (newBrand: string): void => {
    this.brand =
      newBrand[0].toUpperCase() +
      newBrand.slice(1, newBrand.length).toLowerCase();
  };
}

const polestar = new Vehicle(250, 'Polestar 2');
console.log(polestar.brand);
polestar.setBrand('polestar iii');
console.log(polestar.brand);
