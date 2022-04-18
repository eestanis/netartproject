function setup() {
  createCanvas(1250, 560);
  background(52, 54, 73);
  noStroke();
  fill(237, 106, 90);
  textSize(30);
  text("uhhhh.", 420, 280);
}

function mousePressed() {
  background(52, 54, 73);
  var randomValue = int(random(6));
  if(randomValue == 0){
    text("You rolled a 1!", 420, 280);
  }
  else if(randomValue == 1){
    text("You rolled a 2!", 420, 280);
  }
  else if(randomValue == 2){
    text("You rolled a 3!", 420, 280);
  }
  else if(randomValue == 3){
    text("You rolled a 4!", 420, 280);
  }
  else if(randomValue == 4){
    text("uhhhh", 420, 280);
  }
  else if(randomValue == 5){
    text("You rolled a 6!", 420, 280);
  }
}