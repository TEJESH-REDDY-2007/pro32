class Block1 extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.image = loadImage("rect1.png");
    this.Visiblity = 255;
  }

  display() {
    //console.log(this.body.speed);

    if(this.body.speed<4) {
      super.display();
    }

    else {
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y,30,40);
      pop();
    }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score = score+1;
    }
  }
}