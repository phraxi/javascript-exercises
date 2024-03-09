const repeatString = function(str, num) {
    if( num < 0){
        return "ERROR";
    }
    let outStr='';
    for (let i=0;i<num;i++){
        outStr = outStr + str;
        console.log(outStr);
    }
    return outStr;
};

// Do not edit below this line
module.exports = repeatString;
