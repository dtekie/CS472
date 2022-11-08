
'use-strict'

function max(a,b){
    if (a >= b){
    return a;
    }
    else {
        return b;
    }
}

function maxThree(a,b,c){
    return a > b ? (a > c ? a : c) : (b > c ? b : c) ;
    }
console.log(max(10,7));
console.log(maxThree(12,6,30));

function isVowel(x){
    isVawel = true;
    return (x === "a"|| x ==="e" || x === "i" || x ==="u" || x === "o");
}
function isVawel2(x){
    if (a.lenght > 1)
    return false;
    return ("aeiuo".includes(x))
}
//4
//8 use map and reduce
//0 for each
//10 filter, map, reduce
//12 for each max and second
//13 fibonacci
console.log(max(10,7));
console.log(maxThree(12,6,30));
console.log(isVowel("f"));
console.log(isVawel2("a"));




