class Polygon {
    constructor(x,y,r){
        var options={
            'restitution':0.5,
            'density':0.9,
            'friction':0.7
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill(rgb(180,225,250));
        ellipse(pos.x,pos.y,pos.r);
    }
}