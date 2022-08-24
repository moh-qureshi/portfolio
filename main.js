const circle = document.getElementById("circle")
const navbar = document.getElementById("nav")
const aboutMeNavText = document.getElementById("about-me-nav")
const techStackNavText = document.getElementById("tech-stack-nav")
const experienceNavText = document.getElementById("experience-nav")
const projectsNavText = document.getElementById("projects-nav")
const contactNavText = document.getElementById("contact-me-nav")

//welcome section
const welcomeSection = document.getElementById("welcome-section")

//about me section
const aboutMeSection = document.getElementById("about-section")
const aboutMeBoxSection = document.getElementById("about-section-boxes")
//tech stack section
const techStackSection = document.getElementById("tech-stack-section")
//experience section
const experienceSection = document.getElementById("experience-section")
//projects section
const projectsSection = document.getElementById("projects-section")
const projectsSlider = document.getElementById("projects-slider")
const snakeMoreInfo = document.getElementById("snake-more-info")
const weatherMoreInfo = document.getElementById("weather-more-info")
const footasylumMoreInfo = document.getElementById("footasylum-more-info")
const diceMoreInfo = document.getElementById("dice-more-info")
const snakeGameInfo = document.getElementById("snake-game-info")
const weatherAppInfo = document.getElementById("weather-app-info")
const footasylumCloneInfo = document.getElementById("footasylum-info")
const diceGameInfo = document.getElementById("dice-game-info")
//contact section
const contactSection = document.getElementById("contact-section")


const welcomeText = document.getElementById("welcome-text")
const text = ["Welcome To My Portfolio", "Aspiring FrontEnd Developer", "Creative Mastermind", "Passionate About Web Design"]
let mode = "light"
let count = 0
let index = 0
let currentText = ""
let letter = ""

function test(){
    if(mode === "light"){
        mode = "dark"
        circle.style.transform = "translateX(-50px)"
        welcomeSection.style.background = "linear-gradient(silver, lightgreen);"
    } else if(mode === "dark"){
        mode = "light"
        circle.style.transform = "translateX(0px)"
        console.log("dark")
}}

(function type(){

    if(count === text.length){
        count = 0
    }
    currentText = text[count]
    letter = currentText.slice(0, ++index)
    document.querySelector(".typing").textContent = letter
    if(letter.length === currentText.length){
        count++
        index = 0
    }
    setTimeout(type, 200)
}())

window.addEventListener("scroll", () =>{
    if(window.scrollY < 200){
        navbar.style.position = "initial"
        navbar.style.background = "linear-gradient(grey, black)"
    } else if(window.scrollY >= 200){
        navbar.style.position = "fixed"
        navbar.style.background = "rgb(0,0,0, 0.5)"

    }
})


welcomeSection.addEventListener("mouseenter", () =>{
    aboutMeNavText.style.color = "white"
    techStackNavText.style.color = "white"
    experienceNavText.style.color = "white"
    projectsNavText.style.color = "white"
    contactNavText.style.color = "white"
})

aboutMeSection.addEventListener("mouseenter", () =>{
    aboutMeNavText.style.color = "orange"
    techStackNavText.style.color = "white"
    experienceNavText.style.color = "white"
    projectsNavText.style.color = "white"
    contactNavText.style.color = "white"
})

techStackSection.addEventListener("mouseenter", () =>{
    techStackNavText.style.color = "orange"
    aboutMeNavText.style.color = "white"
    experienceNavText.style.color = "white"
    projectsNavText.style.color = "white"
    contactNavText.style.color = "white"
})

experienceSection.addEventListener("mouseenter", () =>{
    experienceNavText.style.color = "orange"
    techStackNavText.style.color = "white"
    aboutMeNavText.style.color = "white"
    projectsNavText.style.color = "white"
    contactNavText.style.color = "white"
})

projectsSection.addEventListener("mouseenter", () =>{
    projectsNavText.style.color = "orange"
    experienceNavText.style.color = "white"
    techStackNavText.style.color = "white"
    aboutMeNavText.style.color = "white"
    contactNavText.style.color = "white"
})

