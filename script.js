const roles = [
  "Researcher",
  "Experimental Systems Builder",
  "Mechanical Engineer"
];

const roleEl = document.getElementById("rotating-role");
let roleIndex = 0;

function rotateRole() {
  roleEl.classList.remove("show");

  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
    roleEl.classList.add("show");
  }, 300);
}

roleEl.textContent = roles[0];
roleEl.classList.add("show");

setInterval(rotateRole, 2600);
