

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;


var mousex = 0;
var mousey = 0;

addEventListener("mousemove", function (event) {
    mousex = event.clientX;
    mousey = event.clientY;
});



function Ball() {


    this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";;
    this.radius = Math.random() * 20 + 14;
    this.startradius = this.radius;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() / 5;
    this.update = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();

    };
}

var bal = [];
for (var i = 0; i < 50; i++) {
    bal.push(new Ball());
}

function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, tx, ty);
    for (var i = 0; i < bal.length; i++) {
        bal[i].update();
        bal[i].y += bal[i].dy;
        bal[i].x += bal[i].dx;
        if (bal[i].y + bal[i].radius >= ty) {
            bal[i].dy = -bal[i].dy;
        } else {
            bal[i].dy += bal[i].vel;
        }
        if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
            bal[i].dx = -bal[i].dx;
        }
        if (mousex > bal[i].x - 20 &&
            mousex < bal[i].x + 20 &&
            mousey > bal[i].y - 50 &&
            mousey < bal[i].y + 50 &&
            bal[i].radius < 70) {

            bal[i].radius = 0;
        }


    }

}

animate();

// setInterval(function () {
//     bal.push(new Ball());
//     bal.splice(0, 1);
// }, 400);
