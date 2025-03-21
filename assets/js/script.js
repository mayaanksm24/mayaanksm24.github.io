/*Nav Bar*/
function myMenu() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/*Shadows on nav*/
window.onscroll = function () { headerShadow(); }
function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

/*Type Effect*/
var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "ML Practitioner"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})
/*Scroll Reveal*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*Home*/
sr.reveal('.featured-text-card', {})
sr.reveal('.featured_name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })
/*ProjINtern*/
sr.reveal('.project-box', { interval: 200 })
/*Headings*/
sr.reveal('.top-header', {})
/*ABout INfo, Contact info*/
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
/*ABout skills,form box*/
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })
/*Active link to be changed*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*To select github repos*/
document.addEventListener("DOMContentLoaded", () => {
    const toggleDropdown = (btnId, dropdownId) => {
        const button = document.getElementById(btnId);
        const dropdown = document.getElementById(dropdownId);

        button.addEventListener("click", () => {
            dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
        });
    };

    const setupGoButton = (goBtnId, selectId) => {
        const goButton = document.getElementById(goBtnId);
        const selectElement = document.getElementById(selectId);

        goButton.addEventListener("click", () => {
            const selectedRepo = selectElement.value;
            if (selectedRepo) {
                window.open(selectedRepo, "_blank");
            } else {
                alert("Please select a repository first!");
            }
        });
    };

    // Apply toggle and setup functions for each button and dropdown
    toggleDropdown("know-more-ml-btn", "repo-dropdown-container");
    toggleDropdown("know-more-game-btn", "game-dropdown-container");

    setupGoButton("go-btn", "repo-select");
    setupGoButton("go-game-btn", "game-select");

    //Contact - Send button functionality
    document.getElementById("sendMail").addEventListener("click", function () {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }

        let mailtoLink = `mailto:mayaanksm24@gmail.com?subject=New Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    });

});