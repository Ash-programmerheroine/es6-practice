function isLeapYear(year) {
    let remainder = year % 4;
    if(remainder==0){
       return true;
    }
    else{
        return false;
    }
    
}
const check2000 = isLeapYear(2000)
console.log(check2000);

//program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = checkLeapYear('Enter a year:1900');

checkLeapYear(year);
