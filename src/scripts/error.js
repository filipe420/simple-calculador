export function ErrorPopUp() {
    const errorPopUp = document.getElementById("errorPopUp");
    errorPopUp.classList.remove("d-none");
    setTimeout(() => {
        errorPopUp.classList.add("d-none");
    }, 3000);
}