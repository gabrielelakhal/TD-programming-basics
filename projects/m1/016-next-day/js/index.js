//asking user the date
let userYear = prompt("Insert the year.");
let userMonth = prompt("Insert the month.");
let userDay = prompt("Insert the day.");

//Convert string to numbers
userYear = parseInt(userYear);
userMonth = parseInt(userMonth);
userDay = parseInt(userDay);

//check if the userday is the last day of the month and increase it
function checkIfIsLastDay(userDayInput, userMonthInput, daysInMonth, userYearInput){

  //check if it is the last day or not and calculate the next day
  if(userDayInput < daysInMonth){
    userDayInput += 1;
  }else if(userMonthInput == 12 && userDayInput == daysInMonth){
    userDayInput = 1;
    userMonthInput = 1;
    userYearInput += 1;
  }else{
    userDayInput = 1;
    userMonthInput += 1;
  }
  
  //add 0 if month or day is equivalent or less of 9
  if(userMonthInput <= 9){
    userMonthInput = "0" + userMonthInput;
  }else{
    userMonthInput = userMonthInput;
  }
  if(userDayInput <= 9){
    userDayInput = "0" + userDayInput;
  }else{
    userDayInput = userDayInput;
  }
  
  //display the next day
  alert(userYearInput + "/" + userMonthInput + "/" + userDayInput);
}

//create a function to check if the year is a leap year and update the number of days in the month
function leapYear(userYearInput){
  if(userYearInput % 400 == 0) {
    checkIfIsLastDay(userDay, userMonth, 29, userYear);
  }else if(userYearInput % 100 != 0){
    checkIfIsLastDay(userDay, userMonth, 28, userYear);
  }else if(userYearInput % 4 == 0){
    checkIfIsLastDay(userDay, userMonth, 29, userYear);
  }else {
    checkIfIsLastDay(userDay, userMonth, 28, userYear);
  }
}

//check wich month is and execute
if(userMonth == 2){
  leapYear(userYear);
}else if((userMonth == 4) || (userMonth == 6) || (userMonth == 9) || (userMonth == 11)){
  checkIfIsLastDay(userDay, userMonth, 30, userYear);
}else{
  checkIfIsLastDay(userDay, userMonth, 31, userYear);
}