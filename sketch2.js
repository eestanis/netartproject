function setup() {
  createCanvas(1250, 560);
  background(244, 241, 187);
  noStroke();
  fill(52, 54, 73);
  textSize(30);
  text("Click for your next consumable.", 420, 280);
}

function mousePressed() {
  background(244, 241, 187);
  var randomValue = int(random(9));
  if(randomValue == 0){
    text("The Raven Boys", 540, 280);
  }
  else if(randomValue == 1){
    text("Six of Crows", 560, 280);
  }
  else if(randomValue == 2){
    text("Strange the Dreamer", 500, 280);
  }
  else if(randomValue == 3){
    text("Avatar the Last Airbender", 480, 280);
  }
  else if(randomValue == 4){
    text("The Umbrella Academy", 480, 280);
  }
  else if(randomValue == 5){
    text("Jujutsu Kaisen", 540, 280);
  }
    else if(randomValue == 6){
    text("To Your Eternity", 530, 280);
  }
    else if(randomValue == 7){
    text("Breath of the Wild", 520, 280);
  }
    else if(randomValue == 8){
    text("Fallen Order", 560, 280);
  }
}