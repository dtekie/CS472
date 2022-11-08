
'use-strict'

//1
function max(a,b){
    if (a >= b){
    return a;
    }
    else {
        return b;
    }
}

//2
function maxThree(a,b,c){
    return a > b ? (a > c ? a : c) : (b > c ? b : c) ;
    }
console.log(max(10,7));
console.log(maxThree(12,6,30));

//3
function isVowel(x){
    if (x.length ===1)
        return "aeiuo".includes(x);
    return false;
}

//4a
function sum(arr){
    let sum = 0;
    for(let i=0; i< arr.length; i++){
        sum = sum+=arr[i];
    }
    return sum;
}
//4b
function multiply(arr){
    let product = 1;
    for(let i=0; i< arr.length; i++){
        product = product*=arr[i];
    }
    return product;
}

//5
function reverse(str){
    let reversed = "";
    for(let i=str.length-1; i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}
//6
function findLongestWord(arr){
    let longestWordLength = arr[0].length;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > longestWordLength){
            longestWordLength = arr[i].length;
        }
        return longestWordLength;
    }
}

//7
function filterLongWords(arr,i){
    return arr.filter(a => a.length > i);
}
//8
function computeSumOfSquares(arr){
    return arr.map(a => a * a).reduce((a,b) => a + b);
}

//9
function printOddNumbersOnly(arr){
    arr.filter(a => a%2!==0).forEach(a=>console.log(a));
}
//10
function computeSumOfSquaresOfEvensOnly(arr){
    return arr.filter(a=>a%2===0).map(a=>a*a).reduce((a,b)=>a+b);

}

//11a
function sumUsingReduce(arr){
    return (arr.reduce((a,b)=> a+b));
}
//11b
function multiplyUsingReduce(arr){
    return (arr.reduce((a,b)=> a*b));
}

//12

//13
function findFibo(n,a,b){
    let sum = a+b;
    for (let i = 1; i<n; i++){
        console.log(a);
        a = b;
        b = sum;
    }


}

//8 use map and reduce
//0 for each
//10 filter, map, reduce
//12 for each max and second
//13 fibonacci
console.log(max(10,7));
console.log(maxThree(12,6,30));
console.log(isVowel("e"));
console.log(sum([1,2,3,4,5]));
console.log(multiply([1,2,3,4,5]));
console.log(reverse("daniel"));
console.log(findLongestWord(["daniel","weldehawa","Tekie"]));
console.log(filterLongWords(["daniel","weldehawa","Tekie"],7));
console.log(computeSumOfSquares([1,2,3]))
printOddNumbersOnly([1,2,3,4,5]);
console.log(sumUsingReduce([1,2,3,4,5]));
console.log(multiplyUsingReduce([1,2,3,4,5]));
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4,5,6]))
console.log(findFibo(5,0,1))



