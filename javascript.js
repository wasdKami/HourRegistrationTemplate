//created array with every day of the week
const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

//create empty that get filled by the for loop
const elements = {};

for (const day of daysOfWeek) {
    elements[day] = {
        startTime: document.getElementById(`${day}-startTime`),
        endTime: document.getElementById(`${day}-endTime`),
        totalTime: document.getElementById(`${day}-totalTime`)
    };
}

let weekHours = document.getElementById(`weekHours`);

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

function CalculateTotalTimeForWeek() {
    let totalTimeForWeek = 0;
    for (const day of daysOfWeek) {
        const totalTime = elements[day].totalTime.value;
        totalTimeForWeek += HHMMToMinutes(totalTime);
    }
    weekHours.textContent = minutesToHHMM(totalTimeForWeek);
}

//for loop that goes through all the days and when event happends use the event with the day
for (const day of daysOfWeek) {
    const startTime = document.getElementById(`${day}-startTime`);
    const endTime = document.getElementById(`${day}-endTime`);
    const totalTime = document.getElementById(`${day}-totalTime`);

    startTime.addEventListener("input", function () {
        CalculateTotalTime(startTime, endTime, totalTime);
        CalculateTotalTimeForWeek();
    });

    endTime.addEventListener("input", function () {
        CalculateTotalTime(startTime, endTime, totalTime);
        CalculateTotalTimeForWeek();
    });

    totalTime.addEventListener("input", function () {
        CalculateTotalTime(startTime, endTime, totalTime);
        CalculateTotalTimeForWeek();
    });
}