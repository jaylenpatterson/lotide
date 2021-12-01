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
* `takeUntil(arr, callback)`: Removes a section of the array until the callback function finds the cut off point.
* `findKey(obj, callback)`: Finds the object key pair that matches with the callback function.
* `assertEqual(actual, expected)`: Assertion function that compares two values that aren't an object or string.
* `flatten(arr)`: Returns a one dimensional array when passed an array of nested arrays.
* `without(source, remove)`: Removes all items from source that are in the remove array then returns a new array.
* `assertArraysEqual(arr1, arr2)`: Assertion function that compares two Arrays.
* `findKeyByValue(obj, value)`: Finds the key of an object by inputting the value that corresponds to that key.
* `letterPositions(str)`: Loops through an array, returns an object that contains each letter in the array and all of its index positions for every instance of that letter.
* `countOnly(arr, obj)`:Loops through an array of true names and false names then returns a object that stores the amount of times each true name appears in the array.
* `countLetters(str)`: Takes a string and stores all of its letters in an object. Returns a letter, number pair of each letter and all of its instances in the str.
* `eqArrays(actual, expected)`: Checks if two arrays are equal.
* `eqObjects(object1, object2)`:  Checks if two objects are equal.
* `assertObjectsEqual(actual, expected)`: Assertion function that compares two objects.