
document.addEventListener("DOMContentLoaded", function () {

    const heartsContainer =
        document.getElementById("hearts");

    const loveButton =
        document.getElementById("loveButton");

    const popup =
        document.getElementById("popup");

    const closePopup =
        document.getElementById("closePopup");


    // =========================
    // FLOATING HEARTS
    // =========================

    function createHeart() {

        const heart = document.createElement("span");

        heart.className = "heart";

        const symbols = [
            "♡",
            "♥",
            "✧",
            "୨୧"
        ];

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (13 + Math.random() * 18) + "px";

        const duration =
            5 + Math.random() * 4;

        heart.style.animationDuration =
            duration + "s";

        heartsContainer.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);

    }

    setInterval(createHeart, 700);


    // =========================
    // OPEN POPUP
    // =========================

    loveButton.addEventListener("click", function () {

        popup.classList.add("show");

        for (let i = 0; i < 20; i++) {

            setTimeout(function () {
                createHeart();
            }, i * 80);

        }

    });


    // =========================
    // CLOSE POPUP
    // =========================

    closePopup.addEventListener("click", function () {

        popup.classList.remove("show");

    });


    // Close when clicking outside

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {
            popup.classList.remove("show");
        }

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const heartsContainer = document.getElementById("hearts");
    const loveButton = document.getElementById("loveButton");

    function createHeart() {
        const heart = document.createElement("span");

        heart.className = "heart";

        const symbols = ["♡", "♥", "✧", "୨୧"];

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "vw";

        const duration = 5 + Math.random() * 4;
        heart.style.animationDuration = duration + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), duration * 1000);
    }

    setInterval(createHeart, 700);

    loveButton.addEventListener("click", function () {
        window.location.href = "page2.html";
    });

});
