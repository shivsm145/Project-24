class Stone
{
	constructor(x,y,width,height)
	{

	var options =
	{
		'density':30,
		'friction': 3,
		'restitution':0.8
	};
		//this.x=x;
		//this.y=y;
		this.body=Bodies.rectangle(x, y,width,height, options)
		this.width=width;
		this.height=height;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
            rect(0,0,this.width,this.height);
			pop()
	}

}