function checkLeapYear(){

let year = document.getElementById("yearInput").value;

if(year % 400 == 0){
document.getElementById("result").innerText = year + " is a Leap Year";
}
else if(year % 100 == 0){
document.getElementById("result").innerText = year + " is NOT a Leap Year";
}
else if(year % 4 == 0){
document.getElementById("result").innerText = year + " is a Leap Year";
}
else{
document.getElementById("result").innerText = year + " is NOT a Leap Year";
}

}