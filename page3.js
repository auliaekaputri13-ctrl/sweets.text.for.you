
document.addEventListener("DOMContentLoaded", function () {

    const container =
        document.getElementById("floatingHearts");


    // CREATE FLOATING HEARTS

    function createHeart() {

        const heart = document.createElement("span");

        heart.className = "float-heart";

        const symbols = ["♡", "♥", "✧", "୨୧"];

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (12 + Math.random() * 17) + "px";

        const duration =
            5 + Math.random() * 5;

        heart.style.animationDuration =
            duration + "s";

        container.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);

    }


    // CONTINUOUS HEART ANIMATION

    setInterval(createHeart, 850);


    // INITIAL HEARTS

    for (let i = 0; i < 8; i++) {

        setTimeout(createHeart, i * 250);

    }


    // PHOTO FALLBACK

    const photo =
        document.querySelector(".memory-photo");

    photo.addEventListener("error", function () {

        photo.style.display = "none";

        const frame =
            document.querySelector(".photo-frame");

        frame.style.background =
            "linear-gradient(135deg, #f8dce7, #fffafd)";

        frame.style.display = "flex";
        frame.style.alignItems = "center";
        frame.style.justifyContent = "center";

        const placeholder =
            document.createElement("div");

        placeholder.textContent =
            "♡ Your favorite memory ♡";

        placeholder.style.fontFamily =
            "'Parisienne', cursive";

        placeholder.style.fontSize = "27px";
        placeholder.style.color = "#bd7893";

        frame.appendChild(placeholder);

    });

});
