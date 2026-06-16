# Merge Array Project

A TypeScript project that merges 3 sorted arrays into one sorted ascending array without using any built-in sort function.

## Problem Statement

Implement the following function:

```ts
merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[]
```

### Conditions

* `collection_1` and `collection_3`

  * already sorted in ascending order
  * from minimum → maximum

* `collection_2`

  * already sorted in descending order
  * from maximum → minimum

### Requirement

* Return a single sorted array in ascending order
* Do not use any built-in sort function

---

# Project Structure

```bash
merge-array-project/
├── src/
│   ├── merge.ts
│   └── index.ts
│
├── tests/
│   └── merge.test.ts
│
├── package.json
├── tsconfig.json
└── jest.config.cjs
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/K0ng-Dev/merge-array-project.git
```

## 2. Move Into Project Directory

```bash
cd merge-array-project
```

## 3. Install Dependencies

```bash
npm install
```

---

# Execute Project

Run the development script:

```bash
npm run dev
```

Example output:

```bash
Min result value is 1.
Max result value is 9.
```

---

# Build Project

Compile TypeScript into JavaScript:

```bash
npm run build
```

Generated files will be created in:

```bash
dist/
```

---

# Run Compiled JavaScript

```bash
npm start
```

---

# Run Unit Tests

Execute all unit tests using Jest:

```bash
npm test
```

---

# Algorithm

This project uses a:

```text
Three-pointer merge algorithm
```

### Time Complexity

```text
O(n)
```

Where:

```text
n = total number of elements
```

### Space Complexity

```text
O(n)
```

---

# Notes

* No built-in sorting methods such as:

  * `sort()`
* The solution works by comparing:

  * current value from `collection_1`
  * current value from `collection_2`
  * current value from `collection_3`
* Three pointers are used to track positions in each array.
