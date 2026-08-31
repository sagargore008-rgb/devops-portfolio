/* =========================================================
   SAGAR GORE - DEVOPS PORTFOLIO
========================================================= */


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar-wrapper");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section, .project, .skill, .highlight, .stat, .pipeline-step"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   TERMINAL CURSOR
========================================================= */

const cursor = document.querySelector(".cursor");

if (cursor) {

    setInterval(() => {

        if (cursor.style.opacity === "0") {

            cursor.style.opacity = "1";

        } else {

            cursor.style.opacity = "0";

        }

    }, 500);

}


/* =========================================================
   PROJECT CARD EFFECT
========================================================= */

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.zIndex = "10";

    });

    project.addEventListener("mouseleave", () => {

        project.style.zIndex = "1";

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c🚀 Sagar Gore - DevOps Portfolio",
    "color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
    "%cAWS • Docker • Jenkins • Kubernetes • Linux • CI/CD",
    "color:#22c55e;font-size:13px;"
);