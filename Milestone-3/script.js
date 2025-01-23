function addnewWEField() {
    var weContainer = document.getElementById("we");
    var newTextArea = document.createElement("textarea");
    newTextArea.className = "form-control weField";
    newTextArea.rows = 5;
    newTextArea.placeholder = "Enter your work experience";
    weContainer.appendChild(newTextArea);
    var weAddButton = document.getElementById("weAddButton");
    weContainer.appendChild(weAddButton);
}
function addnewAQField() {
    var aqContainer = document.getElementById("aq");
    var newTextArea = document.createElement("textarea");
    newTextArea.className = "form-control aqField";
    newTextArea.rows = 5;
    newTextArea.placeholder = "Enter your academic qualification";
    aqContainer.appendChild(newTextArea);
    var aqAddButton = document.getElementById("aqAddbutton");
    aqContainer.appendChild(aqAddButton);
}
function addnewSkillsField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter your skills");
    var skillsOb = document.getElementById("skills");
    var skillsAddButton = document.getElementById("skillsAddButton");
    skillsOb === null || skillsOb === void 0 ? void 0 : skillsOb.insertBefore(newNode, skillsAddButton);
}
// get references to the form
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById('resume-display');
var printResumeBtn = document.getElementById('print-resume');
if (printResumeBtn) {
    printResumeBtn.style.display = 'none';
}
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameField = document.getElementById("nameField").value;
    var nameT1 = document.getElementById("nameT1");
    if (nameT1) {
        nameT1.innerHTML = " ".concat(nameField, " ");
    }
    ;
    var nameT2 = document.getElementById("nameT2");
    if (nameT2) {
        nameT2.innerHTML = "<b>Name:</b> ".concat(nameField);
    }
    ;
    // For Role
    var roleField = document.getElementById("roleField").value;
    var roleT = document.getElementById("roleT");
    roleT.innerHTML = roleField;
    // For  DOB
    var DOBField = document.getElementById("DOBField")
        .value;
    var DOBT = document.getElementById("DOBT");
    DOBT.innerHTML = "<b>DOB:</b> ".concat(DOBField);
    // For Email
    var emailField = document.getElementById("emailField").value;
    var emailT = document.getElementById("emailT");
    emailT.innerHTML = "<b>Email:</b> <a href=\"#\" class='social-media-link'>".concat(emailField, "</a>");
    // For Contact
    var contactField = document.getElementById('contactField').value;
    var contactT = document.getElementById('contactT');
    contactT.innerHTML = "<b>Contact:</b> ".concat(contactField);
    // For Address
    var addressField = document.getElementById("addressField").value;
    var addressT = document.getElementById("addressT");
    addressT.innerHTML = "<b>Address:</b> ".concat(addressField);
    // For Linkedin
    var linkedinField = document.getElementById("linkedinField").value;
    var linkedinT = document.getElementById("linkedinT");
    linkedinT.innerHTML = "<i class=\"fa-brands fa-linkedin social-icon\"></i>\n  <a href=".concat(linkedinField, " target=\"_blank\" class='social-media-link'>").concat(linkedinField, "</a>");
    // For Github
    var githubField = document.getElementById("githubField").value;
    var githubT = document.getElementById("githubT");
    githubT.innerHTML = "<i class=\"fa-brands fa-github social-icon\"></i>\n  <a href=".concat(githubField, " target=\"_blank\" class='social-media-link'>").concat(githubField, "</a>");
    // For Portfolio
    var portfolioField = document.getElementById("portfolioField").value;
    var portfolioT = document.getElementById("portfolioT");
    portfolioT.innerHTML = "<i class=\"fa-solid fa-link social-icon\"></i>\n  <a href=".concat(portfolioField, " target=\"_blank\" class='social-media-link'>").concat(portfolioField, "</a>");
    // For Objective
    var objectiveField = document.getElementById("objectiveField").value;
    var objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;
    // For Work Experience
    var wes = document.querySelectorAll(".weField");
    var str = "";
    wes.forEach(function (textarea) { str += "<li>".concat(textarea.value, "</li>"); });
    document.getElementById("weT").innerHTML = str;
    // For Academic Qualifications
    var aqs = document.querySelectorAll(".aqField");
    var str2 = "";
    aqs.forEach(function (textarea) { str2 += "<li>".concat(textarea.value, "</li>"); });
    document.getElementById("aqT").innerHTML = str2;
    // For skills
    var skills = document.querySelectorAll(".skillsField");
    var str3 = "";
    skills.forEach(function (textarea) { str3 += "<li>".concat(textarea.value, "</li>"); });
    document.getElementById("skillsT").innerHTML = str3;
    resumeDisplay.style.display = 'block';
    form.style.display = 'none';
    printResumeBtn.style.display = 'block';
});
var profilePictureInput = document.getElementById('profilePicture');
var profilePictureDisplay = document.getElementById('profile-picture');
profilePictureInput.addEventListener('change', function (event) {
    var target = event.target;
    if (target.files && target.files[0]) {
        var file = target.files[0];
        var fileURL = URL.createObjectURL(file);
        profilePictureDisplay.src = fileURL;
    }
    ;
});
function printResume() {
    window.print();
}
;
