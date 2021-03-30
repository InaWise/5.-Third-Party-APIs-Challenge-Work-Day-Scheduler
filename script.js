// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
const currentDayEl=document.getElementById("currentDay");
var currentDay = moment().format("dddd, MMMM Do");
currentDayEl.textContent=currentDay
console.log('hey')

// save button//
const saveBtnEl=document.querySelectorAll('.btn');

saveBtnEl.forEach(saveBtn=>{
    saveBtn.addEventListener("click",function(){
        console.log('button click')
})});



// Display current day at top of planner
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
//  var displayTime9 = JSON.parse(localStorage.getItem('hour9')) || "";
//  var displayTime10 = JSON.parse(localStorage.getItem('hour10')) || "";
//  var displayTime11 = JSON.parse(localStorage.getItem('hour11')) || "";
//  var displayTime12 = JSON.parse(localStorage.getItem('hour12')) || "";
//  var displayTime1 = JSON.parse(localStorage.getItem('hour1')) || "";
//  var displayTime2 = JSON.parse(localStorage.getItem('hour2')) || "";
//  var displayTime3 = JSON.parse(localStorage.getItem('hour3')) || "";
//  var displayTime4 = JSON.parse(localStorage.getItem('hour4')) || "";
//  var displayTime5 = JSON.parse(localStorage.getItem('hour5')) || "";
// WHEN I view the time blocks for that day
//  var hour9 = moment().hour(9);
//  var hour10 = moment().hour(10);
//  var hour11 = moment().hour(11);
//  var hour12 = moment().hour(12);
//  var hour1 = moment().hour(1);
//  var hour2 = moment().hour(2);
//  var hour3 = moment().hour(3);
//  var hour4 = moment().hour(4);
//  var hour5 = moment().hour(5);
//  var hour6 = moment().hour(6);
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist