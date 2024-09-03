function SwitchTheme() {
    function SwitchBodyClass() {
        const body = document.getElementById("body");
        body.classList.toggle("light-theme");
        body.classList.toggle("dark-theme");
    }

    function SwitchThemeIcon() {
        const themeIcon = document.getElementById("themeIcon");
        themeIcon.classList.toggle("fa-moon");
        themeIcon.classList.toggle("fa-sun");
    }

    const switchThemeBtn = document.getElementById("switchThemeBtn");
    switchThemeBtn.addEventListener("click", function () {
        SwitchBodyClass();
        SwitchThemeIcon();
    });
}

SwitchTheme();
