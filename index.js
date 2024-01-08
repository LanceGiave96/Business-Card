
let div_skills_el = document.getElementById("div-skills")
let div_description_el = document.getElementById("div-presentation")
div_skills_el.style.display = "none"
div_description_el.style.display = "block"

let button_el = document.getElementById("button-skills")

function showSkills(){
    
    if(div_skills_el.style.display === "none")
    {
        div_skills_el.style.display = "block"
        div_description_el.style.display = "none"
        button_el.textContent = "Skills ➖​"
    }
    else
    {
        div_skills_el.style.display = "none"
        div_description_el.style.display = "block"
        button_el.textContent = "Skills ​➕​"
    }

}