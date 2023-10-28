let mondayStartTime = document.getElementById("monday-startTime");
let mondayEndTime = document.getElementById("monday-endTime");
let mondayTotalTime = document.getElementById("monday-totalTime");

let tuesdayStartTime = document.getElementById("tuesday-startTime");
let tuesdayEndTime = document.getElementById("tuesday-endTime");
let tuesdayTotalTime = document.getElementById("tuesday-totalTime");

let wednesdayStartTime = document.getElementById("wednesday-startTime");
let wednesdayEndTime = document.getElementById("wednesday-endTime");
let wednesdayTotalTime = document.getElementById("wednesday-totalTime");

let thursdayStartTime = document.getElementById("thursday-startTime");
let thursdayEndTime = document.getElementById("thursday-endTime");
let thursdayTotalTime = document.getElementById("thursday-totalTime");

let fridayStartTime = document.getElementById("friday-startTime");
let fridayEndTime = document.getElementById("friday-endTime");
let fridayTotalTime = document.getElementById("friday-totalTime");

let saturdayStartTime = document.getElementById("saturday-startTime");
let saturdayEndTime = document.getElementById("saturday-endTime");
let saturdayTotalTime = document.getElementById("saturday-totalTime");

let sundayStartTime = document.getElementById("sunday-startTime");
let sundayEndTime = document.getElementById("sunday-endTime");
let sundayTotalTime = document.getElementById("sunday-totalTime");

function CalculateTotalTime(startTimeElement, endTimeElement, totalTimeElement) {
    //create variables from the parameters 
    const startTime = startTimeElement.value;
    let endTime = endTimeElement.value;
    let totalTime = totalTimeElement;

    //check if the endTime is 00:00 then assume they mean 24 hours
    if(endTime === "00:00"){
        endTimeElement = "24:00";
        endTime = "24:00";
    }

    //convert HH:mm too minutes
    let startTotal = HHMMToMinutes(startTime);
    let endTotal = HHMMToMinutes(endTime);

    //get time between start and end
    let totalMinutes = endTotal - startTotal;

    //checks if the number is negative and returns
    if(totalMinutes < 0){
        return console.log("Cannot put in negative numbers: "+ totalMinutes);    
    }

    //convert the seconds too HH:mm format
    const formattedTime = minutesToHHMM(totalMinutes);

    //Change the totalTime value too the formatted time
    totalTime.value = formattedTime;
}

//function that converts seconds too HH:mm format
function minutesToHHMM(minutes) {
    //divide by 3600 to convert seconds too hour converted
    const hours = Math.floor(minutes / 60);
    //modulo by 3600 too get the remainder that gets divided by 60 too get the minutes;
    const minutesLeft = Math.floor(minutes % 60);

    // Format hours and minutes as "HH:mm"
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
    return formattedTime;
}

function HHMMToMinutes(HHMM){
    const TimeParts = HHMM.split(":");
    let hours = parseInt(TimeParts[0]);
    let minutes = parseInt(TimeParts[1]);
    let Total = (hours * 60) + minutes;
    return Total;
}

mondayStartTime.addEventListener("input", function(){
    CalculateTotalTime(mondayStartTime, mondayEndTime, mondayTotalTime);
});
mondayEndTime.addEventListener("input", function(){
    CalculateTotalTime(mondayStartTime, mondayEndTime, mondayTotalTime);
});
mondayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(mondayStartTime, mondayEndTime, mondayTotalTime);
});

tuesdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(tuesdayStartTime, tuesdayEndTime, tuesdayTotalTime);
});
tuesdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(tuesdayStartTime, tuesdayEndTime, tuesdayTotalTime);
});
tuesdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(tuesdayStartTime, tuesdayEndTime, tuesdayTotalTime);
});

wednesdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(wednesdayStartTime, wednesdayEndTime, wednesdayTotalTime);
});
wednesdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(wednesdayStartTime, wednesdayEndTime, wednesdayTotalTime);
});
wednesdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(wednesdayStartTime, wednesdayEndTime, wednesdayTotalTime);
});

thursdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(thursdayStartTime, thursdayEndTime, thursdayTotalTime);
});
thursdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(thursdayStartTime, thursdayEndTime, thursdayTotalTime);
});
thursdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(thursdayStartTime, thursdayEndTime, thursdayTotalTime);
});

fridayStartTime.addEventListener("input", function(){
    CalculateTotalTime(fridayStartTime, fridayEndTime, fridayTotalTime);
});
fridayEndTime.addEventListener("input", function(){
    CalculateTotalTime(fridayStartTime, fridayEndTime, fridayTotalTime);
});
fridayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(fridayStartTime, fridayEndTime, fridayTotalTime);
});

saturdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(saturdayStartTime, saturdayEndTime, saturdayTotalTime);
});
saturdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(saturdayStartTime, saturdayEndTime, saturdayTotalTime);
});
saturdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(saturdayStartTime, saturdayEndTime, saturdayTotalTime);
});

sundayStartTime.addEventListener("input", function(){
    CalculateTotalTime(sundayStartTime, sundayEndTime, sundayTotalTime);
});
sundayEndTime.addEventListener("input", function(){
    CalculateTotalTime(sundayStartTime, sundayEndTime, sundayTotalTime);
});
sundayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(sundayStartTime, sundayEndTime, sundayTotalTime);
});