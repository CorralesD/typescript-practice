/// Practice
console.log('Lets Go');

class BankAccount {
  private id: number;
  private balance: number;
  private interesRate: number;
  private interestCeiling: number;
  private favoriteBankAcounts: BankAccount[] = [];

  constructor(
    id: number,
    balance: number,
    interesRate: number,
    interestCeiling: number
  ) {
    this.id = id;
    this.balance = balance;
    this.interesRate = interesRate;
    this.interestCeiling = interestCeiling;
  }

  deposit = (amount: number): void => {
    this.balance += amount;
  };

  withdraw = (amount: number): void => {
    if (this.balance - amount < 0) {
      throw new Error(`Cannot withdraw $${amount}, Insufficient funds!`);
    }
    this.balance -= amount;
  };

  getBalance = (): number => {
    return this.balance;
  };

  transferMoney = (amount: number, account: BankAccount): void => {
    this.withdraw(amount);
    account.deposit(amount);
  };

  getMensualInterest = (): number => {
    if (this.balance > this.interestCeiling) {
      return this.interestCeiling * this.interesRate;
    } else {
      return this.balance * this.interesRate;
    }
  };

  addAccountToFavorites = (account: BankAccount): void => {
    this.favoriteBankAcounts.push(account);
  };

  getFavoriteAccounts = (): BankAccount[] => {
    return this.favoriteBankAcounts;
  };

  removeFavoriteAccountById = (id: number): void => {
    const indexToRemove = this.favoriteBankAcounts.findIndex(
      (account: BankAccount) => account.id === id
    );
    if (indexToRemove === -1) {
      throw new Error('Account not found in favorites');
    }
    this.favoriteBankAcounts.splice(indexToRemove, 1);
  };
}

const checkings = new BankAccount(1, 1000, 0.01, 50000);
const account1 = new BankAccount(2, 20000, 0.01, 50000);
const account2 = new BankAccount(3, 50000, 0.01, 50000);

console.log('start checking account balance $', checkings.getBalance());
checkings.deposit(1000);
console.log('deposit $1000 to checking account');
checkings.addAccountToFavorites(account1);
checkings.addAccountToFavorites(account2);
const savings = checkings.getFavoriteAccounts()[0];
console.log('new checking account balance $', checkings.getBalance());
checkings.transferMoney(2000, savings);
console.log('transfer $2000 to savings');
console.log('savings accounts ', savings.getBalance());
console.log('checking accounts balance $', checkings.getBalance());

checkings.removeFavoriteAccountById(3);
console.log(checkings.getFavoriteAccounts().length);

try {
  checkings.withdraw(1);
  console.log('withdraw $1');
  console.log('checking accounts balance $', checkings.getBalance());
} catch (err: unknown) {
  console.log((err as Error).message);
}
