// =====================================================
// LUMIÈRE SALON
// MAIN JAVASCRIPT
// =====================================================


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("open");

    });

}


// Close mobile menu when clicking a navigation link

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


// ================= APPOINTMENT FORM =================

const appointmentForm =
    document.getElementById("appointmentForm");


if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        const service =
            document.getElementById("service").value;


        alert(
            `Thank you, ${name}!

Your appointment request for ${service}
has been received.

We will contact you soon to confirm your appointment.`
        );


        appointmentForm.reset();

    });

}


// ================= DATE RESTRICTION =================

// Prevent users from selecting a past date

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];


    dateInput.setAttribute(
        "min",
        today
    );

}