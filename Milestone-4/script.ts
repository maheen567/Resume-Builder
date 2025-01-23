
function addnewWEField(): void {
  const weContainer = document.getElementById("we") as HTMLElement;
  const newTextArea = document.createElement("textarea");

  newTextArea.className = "form-control weField";
  newTextArea.rows = 5;
  newTextArea.placeholder = "Enter your work experience";
  weContainer.appendChild(newTextArea);

  const weAddButton = document.getElementById("weAddButton") as HTMLElement;
  weContainer.appendChild(weAddButton);
}

function addnewAQField(): void {
  const aqContainer = document.getElementById("aq") as HTMLElement;

  const newTextArea = document.createElement("textarea");

  newTextArea.className = "form-control aqField"; 
  newTextArea.rows = 5;
  newTextArea.placeholder = "Enter your academic qualification";

  aqContainer.appendChild(newTextArea);

  const aqAddButton = document.getElementById("aqAddbutton") as HTMLElement;
  aqContainer.appendChild(aqAddButton);
}

function addnewSkillsField() {
  let newNode = document.createElement("textarea") as HTMLTextAreaElement;
  newNode.classList.add("form-control");
  newNode.classList.add("skillsField");
  newNode.setAttribute("rows", "3");
  newNode.setAttribute("placeholder", "Enter your skills");

  let skillsOb = document.getElementById("skills");

  let skillsAddButton = document.getElementById("skillsAddButton");

  skillsOb?.insertBefore(newNode, skillsAddButton);
}

// get references to the form
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;


let printResumeBtn = document.getElementById('print-resume') as HTMLButtonElement;
let editResumeBtn = document.getElementById('editable-resume') as HTMLButtonElement;
if (printResumeBtn && editResumeBtn){
  printResumeBtn.style.display = 'none';
  editResumeBtn.style.display = 'none';
}


// handle form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const nameField = (document.getElementById("nameField") as HTMLInputElement).value;
  const nameT1 = document.getElementById("nameT1") as HTMLElement;
  if (nameT1) {nameT1.innerHTML = `${nameField}`};

  const nameT2 = document.getElementById("nameT2") as HTMLElement;
  if (nameT2) {nameT2.innerHTML = `<b>Name:</b> ${nameField}`};

  // For Role
  const roleField = (document.getElementById("roleField") as HTMLInputElement).value;
  const roleT = document.getElementById("roleT") as HTMLInputElement;
  roleT.innerHTML = roleField;

  // For  DOB
  const DOBField = (document.getElementById("DOBField") as HTMLInputElement)
    .value;
  const DOBT = document.getElementById("DOBT") as HTMLInputElement;
  DOBT.innerHTML = `<b>DOB:</b> ${DOBField}`;

  // For Email
  const emailField = (document.getElementById("emailField") as HTMLInputElement).value;
  const emailT = document.getElementById("emailT") as HTMLInputElement;
  emailT.innerHTML = `<b>Email:</b> <a href="#" class='social-media-link'>${emailField}</a>`;

  // For Contact
  const contactField = (document.getElementById('contactField') as HTMLInputElement ).value
  const contactT = (document.getElementById('contactT')as HTMLInputElement);
  contactT.innerHTML = `<b>Contact:</b> ${contactField}`;

  // For Address
  const addressField = (document.getElementById("addressField") as HTMLInputElement).value;
  const addressT = document.getElementById("addressT") as HTMLInputElement;
  addressT.innerHTML = `<b>Address:</b> ${addressField}`;

  // For Linkedin
  const linkedinField = (document.getElementById("linkedinField") as HTMLInputElement).value;
  const linkedinT = document.getElementById("linkedinT") as HTMLInputElement;
  linkedinT.innerHTML = `<i class="fa-brands fa-linkedin social-icon"></i>
  <a href=${linkedinField} target="_blank" class='social-media-link'>${linkedinField}</a>`;
    
  // For Github
  const githubField = (document.getElementById("githubField") as HTMLInputElement).value;
  const githubT = document.getElementById("githubT") as HTMLInputElement;
  githubT.innerHTML = `<i class="fa-brands fa-github social-icon"></i>
  <a href=${githubField} target="_blank" class='social-media-link'>${githubField}</a>`;

  // For Portfolio
  const portfolioField = (document.getElementById("portfolioField") as HTMLInputElement).value;
  const portfolioT = document.getElementById("portfolioT") as HTMLInputElement;
  portfolioT.innerHTML = `<i class="fa-solid fa-link social-icon"></i>
  <a href=${portfolioField} target="_blank" class='social-media-link'>${portfolioField}</a>`;

  // For Objective
  const objectiveField = (
    document.getElementById("objectiveField") as HTMLInputElement
  ).value;
  const objectiveT = document.getElementById("objectiveT") as HTMLInputElement;
  objectiveT.innerHTML = objectiveField;

  // For Work Experience
  const wes = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
  let str = "";
  wes.forEach((textarea) => {str += `<li>${textarea.value}</li>`});
  document.getElementById("weT")!.innerHTML = str;

  // For Academic Qualifications
  const aqs = document.querySelectorAll(".aqField") as NodeListOf<HTMLTextAreaElement>;
  let str2 = "";

  aqs.forEach((textarea) => {str2 += `<li>${textarea.value}</li>`});
  document.getElementById("aqT")!.innerHTML = str2;

  // For skills
  const skills = document.querySelectorAll(".skillsField") as NodeListOf<HTMLTextAreaElement>;
  let str3 = "";

  skills.forEach((textarea) => {str3 += `<li>${textarea.value}</li>`});
  document.getElementById("skillsT")!.innerHTML = str3;

  resumeDisplay.style.display = 'block';
  form.style.display = 'none';
  printResumeBtn.style.display = 'block';
  editResumeBtn.style.display = 'block';
});

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const profilePictureDisplay = document.getElementById('profile-picture') as HTMLImageElement;

profilePictureInput.addEventListener('change', (event: Event) => {
  const target = event.target as HTMLInputElement;
  
  if (target.files && target.files[0]) {
      const file = target.files[0];
      const fileURL = URL.createObjectURL(file);
      profilePictureDisplay.src = fileURL;
  };
});

let editableResumeBtn = document.getElementById('editable-resume') as HTMLButtonElement;
if (editableResumeBtn){
  editableResumeBtn.addEventListener('click', () => {
    form.style.display = 'block';
    resumeDisplay.style.display = 'none';
    editResumeBtn.style.display = 'none';
    printResumeBtn.style.display = 'none';
  });
}

function printResume() {
  window.print();
};





