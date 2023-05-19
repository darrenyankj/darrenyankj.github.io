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
  
    const section = document.querySelector(event.target.getAttribute('href'));
    const sectionTop = section.offsetTop - parseInt(getComputedStyle(section).paddingTop);
  
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
}