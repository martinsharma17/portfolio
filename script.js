$(document).ready(function () {
    $(window).scroll(function () {
        //  sticky navbar on scroll script  //
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        //  scroll-up button show/hide script  //
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    //  slide-up script  //

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        //  removing smooth scroll on slide-up button click  //
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        //  Smooth scroll on Menu Items click  //

        $("html").css("scrollBehavior", "smooth");
    });

    //  Toggle Navbar  //

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //  Typing Text Animation  //

    var typed = new Typed(".typing", {
        strings: [
            // "Fullstack Developer",
            "Software Developer",
            // "Python Developer",
            // "Designer",
            // "Founder",
            // "Author"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
            // "Fullstack Developer",
            "Software Developer",
            // "Python Developer",
            // "Founder",
            // "Author"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //  Owl Carousel  //

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error connecting to server.');
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Prepare EmailJS template parameters
    const templateParams = {
        from_name: name,
        to_name: email,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
    emailjs
        .send("service_3f2fhoe", "template_lt3wopw", templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });

    // Optionally, reset the form
    document.getElementById("contactForm").reset();
});
