class rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA=pointA;
this.pointB=pointB;
var options={
bodyA:body1,
bodyB:body2,
}
}
	
	//create rope constraint here
	con = Matter.constraint.create({
		body1:roof,
		pointA:{x:0,y:0},
		body2:ball1,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1,
	})
	
	display(){
var pointA=this.rope1.body1.position
var pointA=this.rope1.body2.position
Push();
	strokeWeight(2);
	stroke(255);
	line(roof.position.x,roof.position.y,ball1.position.x,ball1.position.y);
	Pop();
	}
	
	
}

World.add(world,con);