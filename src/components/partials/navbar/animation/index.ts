import gsap from "gsap";

const animateNavbarActive = () => {
    const navbar = document.querySelector(".nav-mobile");
    const navbarUl = document.querySelector(".nav-mobile ul");
    const navLinks = document.querySelectorAll(".nav-mobile .nav-link");

    if(navbar && navLinks) {
        const tl = gsap.timeline()

        tl.from(navbar, {
            height: 0,
        })
        .to(navbar, {
            height: "100vh",
        })
    
        navLinks.forEach((link, _) => {
            tl.fromTo(link, {
                y: 200,
            }, {
                y: 0,
                opacity: 1,
                duration: 0.2,
            })
        })
    }
}

const animateNavbarInactive = () => {
    const navbar = document.querySelector(".nav-mobile");
    const navbarUl = document.querySelector(".nav-mobile ul");
    const navLinks = document.querySelectorAll(".nav-mobile .nav-link");

    if(navbar && navLinks) {
        const tl = gsap.timeline()

        navLinks.forEach((link, _) => {
            tl.fromTo(link, {
                y: 0,
                opacity: 1
            }, {
                y: 200,
                opacity: 0,
                duration: 0.2,
            })
        })

        tl
        .to(navbar, {
            height: 0,
        })
    }
}

export { animateNavbarActive, animateNavbarInactive }
