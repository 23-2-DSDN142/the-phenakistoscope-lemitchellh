const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 100, 50, 90);  //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(faces); //outer squares
  layer1.mode( SWIRL(12) );
  layer1.set_boundary( 0, 1000);

  var layer4 = new PLayer(faces2); //inner rainbow squares
  layer1.mode( SWIRL(12) );
  layer1.set_boundary( 100, 800);

  var layer2 = new PLayer(squares); //blue circle
  layer2.mode( SWIRL(12) );
  layer2.set_boundary( 10, 1000 );

  var layer3 = new PLayer(diamonds); //pink jags
  layer3.mode( SWIRL(12) );
  layer3.set_boundary( 0, 1000 );

  var layer4 = new PLayer(circles1); //circleboys
  layer4.mode( SWIRL(12) );
  layer4.set_boundary( 850,1000 );

}

function faces(x, y, animation, pScope){
  //outer squares
  scale(animation.frame*1.2);
  fill (160*animation.wave(2)*5, 160*animation.wave(5)*5, 190*animation.wave(10)*2);
  rect(5*animation.wave(5)*5,5*animation.wave(5)*5,100*animation.wave(.5)*1,80*animation.wave(.5)*1.5); // draw head

}

function faces2 (x, y, animation, pScope){
  //Rainbow boys
  scale( animation.frame*3.5);
  fill (50*animation.wave(2)*1.5, 90*animation.wave(2)*2, 90*animation.wave(2)*2);
  rect(50*animation.wave(.5)*20 ,20*animation.wave(.5)*100, 500,2)
}

function squares(x, y, animation, pScope){

  // Middle circle
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(150*animation.wave(.5)*2, 150*animation.wave(.5)*1.5, 245*animation.wave(5)*5)
  arc(x,y,15,200,backgroundArcStart *animation.wave(5),backgroundArcEnd); // draws "pizza slice" in the background

  //fill(100 *animation.wave(.5)*5,) //white squares
  //rect(70,30-animation.wave(.5)*10,20*animation.wave(5)*10,20*animation.wave(5)*10) // .wave is a cosine wave btw
}
  
function diamonds(x, y, animation, pScope){
  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;

scale (animation.frame*1.5);

  fill (255 *animation.wave(5)*10, 100 *animation.wave(5)*2, 110 *animation.wave(5)*3, 150*animation.wave(.6)*1.5)
  arc(x + 250,y + 250,700,700,backgroundArcEnd,backgroundArcStart); // draws "pizza slice" in the background
}
  function circles1(x, y, animation, pScope){

    scale (animation.frame*1);
fill (10 *animation.wave(5)*20, 10 *animation.wave(5)-10, 10 *animation.wave(5)+50)
ellipse (x, y, 100*animation.wave(.5)*5, 75*animation.wave(3)*3)

  
  }

