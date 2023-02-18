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

const meetupLive = document.getElementById("meetupLive");
meetupLive.onclick = () => {
    window.open("https://bmdevelopers001.github.io/curvy-plant-804/Frontend/index.html")
}

const meetupCode = document.getElementById("meetupCode");
meetupCode.onclick = () => {
    window.open("https://github.com/BmDevelopers001/curvy-plant-804")
}