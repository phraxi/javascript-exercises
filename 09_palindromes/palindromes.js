const isPalindrome = function (str){
    str=prepareStr(str);
    let subStr1;
    let subStr2;
    if (str.length % 2 == 0){
        //slice sting after str.length/2
        subStr1 = str.substring(0, str.length/2);
        subStr2 = reverseStr(str.substring(str.length / 2, str.length));
    }else{
        //delete mid element and slice the string after str.length/2
        subStr1 = str.substring(0, Math.ceil(str.length/2 -1));
        subStr2 = reverseStr(str.substring(Math.round(str.length/2 ),str.length));
    }
    return (subStr1 === subStr2);
};

const reverseStr = function(str){
    return str.split("").reverse().join("");
};

const prepareStr = function(str){
    //removes special chars and whitespaces, and converts chars to lower Case
    return str.replace(/[^\w\s]/gi, '').replace(/\s/g, '').toLowerCase();
}

//let x = isPalindrome("ra c eca ####r!");
//let x = prepareStr("ra c eca ####r!");
//console.log(x);


// Do not edit below this line
module.exports = 
    isPalindrome,
    reverseStr;
