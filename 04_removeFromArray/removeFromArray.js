const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
}
    return arr;
};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
// Do not edit below this line
module.exports = removeFromArray;
