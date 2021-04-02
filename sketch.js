//et rectWidth = 5;
let yPos=[];
let lineSize = 5;
let redIndex = 0;
//delgetsee duurgen rect eer
//rect yanz buriin undurtei bolgon Math ashiglana

//let h1 = 400,h2 = 200;
function setup() 
{
  frameRate(10);  
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<windowWidth / lineSize; i++)
  {
    yPos.push(Math.random()*windowHeight+1);
  }
}

function draw() 
{
  background(0,0,0);
  for(let i = 0; i < windowWidth; i += lineSize)
  {
    fill(0,255,0);
    let index = i / lineSize;
    if(index == redIndex)
      fill(255,0,0);
    rect(i,windowHeight-yPos[index],lineSize,yPos[index]);
  }

  for(let i=0;i<yPos.length - 1;i++)
  {
    if(yPos[i] > yPos[i + 1])
    {
      let c = yPos[i];
      yPos[i] = yPos[i+1];
      yPos[i+1] = c;
      redIndex = i + 1;
    }
  }
}
