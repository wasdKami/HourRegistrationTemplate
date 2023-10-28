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
    let startTime = startTimeElement.value;
    let endTime = endTimeElement.value;
    let totalTime = totalTimeElement;
    //console.log("starttime: " + startTime + " endtime: " + endTime + " totaltime: " + totalTime) 

    if(endTime === "00:00"){
        endTimeElement = "24:00";
        endTime = "24:00";
    }

    //convert startTime too seconds
    const startTimeParts = startTime.split(":");
    let startHours = parseInt(startTimeParts[0]);
    let startMinutes = parseInt(startTimeParts[1]);
    let startTotal = (startHours * 3600) + (startMinutes * 60);
    console.log("startTotal: "+startTotal);
    
    //convert endTime too seconds
    const endTimeParts = endTime.split(":");
    let endHours = parseInt(endTimeParts[0]);
    let endMinutes = parseInt(endTimeParts[1]);
    let endTotal = (endHours * 3600) + (endMinutes * 60);
    console.log("endTotal: "+endTotal);

    //get time between start and end
    let totalSeconds = endTotal - startTotal;

    //checks if the number is negative and returns
    if(totalSeconds < 0){
        console.log("error negative number: "+ totalSeconds);
        return;
    }

    console.log("totalseconds: " + totalSeconds);
    //convert the seconds too HH:mm format
    const formattedTime = secondsToHHMM(totalSeconds);
    console.log("formatted Time: "+formattedTime);

    //Change the totalTime value too the formatted time
    totalTime.value = formattedTime;
    console.log("totalTime: " + totalTimeElement.value);
    console.log("---------------------------------");
}

//function that converts seconds too HH:mm format
function secondsToHHMM(seconds) {
    //divide by 3600 to convert seconds too hour converted
    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor((seconds % 3600) / 60);

    // Format hours and minutes as "HH:mm"
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
}

// Add event listeners to the input elements to calculate the time difference
mondayStartTime.addEventListener("input", function(){
    CalculateTotalTime(mondayStartTime, mondayEndTime, mondayTotalTime);
});
mondayEndTime.addEventListener("input", function(){
    CalculateTotalTime(mondayStartTime, mondayEndTime, mondayTotalTime);
});
mondayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(mondayStartTime, mondayEndTime, mondayTotalTime);
});

// Add event listeners to the input elements to calculate the time difference
tuesdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(tuesdayStartTime, tuesdayEndTime, tuesdayTotalTime);
});
tuesdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(tuesdayStartTime, tuesdayEndTime, tuesdayTotalTime);
});
tuesdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(tuesdayStartTime, tuesdayEndTime, tuesdayTotalTime);
});

// Add event listeners to the input elements to calculate the time difference
wednesdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(wednesdayStartTime, wednesdayEndTime, wednesdayTotalTime);
});
wednesdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(wednesdayStartTime, wednesdayEndTime, wednesdayTotalTime);
});
wednesdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(wednesdayStartTime, wednesdayEndTime, wednesdayTotalTime);
});

// Add event listeners to the input elements to calculate the time difference
thursdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(thursdayStartTime, thursdayEndTime, thursdayTotalTime);
});
thursdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(thursdayStartTime, thursdayEndTime, thursdayTotalTime);
});
thursdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(thursdayStartTime, thursdayEndTime, thursdayTotalTime);
});

// Add event listeners to the input elements to calculate the time difference
fridayStartTime.addEventListener("input", function(){
    CalculateTotalTime(fridayStartTime, fridayEndTime, fridayTotalTime);
});
fridayEndTime.addEventListener("input", function(){
    CalculateTotalTime(fridayStartTime, fridayEndTime, fridayTotalTime);
});
fridayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(fridayStartTime, fridayEndTime, fridayTotalTime);
});

// Add event listeners to the input elements to calculate the time difference
saturdayStartTime.addEventListener("input", function(){
    CalculateTotalTime(saturdayStartTime, saturdayEndTime, saturdayTotalTime);
});
saturdayEndTime.addEventListener("input", function(){
    CalculateTotalTime(saturdayStartTime, saturdayEndTime, saturdayTotalTime);
});
saturdayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(saturdayStartTime, saturdayEndTime, saturdayTotalTime);
});

// Add event listeners to the input elements to calculate the time difference
sundayStartTime.addEventListener("input", function(){
    CalculateTotalTime(sundayStartTime, sundayEndTime, sundayTotalTime);
});
sundayEndTime.addEventListener("input", function(){
    CalculateTotalTime(sundayStartTime, sundayEndTime, sundayTotalTime);
});
sundayTotalTime.addEventListener("input", function(){
    CalculateTotalTime(sundayStartTime, sundayEndTime, sundayTotalTime);
});