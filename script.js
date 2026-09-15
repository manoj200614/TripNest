document.addEventListener("DOMContentLoaded", function () {

    const tripForm = document.getElementById("tripForm");

    if (tripForm) {

        tripForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const tripName = document.getElementById("tripName").value;
            const destination = document.getElementById("tripDestination").value;
            const budget = document.getElementById("tripBudget").value;

            alert(
                "Trip created successfully!\n\n" +
                "Trip: " + tripName + "\n" +
                "Destination: " + destination + "\n" +
                "Budget: ₹" + budget
            );

            tripForm.reset();

            const modalElement = document.getElementById("createTripModal");

            const modal = bootstrap.Modal.getInstance(modalElement);

            if (modal) {
                modal.hide();
            }

        });

    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});