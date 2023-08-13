const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(500));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 100, 50, 90);  //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000);

  var layer4 = new PLayer(faces2);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 1000, 300);

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(diamonds);
  layer3.mode( SWIRL(9) );
  layer3.set_boundary( 600, 100 );


}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);
  fill (190, 170, 190);
  rect(5,5,50,50); // draw head

}

function faces2 (x, y, animation, pScope){
  scale( animation.frame*4.5);
  fill (50, 90, 90);
  rect(10,30-animation.wave(.5)*10,50,50)
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(150, 150, 245)
  arc(x,y,200,200,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(0)
  rect(-10,-30-animation.wave(.5)*10,20,20) // .wave is a cosine wave btw
}
  
function diamonds(x, y, animation, pScope){

  let angleOffset = (360 / SLICE_COUNT) / .7
  let backgroundArcStart = 180 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;

scale (animation.frame*2);

  fill (255, 100, 110)
  arc(x + 250,y + 250,700,700,backgroundArcEnd,backgroundArcStart); // draws "pizza slice" in the background


 

  
  }

