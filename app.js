const darkModeToggle = document.getElementById("darkModeToggle");
const modeIcon = document.getElementById("modeIcon");

//  dark mode as default
document.body.classList.add("dark-mode");
modeIcon.classList.replace("fa-moon", "fa-sun");

// Toggle between dark and light mode when click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("darkMode", "enabled");
    } else {
        modeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("darkMode", "disabled");
    }
});
