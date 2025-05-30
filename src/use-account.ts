import { Account } from "./account";

let account = new Account('savings');
console.log(`Account type: ${account.type}`);
console.log(`Account balance: ${account.balance}`);
account.deposit(10);
console.log(`Account balance after deposit: ${account.balance}`);
account.withdraw(5);
console.log(`Account balance after withdrawal: ${account.balance}`);
try {
    account.withdraw(-10);
}
catch(e) {
    console.log(e.message);
}
console.log(`Account balance after attempt to withdraw negative amount: ${account.balance}`);
try {
    account.withdraw(100);
}
catch(e) {
    console.log(e.message);
}
console.log(`Account balance after attempt to overdraw: ${account.balance}`);