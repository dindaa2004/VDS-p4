let walkers = [];

class Walker{
  constructor(posisiX, posisiY){
    this.x = posisiX;
    this.y = posisiY;
  }
  
  visual(){
    noStroke();
    let c = color(300, random(255), random(255));
    fill(c);
    ellipse(this.x, this.y, 30, 20);
  }

  jalan(){
    var stepX = int(random(-10,10));
    var stepY = int(random(-10,10));
    
    this.x = this.x + stepX/20;
    this.y = this.y + stepY;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<500;i++){
    walkers[i] = new Walker(random(windowWidth), random(windowHeight))
  }
}

function draw() {
  background(20);
  for (let i=0; i<500;i++){
    walkers[i].visual();
    walkers[i].jalan();
  }
}