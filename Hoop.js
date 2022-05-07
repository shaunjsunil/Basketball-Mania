class Hoop{
    constructor(x,y){
        this.x=x;
        this.y=y
        this.hoopWidth=20
        this.hoopHeight=50

        this.image = loadImage("hoop.png")
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.leftbody=Bodies.rectangle(this.x,this.y,this.hoopWidth,this.hoopHeight,{isStatic : true})
        this.rightbody=Bodies.rectangle(this.x+90,this.y-30,this.hoopWidth,this.hoopHeight+60,{isStatic : true})
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
       
        var posr = this.rightbody.position;
        rectMode(CENTER)
        fill(this.color)
        rect(posr.x,posr.y,this.hoopWidth,this.hoopHeight+60)

        push()
        translate(posr.x-20,posr.y+40)
        imageMode(CENTER);
        image(this.image,0,0,this.hoopWidth*30,400)
        pop()
    }

}