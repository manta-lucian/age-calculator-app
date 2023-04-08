// INPUT FIELDS
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const arrayInput = [dayInput, monthInput, yearInput];
// LABELS
const labels = document.querySelectorAll(".label");
console.log(yearInput.value.length);

// ERRORS
const errors = document.querySelectorAll(".error");
const dayInputValid = document.querySelector(".error-day-valid");
const dayInputEmpty = document.querySelector(".error-day-empty");
const monthInputValid = document.querySelector(".error-month-valid");
const monthInputEmpty = document.querySelector(".error-month-empty");
const yearInputValid = document.querySelector(".error-year-valid");
const yearInputEmpty = document.querySelector(".error-year-empty");
const yearInputPast = document.querySelector(".error-year-past");
const yearInputDead = document.querySelector(".error-year-dead");

// LINES
const lines = document.querySelectorAll(".line");
const lineYearOne = document.querySelector(".line-year-1");
const lineYearTwo = document.querySelector(".line-year-2");
const lineMonthOne = document.querySelector(".line-month-1");
const lineMonthTwo = document.querySelector(".line-month-2");
const lineDayOne = document.querySelector(".line-day-1");
const lineDayTwo = document.querySelector(".line-day-2");

// AGE-NUMBERS
const ageNumbers = document.querySelectorAll(".age-number");
const ageNumberYearOne = document.querySelector(".age-number-year-1");
const ageNumberYearTwo = document.querySelector(".age-number-year-2");
const ageNumberMonthOne = document.querySelector(".age-number-month-1");
const ageNumberMonthTwo = document.querySelector(".age-number-month-2");
const ageNumberDayOne = document.querySelector(".age-number-day-1");
const ageNumberDayTwo = document.querySelector(".age-number-day-2");

// BUTTONs
const button = document.querySelector(".btn");
const buttonReset = document.querySelector(".btn-reset");

function calculateAge() {
  let day;
  let month;
  let year;

  let myYear = yearInput.value;
  let myMonth = monthInput.value;
  let myDay = dayInput.value;

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDays = currentDate.getDate();
  let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let isDateValid = true;
  // console.log(myYear.length);

  if (myYear == "") {
    yearInputEmpty.classList.remove("display-none");
    yearInputPast.classList.add("display-none");
    yearInputDead.classList.add("display-none");
    yearInputValid.classList.add("display-none");
    [...labels][2].classList.add("red");
    arrayInput[2].classList.add("red-border");
    isDateValid = false;
  } else if (myYear.length != 4) {
    yearInputValid.classList.remove("display-none");
    yearInputPast.classList.add("display-none");
    yearInputEmpty.classList.add("display-none");
    yearInputDead.classList.add("display-none");
    [...labels][2].classList.add("red");
    arrayInput[2].classList.add("red-border");
    isDateValid = false;
  } else if (myYear > currentYear) {
    yearInputPast.classList.remove("display-none");
    yearInputValid.classList.add("display-none");
    yearInputDead.classList.add("display-none");
    yearInputEmpty.classList.add("display-none");
    [...labels][2].classList.add("red");
    arrayInput[2].classList.add("red-border");
    isDateValid = false;
  } else if (myYear < currentYear - 120) {
    yearInputDead.classList.remove("display-none");
    yearInputValid.classList.add("display-none");
    yearInputPast.classList.add("display-none");
    yearInputEmpty.classList.add("display-none");
    [...labels][2].classList.add("red");
    arrayInput[2].classList.add("red-border");
    isDateValid = false;
  } else {
    yearInputDead.classList.add("display-none");
    yearInputValid.classList.add("display-none");
    yearInputPast.classList.add("display-none");
    yearInputEmpty.classList.add("display-none");
    [...labels][2].classList.remove("red");
    arrayInput[2].classList.remove("red-border");
  }
  if (myMonth == "") {
    monthInputEmpty.classList.remove("display-none");
    monthInputValid.classList.add("display-none");
    [...labels][1].classList.add("red");
    arrayInput[1].classList.add("red-border");
    isDateValid = false;
  } else if (myMonth == 0 || myMonth.length > 2 || myMonth > 12 || myMonth < 0) {
    monthInputValid.classList.remove("display-none");
    dayInputEmpty.classList.add("display-none");
    [...labels][1].classList.add("red");
    arrayInput[1].classList.add("red-border");
    isDateValid = false;
  } else {
    monthInputEmpty.classList.add("display-none");
    monthInputValid.classList.add("display-none");
    [...labels][1].classList.remove("red");
    arrayInput[1].classList.remove("red-border");
  }
  if (myDay == "") {
    dayInputEmpty.classList.remove("display-none");
    dayInputValid.classList.add("display-none");
    [...labels][0].classList.add("red");
    arrayInput[0].classList.add("red-border");
    isDateValid = false;
  } else if (myDay == 0 || myDay.length > 2 || myDay > 31 || myDay < 0) {
    dayInputValid.classList.remove("display-none");
    dayInputEmpty.classList.add("display-none");
    [...labels][0].classList.add("red");
    arrayInput[0].classList.add("red-border");
    isDateValid = false;
  } else {
    dayInputEmpty.classList.add("display-none");
    dayInputValid.classList.add("display-none");
    [...labels][0].classList.remove("red");
    arrayInput[0].classList.remove("red-border");
  }

  if (isDateValid) {
    if (myDay > currentDays) {
      currentDays = currentDays + monthArr[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (myMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }
    day = currentDays - myDay;
    month = currentMonth - myMonth;
    year = currentYear - myYear;
    [...errors].forEach((el) => el.classList.add("display-none"));
    [...labels].forEach((el) => el.classList.remove("red"));
    arrayInput.forEach((el) => el.classList.remove("red-border"));
    [...lines].forEach((el) => el.classList.add("display-none"));
    [...ageNumbers].forEach((el) => el.classList.remove("display-none"));
    ageNumberYearOne.innerHTML = `${year}`;
    ageNumberMonthOne.innerHTML = `${month}`;
    ageNumberDayOne.innerHTML = `${day}`;
    buttonReset.classList.add("btn-on");
  } else {
    [...ageNumbers].forEach((el) => el.classList.add("display-none"));
    [...lines].forEach((el) => el.classList.remove("display-none"));
    buttonReset.classList.remove("btn-on");
    return;
  }

  // console.log(year, month, day);
}

button.addEventListener("click", (e) => {
  calculateAge();
});

buttonReset.addEventListener("click", (e) => {
  dayInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  [...ageNumbers].forEach((el) => el.classList.add("display-none"));
  [...lines].forEach((el) => el.classList.remove("display-none"));
  buttonReset.classList.remove("btn-on");
});
