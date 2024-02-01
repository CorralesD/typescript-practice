// /// Practice
// console.log('Lets Go');

// class BankAccount {
//   private id: number;
//   private balance: number;
//   private interesRate: number;
//   private interestCeiling: number;
//   private favoriteBankAcounts: BankAccount[] = [];

//   constructor(
//     id: number,
//     balance: number,
//     interesRate: number,
//     interestCeiling: number
//   ) {
//     this.id = id;
//     this.balance = balance;
//     this.interesRate = interesRate;
//     this.interestCeiling = interestCeiling;
//   }

//   deposit = (amount: number): void => {
//     this.balance += amount;
//   };

//   withdraw = (amount: number): void => {
//     if (this.balance - amount < 0) {
//       throw new Error(`Cannot withdraw $${amount}, Insufficient funds!`);
//     }
//     this.balance -= amount;
//   };

//   getBalance = (): number => {
//     return this.balance;
//   };

//   transferMoney = (amount: number, account: BankAccount): void => {
//     this.withdraw(amount);
//     account.deposit(amount);
//   };

//   getMensualInterest = (): number => {
//     if (this.balance > this.interestCeiling) {
//       return this.interestCeiling * this.interesRate;
//     } else {
//       return this.balance * this.interesRate;
//     }
//   };

//   addAccountToFavorites = (account: BankAccount): void => {
//     this.favoriteBankAcounts.push(account);
//   };

//   getFavoriteAccounts = (): BankAccount[] => {
//     return this.favoriteBankAcounts;
//   };

//   removeFavoriteAccountById = (id: number): void => {
//     const indexToRemove = this.favoriteBankAcounts.findIndex(
//       (account: BankAccount) => account.id === id
//     );
//     if (indexToRemove === -1) {
//       throw new Error('Account not found in favorites');
//     }
//     this.favoriteBankAcounts.splice(indexToRemove, 1);
//   };
// }

// const checkings = new BankAccount(1, 1000, 0.01, 50000);
// const account1 = new BankAccount(2, 20000, 0.01, 50000);
// const account2 = new BankAccount(3, 50000, 0.01, 50000);

// console.log('start checking account balance $', checkings.getBalance());
// checkings.deposit(1000);
// console.log('deposit $1000 to checking account');
// checkings.addAccountToFavorites(account1);
// checkings.addAccountToFavorites(account2);
// const savings = checkings.getFavoriteAccounts()[0];
// console.log('new checking account balance $', checkings.getBalance());
// checkings.transferMoney(2000, savings);
// console.log('transfer $2000 to savings');
// console.log('savings accounts ', savings.getBalance());
// console.log('checking accounts balance $', checkings.getBalance());

// checkings.removeFavoriteAccountById(3);
// console.log(checkings.getFavoriteAccounts().length);

// try {
//   checkings.withdraw(1);
//   console.log('withdraw $1');
//   console.log('checking accounts balance $', checkings.getBalance());
// } catch (err: unknown) {
//   console.log((err as Error).message);
// }

abstract class VideoGame {
  protected name: string;
  protected genre: string;
  protected platform: string;

  constructor(name: string, genre: string, platform: string) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
  }

  abstract play(): void;

  getName = (): string => {
    return this.genre;
  };
}

class RpgGame extends VideoGame {
  constructor(name: string, platform: string) {
    super(name, 'RPG', platform);
  }

  play = (): void => {
    console.log('Explore!');
  };
}

class FightingGame extends VideoGame {
  constructor(name: string, platform: string) {
    super(name, 'Fighting', platform);
  }

  play = (): void => {
    console.log('Fight!');
  };
}

const smashBros = new FightingGame('Super Smash Bros', 'Switch');
const finalFantasy = new RpgGame('Final Fantasy', 'PS5');

finalFantasy.play();

// Absatracts

abstract class Spell {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    abstract cast(): void;
  }
  
  enum FireSpellName {
    FireBolt = "Fire Bolt",
    FireWall = "Fire Wall",
    BigBang = "Big Bang",
  }
  
  enum FrostSpellName {
    FrostBolt = "Frost Bolt",
    Blizzard = "Blizzard",
  }
  
  class FireSpell extends Spell {
    readonly burningDamage = 20;
    constructor(name: FireSpellName) {
      super(name);
    }
    cast() {
      console.log(
        this.name,
        ` - Boom you are burning the enemy ! It took ${this.burningDamage} damages`
      );
    }
  }
  
  class FrostSpell extends Spell {
    readonly slowingRate = 0.5;
  
    constructor(name: FrostSpellName) {
      super(name);
    }
  
    cast() {
      console.log(
        this.name,
        ` - Brrr you are freezing the enemy,  it's slowed by ${this.slowingRate}`
      );
    }
  }
  
  type SpellName<S> = S extends FireSpell
    ? FireSpellName
    : FrostSpellName;
  
  class Wizard<S extends Spell> {
    private spellBook: S[] = [];
  
    constructor(spellBook: S[]) {
      this.spellBook = spellBook;
    }
  
    castAllAtOnce() {
      this.spellBook.forEach((spell: S) => {
        spell.cast();
      });
    }
  
    castFromSpellBook(name: SpellName<S>) {
      const spell = this.spellBook.find(
        (spell) => spell.name == name
      );
      if (spell) {
        spell.cast();
      } else {
        throw new Error(
          "You don't have this spell in your spell book !"
        );
      }
    }
  }

const fireSpells: FireSpell[] = [
  new FireSpell(FireSpellName.FireBolt),
  new FireSpell(FireSpellName.FireWall),
];

const frostSpells: FrostSpell[] = [
  new FrostSpell(FrostSpellName.FrostBolt),
  new FrostSpell(FrostSpellName.Blizzard),
];
const fireWizard = new Wizard(fireSpells);
const frostWizard = new Wizard(frostSpells);

fireWizard.castAllAtOnce();

try {
  fireWizard.castFromSpellBook(FireSpellName.BigBang);
} catch (err: unknown) {
  console.log('Error : ', (err as Error).message);
}

frostWizard.castAllAtOnce();

frostWizard.castFromSpellBook(FrostSpellName.Blizzard);
