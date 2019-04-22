'use strict';

class Spaceship {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.width = 40;
    this.height = 50;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - this.height;
    this.speed = 7;
    this.direction = 0;
    this.lives = 3;
    this.score = 0;
    this.currentLevel = 0;
    this.bullets = [];
    this.image = new Image()
    this.image.src = './img/spaceship.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  update() {
    if (this.x < 0) {
      this.x = 0
    } else if (this.x + this.width > this.canvas.width) {
      this.x = this.canvas.width - this.width
    }
    this.x += this.direction * this.speed
  }

  setDirection(newDir) {
    this.direction = newDir
  }

  removeLife() {
    this.lives--
    document.querySelector('.live-img').remove()
    return (this.lives === 0 ? true : false)
  }

  updateScore() {
    this.score += 100
  }

  levelUp() {
    this.currentLevel++
  }
}