// Get current date
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Function to generate calendar
function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    // Create header
    let calendarHTML = `<h2>${monthNames[month]} ${year}</h2>`;
    calendarHTML += "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

    // Fill in calendar days
    let day = 1;
    for (let i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                calendarHTML += "<td></td>";
            } else if (day > daysInMonth) {
                break;
            } else {
                calendarHTML += `<td>${day}</td>`;
                day++;
            }
        }
        calendarHTML += "</tr>";
        if (day > daysInMonth) {
            break;
        }
    }

    calendarHTML += "</table>";
    return calendarHTML;
}

// Function to display calendar
function displayCalendar() {
    document.getElementById('calendar').innerHTML = generateCalendar(currentMonth, currentYear);
}

// Function to go to previous month
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayCalendar();
}

// Function to go to next month
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    displayCalendar();
}

// Initial display
displayCalendar();