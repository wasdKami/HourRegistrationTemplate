let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let totalTime = document.getElementById("totalTime");

function CalculateTotalTime() {
    //console.log(startTime.value + " " + endTime.value);
    //console.log("totaltime: " + totalTime.value);

    const startTimeParts = startTime.value.split(":");
    let startHours = parseInt(startTimeParts[0]);
    let startMinutes = parseInt(startTimeParts[1]);
    startHours = startHours * 3600;
    startMinutes = startMinutes * 60;
    let startTotal = startHours + startMinutes;
    console.log("start seconds: " + startTotal);

    const endTimeParts = endTime.value.split(":");
    let endHours = parseInt(endTimeParts[0]);
    let endMinutes = parseInt(endTimeParts[1]);
    endHours = endHours * 3600;
    endMinutes = endMinutes * 60;
    let endTotal = endHours + endMinutes;
    console.log("end seconds: " + endTotal);

    let totalSeconds = endTotal - startTotal;

    const formattedTime = secondsToHHMM(totalSeconds);
    totalTime.value = formattedTime;
}

function secondsToHHMM(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    // Format hours and minutes as "HH:mm"
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    
    return formattedTime;
}

// Add event listeners to the input elements to calculate the time difference
startTime.addEventListener("input", CalculateTotalTime);
endTime.addEventListener("input", CalculateTotalTime);
totalTime.addEventListener("input", CalculateTotalTime);

