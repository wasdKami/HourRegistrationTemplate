const hourSelectors = document.querySelectorAll('select[id="timeHours"]');
const minuteSelectors = document.querySelectorAll('select[id="timeMinutes"]');

function CreateOptions(selects, start, end, step) {
    selects.forEach(select => {
        for (let i = start; i <= end; i += step) {
            const option = document.createElement("option");
            option.value = i < 10 ? "0" + i : i.toString();
            option.text = option.value;
            select.appendChild(option);
        }
    });
}

CreateOptions(hourSelectors, 0, 23, 1);
CreateOptions(minuteSelectors, 0, 45, 15);

function combineTime() {
    const selectedHour = hourSelectors[0].value; // Get the value from the first hour select
    const selectedMinute = minuteSelectors[0].value; // Get the value from the first minute select
    const combinedTime = selectedHour + ":" + selectedMinute;
    alert("Selected Time: " + combinedTime);
}
