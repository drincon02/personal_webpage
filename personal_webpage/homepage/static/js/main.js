function tabexperience() {
    const exp_button = document.getElementById('experiencebutton')
    const skills_button = document.getElementById('skillsbutton')
    console.log(exp_button)
    exp_button.style.backgroundColor = "#16a34a"
    skills_button.style.backgroundColor = ""
    const skillsdiv = document.getElementById('skillsdiv')
    const experiencesdiv = document.getElementById('experiencesdiv') 
    experiencesdiv.style.display = "block"
    skillsdiv.style.display = "none"
}

function tabskills() {
    const exp_button = document.getElementById('experiencebutton')
    const skills_button = document.getElementById('skillsbutton')
    skills_button.style.backgroundColor = "#16a34a"
    exp_button.style.backgroundColor = "black"
    const skillsdiv = document.getElementById('skillsdiv')
    const experiencesdiv = document.getElementById('experiencesdiv') 
    experiencesdiv.style.display = "none"
    skillsdiv.style.display = "block"
}

const homepage = document.getElementById('homepage')

setTimeout(() => {
    document.getElementById('bootload').style.display = 'none'
    document.getElementById('homepage').style.display = 'block'
}, 3000)

const titles = ["Backend Engineer", "Cloud Engineer", "Python developer", "Odoo developer", "FullStack Engineer", "Software Engineer"]
let i = 0
setInterval(() => {
    document.getElementById('typewritertext').textContent = titles[i];
    i++;
    if(i > titles.length) {
        i = 0;
    }}, 3000)