// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("2025-09-01T09:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;
  if (diff <= 0) {
    countdown.innerHTML = "Workshop Started!";
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((diff % (1000*60*60))/(1000*60));
  const secs = Math.floor((diff % (1000*60))/1000);
  countdown.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);
