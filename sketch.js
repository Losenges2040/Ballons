var Ballon,BallonMation,BallonPos,Ha;

function preload(){
  BallonMation = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}

function setup() {
  createCanvas(1680,900);
  database = firebase.database();
 Ballon = createSprite(400, 200, 50, 50);
 Ballon.addAnimation("Players",BallonMation)
 Ballon.scale = 0.4

 Ha = database.ref('Posi');
 Ha.on("value",readPosition, showError);

}

function draw() {
  background(255,255,255);  
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
}
drawSprites();
  
}

function writePosition(x,y){
  Ha.set ({
      'x':BallonPos.x+x,
      'y':BallonPos.y+y
  })
}
  function readPosition  (data){
    BallonPos = data.val();''
    console.log(BallonPos);
    Ballon.x = BallonPos.x;
    Ballon.y=BallonPos.y

  }
  function showError() {
    
    }