'use strict';

class Enemy {
  constructor(canvas, x, y, img, increasedSpeed) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
    this.size = 40;
    this.x = x;
    this.y = y;
    this.speed = increasedSpeed;
    this.xDirection = 1
    this.yDirection = 1;
    this.axis = 'x';
    this.startingXPos = this.x;
    this.startingYPos = this.y;
    this.bullets = [];
    this.image = new Image();
    this.image.src = img;
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
  }

  update() {
    this.movement(this.axis)
  }

  movement(movingAxis) {
    if (movingAxis === 'x') {
      this.x += this.xDirection * this.speed
      if (Math.abs(this.startingXPos - this.x) > 100) {
        this.xDirection *= -1
        this.axis = 'y'
        this.startingYPos = this.y
      }
    } else {
      this.y += this.yDirection * this.speed
      if (Math.abs(this.startingYPos - this.y) > 15) {
        this.axis = 'x'
        this.startingXPos = this.x
      }
    }
  }
}
