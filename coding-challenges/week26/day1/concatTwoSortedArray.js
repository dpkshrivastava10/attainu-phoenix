'use strict';

function concatTwoArray(arr1, arr2) {
    let sortedArray = [];
   while(arr1.length || arr2.length) {
       let i = 0;
       let j = 0;
        if (!arr1.length ) { 
            sortedArray.push(arr2[j])
            arr2.shift();
        }
        if (!arr2.length ) { 
            sortedArray.push(arr1[i])
            arr1.shift();
        }
            if (arr1[i] >= arr2[j]) {
                sortedArray.push(arr2[j]);
                arr2.shift();
                
            }
            else {
                sortedArray.push(arr1[i]);
                arr1.shift();
            }
        }
   
    return sortedArray;
}

let a = [4 ,6, 7, 9, 12, 23, 24];
let b = [2, 5, 8, 10, 11];

console.log(concatTwoArray(a,b));