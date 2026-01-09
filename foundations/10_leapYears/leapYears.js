const leapYears = function(year) {
    //if (year % 400 === 0 && || year % 4 === 0) return true;
    //return false;

   return year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0) ? true : false;
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