contactSection.addEventListener("mouseenter", () =>{
    contactNavText.style.color = "orange"
    projectsNavText.style.color = "white"
    experienceNavText.style.color = "white"
    techStackNavText.style.color = "white"
    aboutMeNavText.style.color = "white"
})


let projectsSliderPosition = 0

function moveRight(){
    if(window.outerWidth > 768 && projectsSliderPosition !== 2460){
        projectsSliderPosition += 820
        projectsSlider.scroll(projectsSliderPosition, 0)
    } else if(window.outerWidth <= 768 && window.outerWidth > 425 && projectsSliderPosition !== 1383){
        projectsSliderPosition += 461
        projectsSlider.scroll(projectsSliderPosition, 0)
    } else if(window.outerWidth <= 425 && window.outerWidth > 375 && projectsSliderPosition !== 1275){
        projectsSliderPosition += 425
        projectsSlider.scroll(projectsSliderPosition, 0)
    } else if(window.outerWidth <= 375 && projectsSliderPosition !== 1125){
        projectsSliderPosition += 375
        projectsSlider.scroll(projectsSliderPosition, 0)
    }
    hideSnakeInfo()
    hideWeatherInfo()
    hideFootasylumInfo()
    hideDiceInfo()
}

function moveLeft(){
    if(window.outerWidth > 768 && projectsSliderPosition >= 820){
        projectsSliderPosition -= 820
        projectsSlider.scroll(projectsSliderPosition, 0)
    } else if(window.outerWidth <= 768 && window.outerWidth > 425 && projectsSliderPosition >= 461){
        projectsSliderPosition -= 461
        projectsSlider.scroll(projectsSliderPosition, 0)
    } else if(window.outerWidth <= 425 && window.outerWidth > 375 && projectsSliderPosition >=425){
        projectsSliderPosition -= 425
        projectsSlider.scroll(projectsSliderPosition, 0)
    } else if(window.outerWidth <= 375 && projectsSliderPosition >= 375){
        projectsSliderPosition -= 375
        projectsSlider.scroll(projectsSliderPosition, 0)
    }
    hideSnakeInfo()
    hideWeatherInfo()
    hideFootasylumInfo()
    hideDiceInfo()
}

function showSnakeInfo(){
    snakeGameInfo.style.display = "flex"
    snakeMoreInfo.textContent = "Hide Info"
    snakeMoreInfo.setAttribute("onclick", "hideSnakeInfo()")    
}

function hideSnakeInfo(){
    snakeGameInfo.style.display = "none"
    snakeMoreInfo.textContent = "More Info"
    snakeMoreInfo.setAttribute("onclick", "showSnakeInfo()")    
}

function showWeatherInfo(){
    weatherAppInfo.style.display = "flex"
    weatherMoreInfo.textContent = "Hide Info"
    weatherMoreInfo.setAttribute("onclick", "hideWeatherInfo()")    
}

function hideWeatherInfo(){
    weatherAppInfo.style.display = "none"
    weatherMoreInfo.textContent = "More Info"
    weatherMoreInfo.setAttribute("onclick", "showWeatherInfo()")    
}
function showFootasylumInfo(){
    footasylumCloneInfo.style.display = "flex"
    footasylumMoreInfo.textContent = "Hide Info"
    footasylumMoreInfo.setAttribute("onclick", "hideFootasylumInfo()")    
}

function hideFootasylumInfo(){
    footasylumCloneInfo.style.display = "none"
    footasylumMoreInfo.textContent = "More Info"
    footasylumMoreInfo.setAttribute("onclick", "showFootasylumInfo()")    
}
function showDiceInfo(){
    diceGameInfo.style.display = "flex"
    diceMoreInfo.textContent = "Hide Info"
    diceMoreInfo.setAttribute("onclick", "hideDiceInfo()")    
}

function hideDiceInfo(){
    diceGameInfo.style.display = "none"
    diceMoreInfo.textContent = "More Info"
    diceMoreInfo.setAttribute("onclick", "showDiceInfo()")    
}
