
document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openButton");
    const letter = document.getElementById("letter");
    const hint = document.getElementById("hint");
    const hearts = document.getElementById("hearts");

    let isOpen = false;

    openButton.addEventListener("click", function () {

        isOpen = !isOpen;

        if (isOpen) {
            letter.classList.add("show");
            openButton.textContent = "CLOSE THE LETTER ♡";
            hint.textContent = "hope this little letter makes you smile ♡";

            setTimeout(function () {
                letter.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 300);

        } else {
            letter.classList.remove("show");
            openButton.textContent = "OPEN THE LETTER ♡";
            hint.textContent = "tap the button to read your letter";
        }

    });

    function createHeart() {
        const heart = document.createElement("span");

        heart.className = "heart";
        heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (12 + Math.random() * 15) + "px";

        const duration = 5 + Math.random() * 4;
        heart.style.animationDuration = duration + "s";

        hearts.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);
    }

    setInterval(createHeart, 800);

});
