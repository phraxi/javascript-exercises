/*Leap years are years divisible by four 
 years div by 100 no leap year
 unless they are divisible by 400 */
const isLeapYear = function(year) {
    if(year % 400 == 0){
        return true;
    }
    if (year % 100 == 0){
        return false;
    }
    if (year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
};

const isLeapYear2 = function(year){
    return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0 ));
}

// Do not edit below this line
module.exports = isLeapYear;
