//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog1,dog2;
function preload()
{
  dog1 = loadImage("Dog.png");
  dog2 = loadImage("happydog.png");
  
  
  
}

function setup() {
  createCanvas(500,500);

  database=firebase.database();

  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dog1);
  dog.scale=0.5
  
}


function draw() {  

  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2)
    dog.scale = 0.5;
}

  drawSprites();
  //add styles here
  textSize(15);
  fill("black");
  stroke(4);
  text("Note:Press up arrow to feed drago milk",50,100)
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

  if(x<0){
    x=0;
  }else{
    x=x+1
  }

  database.ref('/').update({
    food:x
  })
  
  

}
