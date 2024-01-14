
//Function to set randomically a image background
import background from "./background.js"
localStorage.setItem("images",JSON.stringify(background.images))
let images = []
const button_background = document.getElementById("button-background")
button_background.addEventListener("click",getRandomBackground)

function getRandomBackground(){

    if(!images.length)
    {   
        images = JSON.parse(localStorage.getItem("images"))
    }
        
    let random = Math.floor( Math.random() * images.length )
    let image_url = images[random].url
    document.body.style.backgroundImage = `url(${image_url})`
    images.splice(random,1)
    console.log(`Length: ${images.length}`)

}

//Set random background when site loaded
getRandomBackground()

//Show/Hide skills/presentation section by clicking button
const div_skills_el = document.getElementById("div-skills")
const div_description_el = document.getElementById("div-presentation")
div_skills_el.style.display = "none"
div_description_el.style.display = "block"

const button_skills = document.getElementById("button-skills")
button_skills.addEventListener("click",function(){
    
    if(div_skills_el.style.display === "none")
    {
        div_skills_el.style.display = "block"
        div_description_el.style.display = "none"
        button_skills.textContent = "Skills ➖​"
    }
    else
    {
        div_skills_el.style.display = "none"
        div_description_el.style.display = "block"
        button_skills.textContent = "Skills ​➕​"
    }

}
)
