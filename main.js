
// About me section contents
let aboutMeHorizontalText = document.getElementById("aboutMeText-horizontal")
const aboutMeSection = document.getElementById("section1")
const introductionText = document.getElementById("introduction-text")

//visuals
aboutMeHorizontalText.style.display = "none"
introductionText.style.display = "none"

// Stack section contents
let stackHorizontalText = document.getElementById("stackText-horizontal")
const stackSection = document.getElementById("section2")
let frontendSection = document.getElementById("frontend")
let htmlImg = document.getElementById("html-img")
let htmlOrangeImg = document.getElementById("htmlorange-img")
let cssImg = document.getElementById("css-img")
let cssOrangeImg = document.getElementById("cssorange-img")
let javascriptImg = document.getElementById("javascript-img")
let javascriptOrangeImg = document.getElementById("javascriptorange-img")
const htmlTextSection = document.getElementById("HTMLText")
const cssTextSection = document.getElementById("CSSText")
const javaScriptTextSection = document.getElementById("javaScriptText")

//visuals
stackHorizontalText.style.display = "none"
htmlOrangeImg.style.display = "none"
cssOrangeImg.style.display = "none"
javascriptOrangeImg.style.display = "none"
frontendSection.style.visibility = "hidden"
htmlTextSection.style.display = "none"
cssTextSection.style.display = "none"
javaScriptTextSection.style.display = "none"

// Project section contents
let projectsHorizontalText = document.getElementById("projectsText-horizontal")
const projectsSection = document.getElementById("section3")
const projectsThumbnails = document.getElementById("projects-thumbnails")
const diceGameThumbnailText = document.getElementById("dice-text")
const pianoThumbnailText = document.getElementById("piano-text")
const webCloneThumbnailText = document.getElementById("web-clone-text")

//visuals
projectsHorizontalText.style.display = "none"
diceGameThumbnailText.style.display = "none"
pianoThumbnailText.style.display = "none"
webCloneThumbnailText.style.display = "none"
projectsThumbnails.style.visibility = "hidden"

// Contact section contents
let contactHorizontalText = document.getElementById("contactText-horizontal")
const contactSection = document.getElementById("section4")
const contactForm = document.getElementById("contact-message")
contactHorizontalText.style.display = "none"
contactForm.style.visibility = "hidden"




function sectionOneHover(){
    stackSection.style.filter = "blur(4px)"
    projectsSection.style.filter = "blur(4px)"
    contactSection.style.filter = "blur(4px)"
    let aboutText = document.getElementById("about-text")
    let meText = document.getElementById("me-text")
    let timer = setTimeout(aboutMeTextRemover, 900)
    function aboutMeTextRemover(){
        aboutText.style.display = "none" 
        meText.style.display = "none"
        aboutMeHorizontalText.style.display = "initial"
        aboutMeHorizontalText.classList.add("text-animation")
        introductionText.style.display = "initial"
        document.querySelector("p").classList.add("subheading-animate")
    }
}


function sectionOneReset(){
    stackSection.style.filter = "none"
    projectsSection.style.filter = "none"
    contactSection.style.filter = "none"
    let aboutText = document.getElementById("about-text")
    let meText = document.getElementById("me-text")
    aboutText.style.display = "initial" 
    meText.style.display = "initial"
    aboutMeHorizontalText.style.display = "none"
    introductionText.style.display = "none"
}


function sectionTwoHover(){
    aboutMeSection.style.filter = "blur(4px)"
    projectsSection.style.filter = "blur(4px)"
    contactSection.style.filter = "blur(4px)"
    let stackText = document.getElementById("stack-text")
    stackText.style.display = "none"
    stackHorizontalText.style.display = "initial"
    stackHorizontalText.classList.add("text-animation")
    frontendSection.style.visibility = "visible"
    frontendSection.classList.add("subheading-animate")
}

