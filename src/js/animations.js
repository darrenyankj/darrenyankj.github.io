// Changing timeline animation based on media query
const mediaQuery = window.matchMedia("(max-width: 900px)");
if (mediaQuery.matches){
    const timelineLeft = document.querySelectorAll(".left-timeline");
    timelineLeft.forEach((el) => {
        el.classList.remove("animation-hidden-left");
        el.classList.add("animation-hidden-right");
    });
}


// Adding class in js so that elements are not hidden for js disabled platforms
const hiddenElementsAll = ["left", "right", "appear"];
for (const element of hiddenElementsAll) {
    const hiddenElements = document.querySelectorAll(".animation-hidden-" + element);
    hiddenElements.forEach((el) => el.classList.add("animation-hidden-" + element + "-js"));
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("animation-show");
        } else {
            entry.target.classList.remove("animation-show");
        }
    });
});

// Looping through hidden elements for observer
for (const element of hiddenElementsAll) {
    const hiddenElements = document.querySelectorAll(".animation-hidden-" + element);
    hiddenElements.forEach((el) => observer.observe(el));
}

// Checking for active tab in Nav Bar
const activeLink = document.querySelectorAll(".nav-link");
const section = document.querySelectorAll("section");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    activeLink.forEach(ltx => ltx.classList.remove("active"));
    activeLink[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);