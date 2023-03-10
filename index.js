const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const resume = document.getElementById("resume");
resume.onclick = (e) => {
  // e.preventDefault()
  window.open("./Media/fw21_0527-Brijesh-Savaliya-Resume.pdf");
  // console.log("Click");
};

const containerResume = document.getElementById("containerResume");
containerResume.onclick = (e) => {
  // e.preventDefault()
  window.open("./Media/fw21_0527-Brijesh-Savaliya-Resume.pdf");
  // console.log("Click");
};

const nykaaLive = document.getElementById("nykaaLive");
nykaaLive.onclick = () => {
  window.open("https://papaya-rabanadas-a8099e.netlify.app/index.html");
};

const nykaaCode = document.getElementById("nykaaCode");
nykaaCode.onclick = () => {
  window.open("https://github.com/BmDevelopers001/attractive-bikes-9922");
};

const meetLive = document.getElementById("meetLive");
meetLive.onclick = () => {
  window.open(
    "https://bmdevelopers001.github.io/curvy-plant-804/Frontend/index.html"
  );
};

const meetCode = document.getElementById("meetCode");
meetCode.onclick = () => {
  window.open("https://github.com/BmDevelopers001/curvy-plant-804");
};

const champCode = document.getElementById("champCode");
champCode.onclick = () => {
  window.open("https://github.com/rajeshdeo/offbeat-need-8210");
};

const champLive = document.getElementById("champLive");
champLive.onclick = () => {
  window.open("https://mailchamp.netlify.app/");
};

const hoursCode = document.getElementById("hoursCode");
hoursCode.onclick = () => {
  window.open("https://github.com/BmDevelopers001/ceaseless-meeting-9748");
};

const hoursLive = document.getElementById("hoursLive");
hoursLive.onclick = () => {
  window.open("https://magenta-faun-ce3d43.netlify.app/");
};

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

const contactSubmit = document.getElementById("contactSubmit");
contactSubmit.onclick = (e) => {
  e.preventDefault();
  console.log([contactName.value, contactEmail.value, contactMessage.value]);
  contactName.value = null;
  contactEmail.value = null;
  contactMessage.value = null;
};
