import { expect, describe, test } from 'vitest';
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
})

