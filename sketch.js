var dog,happydDog,database,foodStock,foodS;
var firebase

function preload(){
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  foodStock=database.ref('food')
  foodStock.on("value",readStock)

  
  food = database.ref('food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.4;
 
}


function draw() {  
background("yellow");
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogimg2);
}
  drawSprites();
  fill("Black");
  textSize(30);
  stroke(7);
  text("Press Up Arrow Key To Feed Dog",70,90);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}

