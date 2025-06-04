import { expect, describe, test, it } from 'vitest';
import { Account } from '../src/account';

describe('Account tests', () => {

    test('Deposit', () => {

        let account = new Account('checking');
    
        account.deposit(10);
    
        expect(account.balance).toEqual(10);
    })
    
    test('Deposit, then withdraw', () => {
    
        let account = new Account('savings');
    
        account.deposit(10);
    
        account.withdraw(5);
    
        expect(account.balance).toEqual(5);
    })

    test('Depositing a negative amount throws expected error', () => {

        let account = new Account('checking');

        expect(() => account.deposit(-10)).toThrowError('Please supply an amount larger than 0');
    })

    test('Adding interest to a checking account throws expected error', () => {

        let account = new Account('checking');

        expect(() => account.add_interest()).toThrowError('You cannot add interest to a checking account');
    })

    test('A savings account with a balance under or equal to 100000 gets 1 percent interest', () => {

        let account = new Account('savings');

        account.deposit(100000);

        account.add_interest();

        expect(account.balance).toEqual(101000);
    })

    test('A savings account with a balance over 100000 gets 2 percent interest', () => {

        let account = new Account('savings');

        account.deposit(120000);

        account.add_interest();

        expect(account.balance).toEqual(122400);
    })

    describe('Test add_interest() using a parameterized test', () => {

        const testCases : [initialBalance: number, number][] = [
            [100000, 101000],
            [120000, 122400]
        ]

        testCases.forEach(([initialBalance, expectedBalanceAfterInterest]) => {
            test(`An initial balance of ${initialBalance} should become ${expectedBalanceAfterInterest} after interest`, () => {

                let account = new Account('savings');

                account.deposit(initialBalance);

                account.add_interest();

                expect(account.balance).toEqual(expectedBalanceAfterInterest);
            })  
        })
    })
})

