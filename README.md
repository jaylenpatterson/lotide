# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jaylenpatterson/lotide`

**Require it:**

`const _ = require('@jaylenpatterson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head(arr)`: finds the first index of an array.
* `tail(arr)`: Removes the first index of an array.
* `middle(arr)`: Returns the middle number or numbers of an array of numbers.
* `map(arr, callback)`: Performs a callback function on each index of an array.
* `takeUntil(arr, callback)`: 
* `findKey()`:
* `assertEqual()`:
* `flatten()`: Returns a one dimensional array when passed an array of nested arrays
* `without()`:
* `assertArraysEqual()`:
* `findKeyByValue()`:
* `letterPositions()`:
* `countOnly()`:
* `countLetters()`:
* `eqArrays()`:
* `eqObjects()`:
* `assertObjectsEqual()`: