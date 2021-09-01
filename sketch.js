var box;





function setup() {
  createCanvas(400,400);
  box = createSprite(130,180,200,10)
}

function draw() 
{
  background(30)
  }
  
  if(keyIsDown(UPARROW))
  {
    background('red');
  }

  if(keyIsDown(DOWNARROW))
  {
    background('green');
  }

if(keyIsDown(RIGHTARROW)){
  background('blue');
}

