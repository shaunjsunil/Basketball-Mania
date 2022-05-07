class Particle{
    constructor(x,y){
    var options={
    isStatic:true,
    
    }
    this.x=x;
    this.y=y;
    this.r=2
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        fill("white")
        ellipse(0,0,this.r*2,this.r*2)
        pop()
    }
    
    
    
    }