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