class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.hold1 = loadImage('holder1.png');
        this.hold2 = loadImage('holder2.png');
        this.holder = loadImage('sling3.png');
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

attach(body) {
    this.rope.bodyA = (body)
}

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        image(this.hold1,118,75);
        image(this.hold2,134,106);

        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if (pointA.x<120) {
                line(pointA.x-17, pointA.y+1, pointB.x+13, pointB.y-10);
                line(pointA.x-17, pointA.y+1, pointB.x+28, pointB.y+21);
                image(this.holder,pointA.x-30,pointA.y-14,15,30)
            }
            else {
                line(pointA.x+20, pointA.y-3, pointB.x+13, pointB.y-10);
                line(pointA.x+20, pointA.y-3, pointB.x+28, pointB.y+21);
                image(this.holder,pointA.x+20,pointA.y-18,15,30)
            }
        }
    }
    
}

// pointB= fixed