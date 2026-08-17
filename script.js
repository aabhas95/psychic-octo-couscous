const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const envelope = document.querySelector(".envelope");
const invitation = document.getElementById("invitation");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => {
    cover.classList.add("exit");
  }, 850);
  setTimeout(() => {
    cover.style.display = "none";
    invitation.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 1500);

  music.play().catch(() => {});
});

// Change this if you want a different exact time.
// India time (IST): 19:00 on 14 November 2026.
const eventDate = new Date("2026-11-14T19:00:00+05:30").getTime();

function updateCountdown() {
  const now = Date.now();
  let diff = eventDate - now;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Replace this URL with your Google Form URL.
const GOOGLE_FORM_URL = "";
document.getElementById("rsvpBtn").addEventListener("click", (e) => {
  if (!GOOGLE_FORM_URL) {
    e.preventDefault();
    alert("Add your Google Form URL in script.js first.");
    return;
  }
  e.currentTarget.href = GOOGLE_FORM_URL;
});
