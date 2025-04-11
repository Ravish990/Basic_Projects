const monthName = document.getElementById("month_name");
const dayName  = document.getElementById("day_name");
const dayNum  = document.getElementById("day_number");
const year = document.getElementById("year");
const date = new Date();
const month  = date.getMonth();

monthName.innerText = date.toLocaleString("en", {
    month:"long"
})
dayName.innerText = date.toLocaleString("en", {weekday:"long"})

dayNum.innerText = date.getDate();
year.innerText = date.getFullYear();