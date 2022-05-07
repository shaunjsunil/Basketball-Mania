class Ball{
    constructor(x,y){
    var options={
    isStatic:false,
    friction : 0,
    density : 40,
    restitution : 0.1
    }
    this.x=x;
    this.y=y
    this.r=25
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    this.image=loadImage("ball.png")
    World.add(world,this.body);
}

display(){
     
    var Pos=this.body.position;
    push()
    translate(Pos.x, Pos.y);
    rotate(this.body.angle)
    fill(255,0,255)
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.r+70,this.r+70)
    
    pop()
}
}