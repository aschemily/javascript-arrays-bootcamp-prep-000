var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array,element){
 return [element,...array ]
}

function destructivelyAddElementFromBeginningOfArray (array,element){
 array.unshift (element)
 return array
}