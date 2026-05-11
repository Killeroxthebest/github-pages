// hello and alerts//
//console.log(`Hello world!`);//
//window.alert("Welcome to my beesite!");//
//window.alert("I like beeeees!");//

const submitButton = document.getElementById("mysubmit");
if (submitButton) {
    submitButton.onclick = function() {
        let username = document.getElementById("text").value;
        console.log(username);
        window.alert("Hello " + username + " welcome to my beesite!");
        document.getElementById("myP").textContent = "Welcome " + username + "!";
    }
}

const animalButton = document.getElementById("Amysubmit");
if (animalButton) {
    animalButton.onclick = function() {
        let animals = document.getElementById("Atext").value;
        console.log(animals);
        window.alert("I like " + animals + " too!");
        document.getElementById("myAP").textContent = "I like " + animals + " too!";
    }
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Contact form submitted:", { name, email, message });
        document.getElementById("contactResponse").textContent =
            `Thanks ${name}! Your message has been received.`;
        contactForm.reset();
    });
}

const christmasCanvas = document.getElementById("christmasCardGame");
const resetSnowButton = document.getElementById("resetSnowButton");

if (christmasCanvas) {
    const ctx = christmasCanvas.getContext("2d");
    const width = christmasCanvas.width;
    const height = christmasCanvas.height;
    let snowflakes = [];
    const sukunaImage = new Image();
    sukunaImage.src = "assets/GameIMade/christmas-sukuna.gif";

    function makeSnowflakes() {
        snowflakes = [];

        for (let i = 0; i < 65; i++) {
            snowflakes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speedX: Math.random() * 4 - 2,
                speedY: Math.random() * 2.8 + 0.8,
                radius: Math.random() * 5 + 3,
                rotation: Math.random() * Math.PI * 2,
                spin: Math.random() * 0.08 - 0.04,
                landed: false
            });
        }
    }

    function drawTriangle(color, x, y, size) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size, y + size);
        ctx.lineTo(x + size, y + size);
        ctx.closePath();
        ctx.fill();
    }

    function drawStar(color, x, y, size) {
        ctx.fillStyle = color;
        ctx.beginPath();

        for (let i = 0; i < 10; i++) {
            const angle = (Math.PI / 5) * i - Math.PI / 2;
            const radius = i % 2 === 0 ? size : size / 2;
            const px = x + Math.cos(angle) * radius;
            const py = y + Math.sin(angle) * radius;

            if (i === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }

        ctx.closePath();
        ctx.fill();
    }

    function drawCircle(color, x, y, radius) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawSnowTurtle(x, y, radius, rotation, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        ctx.lineTo(radius * 0.9, radius * 0.8);
        ctx.lineTo(-radius * 0.9, radius * 0.8);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    function drawTree() {
        drawTriangle("#228b22", 400, 145, 70);
        drawTriangle("#228b22", 350, 250, 70);
        drawTriangle("#228b22", 450, 290, 70);

        ctx.fillStyle = "#a52a2a";
        ctx.fillRect(420, 335, 60, 60);

        ctx.fillStyle = "#008080";
        ctx.fillRect(460, 335, 50, 50);

        drawCircle("#008080", 425, 230, 15);
        drawCircle("#ff7f50", 475, 280, 15);
        drawCircle("#ffff00", 425, 330, 15);
        drawStar("#ffff00", 400, 145, 25);
    }

    function drawSnowman() {
        drawCircle("#ffffff", 250, 350, 45);
        drawCircle("#ffffff", 250, 300, 35);
        drawCircle("#ffffff", 250, 250, 25);
    }

    function drawYellowFace() {
        drawCircle("#ffff00", 100, 350, 35);
        drawCircle("#000000", 125, 325, 10);
        drawCircle("#000000", 75, 325, 10);
    }

    function drawSukunaImage() {
        if (sukunaImage.complete && sukunaImage.naturalWidth > 0) {
            ctx.drawImage(sukunaImage, 18, 65, 150, 150);
        }
    }

    function drawScene() {
        ctx.fillStyle = "#87ceeb";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, height - 55, width, 55);

        drawSukunaImage();
        drawTree();
        drawSnowman();
        drawYellowFace();

        ctx.fillStyle = "#000000";
        ctx.font = "28px Arial";
        ctx.fillText("I count as a item trust", 500, 120);

        for (const snowflake of snowflakes) {
            if (!snowflake.landed) {
                snowflake.x += snowflake.speedX;
                snowflake.y += snowflake.speedY;
                snowflake.rotation += snowflake.spin;

                if (snowflake.x < 0) {
                    snowflake.x = width;
                } else if (snowflake.x > width) {
                    snowflake.x = 0;
                }

                if (snowflake.y >= height - 55) {
                    snowflake.landed = true;
                }
            }

            drawSnowTurtle(
                snowflake.x,
                snowflake.y,
                snowflake.radius,
                snowflake.rotation,
                snowflake.landed ? "#dc143c" : "#ffffff"
            );
        }

        window.requestAnimationFrame(drawScene);
    }

    makeSnowflakes();
    drawScene();

    if (resetSnowButton) {
        resetSnowButton.addEventListener("click", makeSnowflakes);
    }
}
