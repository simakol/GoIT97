/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const TRANSACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    if (typeof amount === "number" && amount > 0) {
      const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
      this.transactions.push(transaction);
      this.balance += amount;

      console.log(
        `Успішно поповнено рахунок на ${amount} гривень. Поточний баланс: ${this.balance} гривень.`
      );
    } else {
      console.error("Ви внесли не валідні дані!");
    }
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
      const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;

      console.log(
        `Успішно знято ${amount} гривень. Поточний баланс: ${this.balance} гривень.`
      );
    } else {
      console.error("Ви внесли не валідні дані!");
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
    return null;

    // !=======

    // return id > this.transactions.length - 1 ? null : this.transactions[id];
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    if (!Object.values(TRANSACTIONS).includes(type)) {
      console.error("Такого типу транзакцій не існує");
    }
    
    let total = 0;

    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log(account.getBalance());

account.deposit(8000);
account.deposit(1000);
account.deposit(500);
account.withdraw(1500);
account.withdraw(15000);
account.withdraw(-88);
account.withdraw("hello");
account.withdraw(800);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionDetails(9));
console.log(account.getTransactionDetails(3));

console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));

console.log(account);
