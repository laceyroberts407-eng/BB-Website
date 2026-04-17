const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

const contactForm = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    formError.textContent = "";
    formSuccess.textContent = "";

    if (!name || !email) {
      formError.textContent = "Please complete your name and email.";
      return;
    }

    if (email && !isValidEmail(email)) {
      formError.textContent = "Please enter a valid email address.";
      return;
    }

    formSuccess.textContent =
      "Thank you for your inquiry, we'll be in touch as soon as possible.";
    contactForm.reset();
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9()+\-\s.]{7,}$/.test(phone);
}

function loadHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");
