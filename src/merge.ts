// src/merge.ts

// Merge three sorted arrays into a single sorted array
export function merge(
    collection_1: number[], 
    collection_2: number[], 
    collection_3: number[]
): number[] {
    
    // Store merged result
    const result: number[] = [];

    // Pointer
    let i = 0;
    let j = collection_2.length - 1;
    let k = 0;
    
    // Continue until all arrays are fully processed
    while (
    i < collection_1.length ||
    j >= 0 ||
    k < collection_3.length

    ) {
        // Get current values from each array
        const v1 = (i < collection_1.length ? collection_1[i] : Infinity) ?? Infinity;
        const v2 = (j >= 0 ? collection_2[j] : Infinity) ?? Infinity;
        const v3 = (k < collection_3.length ? collection_3[k] : Infinity) ?? Infinity;
        
        // Select the smallest value among the three arrays
        if (v1 <= v2 && v1 <= v3) {
            result.push(v1);
            i++;
        } else if (v2 <= v1 && v2 <= v3) {
            result.push(v2);
            j--; 
        } else {
            result.push(v3);
            k++;
        }
    }
    // Return merged sorted array
    return result;
}
