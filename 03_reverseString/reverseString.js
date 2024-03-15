
// reverse String with Array operations
const reverseStringArray = function(str) {
    let rev=[str.length];
    for (let i =str.length; i>=0;i--){
        rev[str.length-i] = str[i-1];

    }

    let revStr = rev.join("");
    return revStr;
};

// with String Operations (concat) slightly faster then reverseStringArary()
const reverseString = function(str) {
    let rev="";
    for (let i =str.length; i>0;i--){
        rev= rev.concat(str[i-1]);
    }
    return rev;
};

reverseStringArray("hello");
// Do not edit below this line
module.exports = reverseString;
