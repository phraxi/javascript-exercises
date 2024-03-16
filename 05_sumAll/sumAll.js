const sumAll = function(start, end) {
    if (typeof start !== 'number'|| typeof end !=='number'){
        return "ERROR";
    }
    if (start < 0 || end < 0){
        return "ERROR";
    }
    if (start > end){
        let tmp = start;
        start = end;
        end = tmp;
    }
    let arr=[];
    let sum=0;
    for (let i=start;i<=end;i++){
        arr.push(i);
    }s
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
        return sum;
};

sumAll(3,5);
// Do not edit below this line
module.exports = sumAll;
