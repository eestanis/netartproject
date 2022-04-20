let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(1250, 560);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2','Suggest a Consumable!');
  greeting.position(20, 5);
  greeting.style('color', '#343649');

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('Thanks! You suggested ' + name + '!');
  input.value('');


}
