'use strict';

class Bullet {
  constructor(canvas, x, y, dir, color) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d');
    this.width = 3;
    this.height = 20;
    this.x = x - this.width / 2;
    this.y = y;
    this.speed = 5;
    this.direction = dir
    this.bulletColor = color
  }

  draw() {
    this.ctx.fillStyle = this.bulletColor
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  update() {
    this.y = this.y - this.speed * this.direction
  }
}