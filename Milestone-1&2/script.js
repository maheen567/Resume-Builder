var skillsSect = document.getElementById('skills');
var toggleButton = document.getElementById('toggle-skills');
if (toggleButton && skillsSect) {
    toggleButton.addEventListener('click', function () {
        if (skillsSect.style.display === "none") {
            skillsSect.style.display = "block";
        }
        else {
            skillsSect.style.display = "none";
        }
    });
}
