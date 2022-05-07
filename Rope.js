class Rope{
    constructor(bodyA,pointB){
    var options={
    bodyA : bodyA,
    pointB : pointB,
    stiffness : 0.055,
    length : 4,
    }
    this.pointB=pointB;
    this.rope = Matter.Constraint.create(options)
    
    World.add(world,this.rope)
    }

    fly(){
        this.rope.bodyA =null;
        
    }
    attach(body){this.rope.bodyA=body}

    display(){
        if(this.rope.bodyA){ 
     var pointA=this.rope.bodyA.position;
    var   pointB=this.pointB;  
      push()
     strokeWeight(4)
      stroke("orange")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    pop()
        }
    
    }
    
    }