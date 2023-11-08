document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".ho-slider ul li");
    const dots = document.querySelectorAll(".ho-pagination-dots .dot");

    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        slides[n].classList.add("active");
        dots[n].classList.add("active");
        currentSlide = n;
    }

    // Function to move to the next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Function to move to the previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }

    // Add click event listeners to the pagination dots
    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            showSlide(index);
        });
    });

    // Set an interval to automatically move to the next slide
    setInterval(nextSlide,5000);
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");
    const sectionsArray = Array.from(sections);

    function handleScroll() {
        sectionsArray.forEach(section => {
            const sectionOffset = section.getBoundingClientRect();
            if (sectionOffset.top < window.innerHeight - 100) {
                section.classList.add("in-viewport");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initially apply animations
});


    