function copyFunc(id) {
    var copyText = document.getElementById(id).innerText;

    navigator.clipboard.writeText(copyText);

    var tooltipText = id + "-tooltip";
    
    document.getElementById(tooltipText).innerText = "Copied!";
}

function revert(id){
    var tooltipText = id + "-tooltip";
    
    document.getElementById(tooltipText).innerText = "Copy";
}

function scrollToSection(event) {
    event.preventDefault();
  
    const section = document.querySelector(event.currentTarget.getAttribute('href'));
    const sectionTop = section.offsetTop - parseInt(getComputedStyle(section).paddingTop);
  
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
}

function brightnessToggle(){
    document.body.classList.toggle("dark-theme");

    const allTooltips = document.querySelectorAll(".tooltip img");

    allTooltips.forEach((iconImage) => iconImage.classList.toggle("img-dark-theme"));
    
    var brightMode = document.getElementById("brightness-mode");

    brightMode.innerText = brightMode.innerText == "Light" ? "Dark" : "Light";

    document.getElementById("brightness").classList.toggle("brightness-toggle-gray");
}