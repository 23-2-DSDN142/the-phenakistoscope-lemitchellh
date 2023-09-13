const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  var layer1 = new PLayer(faces); //Blue pink rectangles
  layer1.mode( SWIRL(15) );
  layer1.set_boundary( 200, 400);

  var layer2 = new PLayer(squares); //pink lines 
  layer2.mode( SWIRL(6) );
  layer2.set_boundary( 300, 850 );

  var layer3 = new PLayer(diamonds); //rounded rectangles
  layer3.mode( SWIRL(8) );
  layer3.set_boundary( 100, 450 );

  var layer4 = new PLayer(center); //black centre
  layer4.mode(SWIRL(1));
  layer4.set_boundary(1,2)

  var layer5 = new PLayer(design); //outer designs
  layer5.mode (SWIRL(12));
  layer5.set_boundary (750, 1250);

}



function center(x,y, animation, pScope){ 
  //black center
  noStroke();
  fill(1*animation.wave(1000)*3) //different shades of black
  ellipse (10, 10, 50*animation.wave(1)*8.5, 50) //oval shape
  }

function design(x, y, animation, pScope){
  //outer blobs
  let angleOffset = (180 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;
  
  strokeWeight(8*animation.wave(10)*3) //animates the stroke weight
  stroke (50*animation.wave(10)*15,15*animation.wave(10)*2,115*animation.wave(100)*5) //animates the outline colours from blue/purple/red
  scale (.5*animation.wave(1000)*2.5); //animates the scale of the blobs
  fill (225 *animation.wave(20)*5, 50*animation.wave(5)*3, 120 *animation.wave(5)*50, 220*animation.wave(10)*5) //animates the fill between pink and blue
  rect(x/animation.wave(2)*1,y-200,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(2)*10, backgroundArcEnd*animation.wave(20)*10 ,backgroundArcStart*animation.wave(2)*1,backgroundArcStart*animation.wave(2)*1); // animates the shape of the rect
  rotate(10*animation.wave(10)*10) //rotates shape, creates a more random movement
  rect(x+animation.wave(2)*1,y-200,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(10)/10, backgroundArcEnd*animation.wave(2)*100 ,backgroundArcStart*animation.wave(10)*1,backgroundArcStart*animation.wave(20)*100); //animates purpley shapes 
  rotate(-180) //spaces the shapes apart
  fill (5 *animation.wave(20)*5, 50*animation.wave(5)*3, 120 *animation.wave(5)*50, 20*animation.wave(1)*10)// brings more blue to the colour palette
  rect(x+animation.wave(2)*10,y-200,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(10)/10, backgroundArcEnd*animation.wave(2)*100 ,backgroundArcStart*animation.wave(10)*1,backgroundArcStart*animation.wave(20)*100); //more blue shapes   
}

function diamonds(x, y, animation, pScope){
  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;
  
  strokeWeight(25*animation.wave(10)*1)
  scale (animation.frame*.45); //brings shapes to an acceptable smaller scale
  rotate(1000*animation.wave(1)*.5) // adds more random movement and spaces out shapes
  fill (205 *animation.wave(15)*5, 50*animation.wave(5)*2, 140 *animation.wave(5)*4,10*animation.wave(2)*500)// animates the red/blue colours
  rect(x,y,350,350,backgroundArcStart*animation.wave(5)*1, backgroundArcEnd*animation.wave(5)*2 ,backgroundArcStart*animation.wave(5)*2,backgroundArcStart*animation.wave(5)*1); //creates the shape, animates it's form 
  }



function faces(x, y, animation, pScope){
  //jutting rectangles
  stroke(200*animation.wave(20)*5, 10*animation.wave(5)*1, 150*animation.wave(10)*2)//colours the stroke to pinkish
  strokeWeight(2*animation.frame*1.5)
  scale(animation.frame*6); //controls size of rectangles and blue background
  fill (100*animation.wave(20)*5, 100*animation.wave(5)*1, 100*animation.wave(10)*12, 200+animation.wave(10)*2);//animates colour of rectangles
  rect(x, y, x+animation.wave(10)*50, y+20); //controls shape of rectangle 
  rotate(180) //pushes rectangle out further, changes position of blue background
  rect(x, y, x+animation.wave(10)*50, y+20) //controls shape of outer rectangle
  scale(1)
  strokeWeight(10) //brings in harsher edges on the background
  pScope.fill_background(205*animation.wave(100)*1, 50*animation.wave(100)*2, 110*animation.wave(1)*15, 40*animation.wave(1)*2)// brings in blue background
  }



  function squares(x, y, animation, pScope){
     //pink lines
    let angleOffset = (360 / SLICE_COUNT) / 1
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
    strokeWeight(4*animation.wave(1)*1)
    fill(200 *animation.wave(5)*5, 60*animation.wave(.5)*2, 150*animation.wave(.5)*2) //gives the pink colour
    rect(0,9*animation.wave(5)*10,20*animation.wave(5)*1,20*animation.wave(5)*10) // changes shape of rect
    scale(.3) //changes form of pink background
    pScope.fill_background(205*animation.wave(1)*10, 50*animation.wave(10)*2, 10*animation.wave(1)*15, 100*animation.wave(1)*2)// brings in pink background shapes
  }


  //function background(x,y, animation, pScope){
    //pScope.background(Random(200))
    //pScope.fill_background(105*animation.wave(5)*2, 10*animation.wave(10)*1, 110*animation.wave(10)*5, 155*animation.wave(10)*2)
//where I stored the background changing code, because I regularly forgot it
  //}