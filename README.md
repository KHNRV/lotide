# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @khnrv/lotide`

**Require it:**

`const _ = require('@khnrv/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


### assertArraysEqual(actualArray, expectedArray)
Function that takes in two arrays and print out if they match or not

| Param | Type | Description |
| --- | --- | --- |
| actualArray | <code>array</code> | Array to test |
| expectedArray | <code>array</code> | Array expected |

### assertEqual(actual, expected)
Compare two value and print out if they match or not 

| Param | Type | Description |
| --- | --- | --- |
| actual | <code>\*</code> | Enter the variable to test |
| expected | <code>\*</code> | Enter the expected value of the variable |

### assertObjectsEqual(actual, expected)
This function compares two objects and print out if they match or not

| Param | Type | Description |
| --- | --- | --- |
| actual | <code>\*</code> | Enter the object to test |
| expected | <code>\*</code> | Enter the expected object |

### countLetters(stringToCount)
This function takes in a sentence (as a string) and then return a count of
each of the letters in that sentence.

| Param | Type | Description |
| --- | --- | --- |
| stringToCount | <code>string</code> | Sentece to count (only alphbetical characters will be counted) |

### countOnly(allItems, itemsToCount)
Function, given an array and an object, return an object containing counts of
everything that the input object listed.

| Param | Type | Description |
| --- | --- | --- |
| allItems | <code>array</code> | an array of strings that we need to look through |
| itemsToCount | <code>object</code> | an object specifying what to count |

### eqArrays(firstArray, secondArray) ⇒ <code>boolean</code>
Function that takes in two arrays and returns true or false, based on a
perfect match.

**Returns**: <code>boolean</code> - Return whether the arrays are identical  

| Param | Type | Description |
| --- | --- | --- |
| firstArray | <code>array</code> | - |
| secondArray | <code>array</code> | - |

### eqObjects(object1, object2) ⇒ <code>boolean</code>
This function takes in two objects and returns true or false, based on a
perfect match.

**Returns**: True if both objects have identical keys with identical values.
Otherwise you get back a big fat false!  

| Param | Type |
| --- | --- |
| object1 | <code>object</code> | 
| object2 | <code>object</code> | 

### findKey(object, callback)
This function takes in an object and a callback. It scans the object and
returns the first key for which the callback returns a truthy value. If no
key is found, then it returns undefined.

| Param | Type |
| --- | --- |
| object | <code>object</code> | 
| callback | <code>callback</code> | 

### findKeyByValue(objectToSearch, valueToFind)
This function scan a given object and return the first key which contains the
given value. If no key with that given value is found, then it should return
undefined. 

| Param | Type |
| --- | --- |
| objectToSearch | <code>object</code> | 
| valueToFind | <code>\*</code> | 

### flatten(arrayToFlatten)
This function will take in an array containing elements including nested
arrays of elements, and return a "flattened" version of the array.

| Param | Type | Description |
| --- | --- | --- |
| arrayToFlatten | <code>array</code> | Array to flatten |

### head(inputArray) ⇒ <code>\*</code>
Output the value at index 0 of a given array

**Returns**: <code>\*</code> - Value at index 0 of the input array  

| Param | Type | Description |
| --- | --- | --- |
| inputArray | <code>array</code> | Input an array to find its head |

### letterPositions(sentence)
This function returns all the indices (zero-based positions) in the string
where each character is found.

| Param | Type | Description |
| --- | --- | --- |
| sentence | <code>string</code> | Sentence where to count letters |

### map(arr, callback) ⇒ <code>array</code>
This function creates a new array populated with the results of calling a
provided function on every element in the calling array.

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | Array to map |
| callback | <code>callback</code> | Edit parameters |

### middle(arrayToAnalyse) ⇒ <code>array</code>
This function takes in an array and return the middle-most element(s) of the
given array.

**Returns**: <code>array</code> - - Middle element(s) of the given array  

| Param | Type | Description |
| --- | --- | --- |
| arrayToAnalyse | <code>array</code> | Array where to find the middle element(s) |

### tail(inputArray) ⇒
For a given array, returns everything except for the first item (head).

**Returns**: - Returns a copy of the array without the first item (head)  

| Param | Type | Description |
| --- | --- | --- |
| inputArray | <code>array</code> | Input the array for which you want to return the tail |

### takeUntil(array, callback)
This function keeps collecting items from a provided array until the callback
provided returns a truthy value.

**Kind**: global function  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| callback | <code>callback</code> | 

### without(arrayToEdit, itemsToRemove) ⇒ <code>array</code>
This function take in a source array and a itemsToRemove array. It return a
new array with only those elements from source that are not present in the
itemsToRemove array.

**Returns**: <code>array</code> - New array with only those elements from source that are not
present in the itemsToRemove array  

| Param | Type | Description |
| --- | --- | --- |
| arrayToEdit | <code>array</code> | Array where to remove element from |
| itemsToRemove | <code>array</code> | Array of elements to remove from the arrayToEdit |