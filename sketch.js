let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
      circle(0, 0, height / espAltura);
      pop();

      function setup() {
        createCanvas(windowWidth, windowHeight);
        // put setup code here
    background (100,149,237);
    strokeWeight(4);
    stroke(100,149,237);
    fill(255,222,173);
    circle(650, 200, 150);
    strokeWeight(0.5);
    stroke(255,255,255);
    fill (255,255,255);
    circle(620, 190, 25);
    strokeWeight(0.5);
    stroke(255,255,255);
    fill (255,255,255);
    circle(675, 190, 25);
    strokeWeight(0.7);
    stroke(0,0,0);
    fill (107,66,38);
    circle(675, 190, 15);
    strokeWeight(0.7);
    stroke(0,0,0);
    fill (107,66,38);
    circle(620, 190, 15);
    strokeWeight(0.7);
    stroke(0,0,0);
    fill (0,0,0);
    circle(620, 190,7);
    strokeWeight(0.7);
    stroke(0,0,0);
    fill (0,0,0);
    circle(675, 190, 7);
    fill (219,147,112);
    noStroke();
    arc(650, 223, 50, 50, 0 , PI, CHORD);
    fill(255,255,255);
    noStroke();
    rect(650, 223, 5, 5);
    fill(255,255,255);
    noStroke();
    rect(656, 223, 5, 5);
    fill(255,255,255);
    noStroke();
    rect(644, 223, 5, 5);
    fill(255,255,255);
    noStroke();
    rect(638, 223, 5, 5);
    fill(255,255,255);
    noStroke();
    rect(632, 223, 5, 5);
    fill(255,255,255);
    noStroke();
    rect(662, 223, 5, 5);
    rect(638, 223, 5, 5);
    fill(35,35,142);
    noStroke();
    rect(633, 224, 3, 3);
    fill(35,35,142);
    noStroke();
    rect(639, 224, 3, 3);
    fill(35,35,142);
    noStroke();
    rect(645, 224, 3, 3);
    fill(35,35,142);
    noStroke();
    rect(651, 224, 3, 3);
    fill(35,35,142);
    noStroke();
    rect(657, 224, 3, 3);
    fill(35,35,142);
    noStroke();
    rect(663, 224, 3, 3);
    fill (250,128,114);
    noStroke();
    arc(650, 233, 31, 31, 0 , PI, CHORD);
    fill(255,222,173);
    noStroke();
    rect(640, 250, 25, 45);
    fill(178,34,34);
    noStroke();
    square(585, 280, 140, 20);
    fill (255,222,173);
    noStroke();
    arc(653, 280, 100, 27, 0 , PI, CHORD);
    fill (28,28,28);
    noStroke();
    rect(612, 418, 30, 80, 45);
    fill (28,28,28);
    noStroke();
    rect(670, 418, 30, 80, 45);
    fill(178,34,34); //parte dos braços da t-shirt
    noStroke();
    rect(562, 280, 40, 53);
    fill(178,34,34);
    noStroke();
    rect(708, 280, 40, 53);
    fill (255,222,173); //braços
    noStroke();
    rect(528, 300, 35, 18, 45);
    fill (255,222,173);
    noStroke();
    rect(747, 300, 35, 18, 45);
    fill (28,28,28); //calças
    noStroke();
    rect(599, 418, 110, 35);
    
    }
    
    
    
    
    function draw() {
        // put drawing code here
    
    }
    
    }
  }
}