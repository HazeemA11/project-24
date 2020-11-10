class paper{
    constructor(x,y,width,height){

        var paper_options = {
            isStatic : true
        } 

        this.body = Bodies.rectangle(x,y,width,height,paper_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
        World.add(world,this.body)


    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        pop()


    }







}