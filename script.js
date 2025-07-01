function updateClock() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[now.getDay()];
  const time = now.toLocaleTimeString();
  document.getElementById('clock').innerHTML = `${dayName}, ${time}`;
}
  setInterval(updateClock, 1000); // update every second
  updateClock(); // initial call