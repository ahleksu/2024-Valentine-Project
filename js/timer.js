function updateTimer() {
  const startDate = new Date("September 7, 2019 01:53:00").getTime();
  const now = new Date().getTime();
  const diff = now - startDate;

  // Time calculations
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  let daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
  let days = daysTotal % 365;
  let months = Math.floor(days / 30);
  days = days % 30;
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);
