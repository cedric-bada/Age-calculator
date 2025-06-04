const inputYear = document.getElementById("year");
const inputMonth = document.getElementById("month");
const inputDay = document.getElementById("day");
const btn = document.querySelector("button");

const age = document.getElementById("age");

// Date obj
const today = new Date();
const [year, month, day] = [
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate(),
];
let targetDateStr = `${year}-${month}-${day}`;

btn.addEventListener("click", () => {
  const userYear = inputYear.value;
  const userMonth = inputMonth.value;
  const userDay = inputDay.value;
  const birthDateStr = `${userYear}-${userMonth}-${userDay}`;

  console.log(birthDateStr, targetDateStr);
  age.textContent = calculateAge(birthDateStr, targetDateStr);
});

function calculateAge(birthDateStr, targetDateStr) {
  const birthDate = new Date(birthDateStr);
  const targetDate = new Date(targetDateStr);

  let years = targetDate.getFullYear() - birthDate.getFullYear(); // 2025 - 2001 = 24
  let months = targetDate.getMonth() - birthDate.getMonth(); // 6 - 7 = -1
  let days = targetDate.getDate() - birthDate.getDate(); // 1 - 25 = -24

  if (days < 0) {
    // Borrow days from the previous month
    months -= 1;
    const prevMonth = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      0
    );
    days = days + prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months = months + 12;
  }

  return `Your age is ${years}years, ${months} months, ${days}days.`;
}
