function setup() {
  createCanvas(1250, 560);
  background(155, 193, 188);
  noStroke();
  fill(52, 54, 73);
  textSize(30);
  text("Click for your next consumable.", 420, 280);
}

function mousePressed() {
  background(155, 193, 188);
  var randomValue = int(random(10));
  if(randomValue == 0){
    text("Rule of Wolves", 520, 280);
  }
  else if(randomValue == 1){
    text("Iron Widow", 550, 280);
  }
  else if(randomValue == 2){
    text("Mister Impossible", 510, 280);
  }
  else if(randomValue == 3){
    text("Abyss", 580, 280);
  }
  else if(randomValue == 4){
    text("Start Up", 570, 280);
  }
  else if(randomValue == 5){
    text("Kemono Jihen", 530, 280);
  }
  else if(randomValue == 6){
    text("SpyxFamily", 550, 280);
  }
  else if(randomValue == 7){
    text("Jujutsu Kaisen 0", 520, 280);
  }
  else if(randomValue == 8){
    text("Shadow and Bone", 500, 280);
  }
  else if(randomValue == 9){
    text("The Book of Boba Fett", 470, 280);
  }
}