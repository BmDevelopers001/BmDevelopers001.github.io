const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const nykaaLive = document.getElementById("nykaaLive");
nykaaLive.onclick = () => {
    window.open("https://papaya-rabanadas-a8099e.netlify.app/index.html")
}

const nykaaCode = document.getElementById("nykaaCode");
nykaaCode.onclick = () => {
    window.open("https://github.com/BmDevelopers001/attractive-bikes-9922")
}

const meetLive = document.getElementById("meetLive");
meetLive.onclick = () => {
    window.open("https://bmdevelopers001.github.io/curvy-plant-804/Frontend/index.html")
}

const meetCode = document.getElementById("meetCode");
meetCode.onclick = () => {
    window.open("https://github.com/BmDevelopers001/curvy-plant-804")
}

const mailCode = document.getElementById("mailCode");
mailCode.onclick = () => {
    window.open("https://github.com/rajeshdeo/offbeat-need-8210")
}

const mailLive = document.getElementById("mailLive");
mailLive.onclick = () => {
    window.open("https://mailchamp.netlify.app/")
}

const myhoursCode = document.getElementById("myhoursCode");
myhoursCode.onclick = () => {
    window.open("https://github.com/BmDevelopers001/ceaseless-meeting-9748")
}

const myhoursLive = document.getElementById("myhoursLive");
myhoursLive.onclick = () => {
    window.open("https://magenta-faun-ce3d43.netlify.app/")
}

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

const contactSubmit = document.getElementById("contactSubmit");
contactSubmit.onclick = (e) => {
    e.preventDefault()
    console.log([contactName.value,contactEmail.value,contactMessage.value]);
    contactName.value = null;
    contactEmail.value = null;
    contactMessage.value = null;
}