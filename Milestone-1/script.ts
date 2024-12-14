const skillsSect = document.getElementById('skills') as HTMLDivElement;
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

if (toggleButton && skillsSect) {
    toggleButton.addEventListener('click', () => {
        if (skillsSect.style.display === "none") {
            skillsSect.style.display = "block";
        } else {
            skillsSect.style.display = "none";
        }
    });
}