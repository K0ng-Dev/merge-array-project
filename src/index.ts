// src/index.ts

import { merge } from './merge';

const collection_1: number[] = [1, 6, 9];
const collection_2: number[] = [8, 3, 2];
const collection_3: number[] = [4, 5, 7];

console.log(`Collection 1: ${collection_1.join(', ')}.`);
console.log(`Collection 2: ${collection_2.join(', ')}.`);
console.log(`Collection 3: ${collection_3.join(', ')}.`);

const result = merge(
    collection_1, 
    collection_2, 
    collection_3
);

console.log(`Merged Result: ${result.join(', ')}.`);

if (result.length === 0){
    console.log('Result array is empty.');
} else {
    const min_result = result[0];
    const max_result = result[result.length - 1];

    console.log(`Min result value is ${min_result}.`);
    console.log(`Max result value is ${max_result}.`);
}
