// Daniel Shiffman
// http://codingtra.in

// Simple Particle System
// https://youtu.be/UcdigVaIYAk

class Particle {

    constructor(x,y,vx,vy,alpha) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.alpha = alpha;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(random(0,255), random(0,255), random(0,255), this.alpha);
      ellipse(this.x, this.y, 16);
    }
  
  }