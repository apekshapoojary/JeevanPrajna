/* emergency.js — Emergency page interactions */
document.addEventListener('DOMContentLoaded', function () {
  // Confirm SOS click
  const sosBtn = document.getElementById('sosMainBtn');
  if (sosBtn) {
    sosBtn.addEventListener('click', function (e) {
      // On desktop (no tel: support), show a confirmation
      if (!navigator.userAgent.match(/Mobile|Android|iPhone/i)) {
        const confirmed = confirm('You are about to call 112 — the National Emergency Number.\n\nOnly use this for genuine emergencies.\n\nClick OK to proceed.');
        if (!confirmed) e.preventDefault();
      }
    });
  }
});
