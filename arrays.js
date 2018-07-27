var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array,element){
 return [element,...array ]
}

function destructivelyRemoveElementFromBeginningOfArray (array,element){
 array.unshift (element)
 return array
}