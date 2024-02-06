document.getElementById("noBtn").addEventListener("mouseover", function () {
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Get random positions within window dimensions
    const randomX = Math.floor(Math.random() * (windowWidth - 100)); // Adjust 100 based on button width
    const randomY = Math.floor(Math.random() * (windowHeight - 100)); // Adjust 100 based on button height

    // Set button position
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});


const duration = 15 * 1000,
    animationEnd = Date.now() + duration;

let skew = 1;

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

(function frame() {
    const timeLeft = animationEnd - Date.now(),
        ticks = Math.max(200, 500 * (timeLeft / duration));

    skew = Math.max(0.8, skew - 0.001);

    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: Math.random() * skew - 0.2,
        },
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        shapes: ["heart"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(1, 2),
        drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
        requestAnimationFrame(frame);
    }
})();


document.getElementById("yesBtn").addEventListener("click", function () {
    // Change headline text
    document.querySelector(".headline").innerText = "Yaay!!! You're my Valentine! ❤️";
    document.getElementById("valentineGif").src = "new_valentine_gif.gif";

    // Remove the "No" button
    document.getElementById("noBtn").remove();
    document.getElementById("yesBtn").remove();

    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
    });

    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
    });
});


document.getElementById("yesBtn").addEventListener("click", function () {
    // Trigger confetti effect
    const duration = 15 * 1000,
        animationEnd = Date.now() + duration,
        defaults = {
            startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, shapes: ["heart"], scalar: 2,
            colors: ["FFC0CB", "FF69B4", "FF1493", "C71585", "FFFFFF"],
        };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 10 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
});

