// tests/merge.spec.ts

import { merge } from '../src/merge';
describe('Merge Function Tests', () => {

    test('Should merge three arrays with equal lengths and unique values', () => {
        const collection_1: number[] = [3, 6, 9, 10];
        const collection_2: number[] = [7, 4, 1, 0];  
        const collection_3: number[] = [2, 5, 8, 11];

        const expected: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });


    test('Should handle duplicate numbers correctly', () => {
        const collection_1: number[] = [1, 2, 3, 4];
        const collection_2: number[] = [5, 4, 3, 2];  
        const collection_3: number[] = [4, 5, 6 ,7];

        const expected: number[] = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 7];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });

    
    test('Should merge arrays with different lengths', () => {
        const collection_1: number[] = [3, 8];
        const collection_2: number[] = [7, 5, 4, 2, 1];  
        const collection_3: number[] = [2, 10];

        const expected: number[] = [1, 2, 2, 3, 4, 5, 7, 8, 10];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });


    test('Should merge single-element arrays', () => {
        const collection_1 = [1];
        const collection_2 = [2];
        const collection_3 = [0];

        const expected = [0, 1, 2];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });


    test('Should return empty array when all inputs are empty', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const expected: number[] = [];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });


    test('should handle partially empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];  
        const collection_3: number[] = [2, 5, 8, 11];

        const expected: number[] = [2, 5, 8, 11];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });

    test('Should handle only collection_2 input', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [5, 4, 3, 2];
        const collection_3: number[] = [];

        const expected: number[] = [2, 3, 4, 5];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });


    test('Should merge negative numbers correctly', () => {
        const collection_1: number[] = [3, 6, 9, 10];
        const collection_2: number[] = [7, 4, 1, -1];  
        const collection_3: number[] = [2, 5, 8, 11];

        const expected: number[] = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });


    test('Should merge decimal numbers correctly', () => {
        const collection_1: number[] = [3.2, 6, 9.20, 10];
        const collection_2: number[] = [7, 5.50, 1.00, 0.99];  
        const collection_3: number[] = [2, 5.40, 8, 10.0001];

        const expected: number[] = [0.99, 1.00, 2, 3.2, 5.40, 5.50, 6, 7, 8, 9.20, 10, 10.0001];

        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });

});