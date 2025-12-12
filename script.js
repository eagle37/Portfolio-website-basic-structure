// Theme toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Copy email
const emailBtn = document.getElementById("copyEmailBtn");

emailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("aprateek445@gmail.com");
    alert("Email copied!");
});
