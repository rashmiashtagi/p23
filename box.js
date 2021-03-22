class Box {
    constructor(){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(200,300, 50, 50, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }

}