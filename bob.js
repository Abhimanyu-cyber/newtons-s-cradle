class bob
{
	constructor(x,y)
	{
		var options={
			
			restitution:1,
			friction:0.3,
			density:0.8
			
			}
		
		this.body=Bodies.circle(x, y, 25, options)
		World.add(world, this.body);

	}
	display()
	{
		push();
		ellipseMode(RADIUS);
			
			fill("purple");
			ellipse(this.body.position.x, this.body.position.y, 25, 25);
		
			
	}

}