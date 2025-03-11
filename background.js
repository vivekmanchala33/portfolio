function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    noStroke();
    fill(random(255), random(255), random(255), 100);
    let size = random(5, 20);
    ellipse(random(width), random(height), size, size);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}