function sectionTwoReset(){
    aboutMeSection.style.filter = "none"
    projectsSection.style.filter = "none"
    contactSection.style.filter = "none"
    let stackText = document.getElementById("stack-text")
    stackText.style.display = "initial" 
    stackHorizontalText.style.display = "none"
    frontendSection.style.visibility = "hidden"
    htmlTextSection.style.display = "none"
    cssTextSection.style.display = "none"
    javaScriptTextSection.style.display = "none"
}

function sectionThreeHover(){ 
    aboutMeSection.style.filter = "blur(4px)"
    stackSection.style.filter = "blur(4px)"
    contactSection.style.filter = "blur(4px)"
    let projectsText = document.getElementById("projects-text")
    projectsText.style.display = "none"
    projectsHorizontalText.style.display = "initial"
    projectsHorizontalText.classList.add("text-animation")
    projectsThumbnails.style.visibility = "visible"
}

function sectionThreeReset(){
    aboutMeSection.style.filter = "none"
    stackSection.style.filter = "none"
    contactSection.style.filter = "none"
    let projectsText = document.getElementById("projects-text")
    projectsText.style.display = "initial"
    projectsHorizontalText.style.display = "none"
    projectsThumbnails.style.visibility = "hidden"
}

function sectionFourHover(){
    aboutMeSection.style.filter = "blur(4px)"
    projectsSection.style.filter = "blur(4px)"
    stackSection.style.filter = "blur(4px)"
    let contactText = document.getElementById("contact-text")
    contactText.style.display = "none"
    contactHorizontalText.style.display = "initial"
    contactHorizontalText.classList.add("text-animation")
    contactForm.style.visibility = "visible"

}

function sectionFourReset(){
    aboutMeSection.style.filter = "none"
    projectsSection.style.filter = "none"
    contactSection.style.filter = "none"
    let contactText = document.getElementById("contact-text")
    contactText.style.display = "initial"
    contactHorizontalText.style.display = "none"
    contactForm.style.visibility = "hidden"

}

function frontendHover(){
    htmlImg.style.display ="none"
    cssImg.style.display ="none"
    javascriptImg.style.display ="none"
    htmlOrangeImg.style.display = "initial"
    cssOrangeImg.style.display = "initial"
    javascriptOrangeImg.style.display = "initial"
    htmlOrangeImg.classList.add("image-animation")
    cssOrangeImg.classList.add("image-animation")
    javascriptOrangeImg.classList.add("image-animation")
    htmlOrangeImg.classList.remove("img-hover")
    cssOrangeImg.classList.remove("img-hover")
    javascriptOrangeImg.classList.remove("img-hover")
}

function frontendReset(){
    htmlImg.style.display ="initial"
    cssImg.style.display ="initial"
    javascriptImg.style.display ="initial"
    htmlOrangeImg.style.display = "none"
    cssOrangeImg.style.display = "none"
    javascriptOrangeImg.style.display = "none"
}

function showHTMLText(){
    htmlTextSection.style.display = "initial"
    htmlTextSection.classList.add("subheading-animate")
    cssTextSection.style.display = "none"
    javaScriptTextSection.style.display = "none"
}

function showCSSText(){
    htmlTextSection.style.display = "none"
    javaScriptTextSection.style.display = "none"
    cssTextSection.style.display = "initial"
    cssTextSection.classList.add("subheading-animate")
}

function showJavaScriptText(){
    htmlTextSection.style.display = "none"
    cssTextSection.style.display = "none"
    javaScriptTextSection.style.display = "initial"
    javaScriptTextSection.classList.add("subheading-animate")
}

function diceHover(){
    diceGameThumbnailText.style.display = "initial"
}

function pianoHover(){
    pianoThumbnailText.style.display = "initial"
}

function webCloneHover(){
    webCloneThumbnailText.style.display = "initial"
}

function diceLeave(){
    diceGameThumbnailText.style.display = "none"
}

function pianoLeave(){
    pianoThumbnailText.style.display = "none"
}

function webCloneLeave(){
    webCloneThumbnailText.style.display = "none"
}