export class Account {

    private _type: string;
    private _balance: number;

    constructor(type: string) {
        this._type = type;
        this._balance = 0;
    }

    public get type() {
        return this._type;
    }

    public get balance() {
        return this._balance;
    }

    public withdraw(amount: number) : void {
        if (amount <= 0) {
            throw new Error('Please supply an amount larger than 0');
        }

        if (this._type == 'savings' && amount > this._balance) {
            throw new Error('You cannot overdraw on a savings account');
        }

        this._balance -= amount;
    }

    public deposit(amount: number) : void {
        if (amount <= 0) {
            throw new Error('Please supply an amount larger than 0');
        }

        this._balance += amount;
    }

    public add_interest() {

        if (this._type == 'checking') {
            throw new Error('You cannot add interest to a checking account');
        }

        if (this._balance <= 100000) {
            this._balance *= 1.01;
        }
        else {
            this._balance *= 1.02;
        }
    }
}