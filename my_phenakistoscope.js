const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 80, 50, 90);  //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(faces); //rainbow squares squares
  layer1.mode( SWIRL(15) );
  layer1.set_boundary( 200, 400);

  var layer2 = new PLayer(squares); //pink lines 
  layer2.mode( SWIRL(6) );
  layer2.set_boundary( 300, 850 );

  var layer3 = new PLayer(diamonds); //pink jags
  layer3.mode( SWIRL(8) );
  layer3.set_boundary( 100, 450 );

  var layer4 = new PLayer(center);
  layer4.mode(SWIRL(1));
  layer4.set_boundary(1,2)

  var layer18 = new PLayer(design); //flowers
  layer18.mode (SWIRL(12));
  layer18.set_boundary (750, 1250);


//var layer17 = new PLayer(back); //backg)
//layer17.mode (SWIRL(10));
//layer17.set_boundary (500,1000)
}



function center(x,y, animation, pScope){
  noStroke();
  fill( 1*animation.wave(1000)*3)
  ellipse (10, 10, 50*animation.wave(1)*8.5, 50)
     
}

function design(x, y, animation, pScope){
  //pink jags
  let angleOffset = (180 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;
  
  
  strokeWeight(8*animation.wave(10)*3)
  stroke (50*animation.wave(10)*15,15*animation.wave(10)*2,115*animation.wave(100)*5) 
  //rotate(90*animation.frame*2)
  scale (.5*animation.wave(1000)*2.5);
  fill (225 *animation.wave(20)*5, 50*animation.wave(5)*3, 120 *animation.wave(5)*50, 220*animation.wave(10)*5)
  rect(x/animation.wave(2)*1,y-200,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(2)*10, backgroundArcEnd*animation.wave(20)*10 ,backgroundArcStart*animation.wave(2)*1,backgroundArcStart*animation.wave(2)*1); // draws "pizza slice" in the background
  rotate(10*animation.wave(10)*10)
  rect(x+animation.wave(2)*1,y-200,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(10)/10, backgroundArcEnd*animation.wave(2)*100 ,backgroundArcStart*animation.wave(10)*1,backgroundArcStart*animation.wave(20)*100); // draws "pizza slice" in the background
  rotate(-180)
  fill (5 *animation.wave(20)*5, 50*animation.wave(5)*3, 120 *animation.wave(5)*50, 20*animation.wave(1)*10)
  rect(x+animation.wave(2)*10,y-200,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(10)/10, backgroundArcEnd*animation.wave(2)*100 ,backgroundArcStart*animation.wave(10)*1,backgroundArcStart*animation.wave(20)*100); // draws "pizza slice" in the background  
  //rect(x+animation.wave(2)/20,y-300,50*animation.wave(2)*3,50*animation.wave(2)*3,backgroundArcStart*animation.wave(10)/10, backgroundArcEnd*animation.wave(2)*100 ,backgroundArcStart*animation.wave(10)*1,backgroundArcStart*animation.wave(20)*100); // draws "pizza slice" in the background}
}
function diamonds(x, y, animation, pScope){

  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;
  

  //stroke(250 *animation.wave(2)*21, 200*animation.wave(1)*2, 100*animation.wave(1)*2, 210*animation.wave(1)*8)
  strokeWeight(25*animation.wave(10)*1)
  scale (animation.frame*.45);
  rotate(1000*animation.wave(1)*.5)
  fill (205 *animation.wave(15)*5, 50*animation.wave(5)*2, 140 *animation.wave(5)*4,10*animation.wave(2)*500)
  rect(x,y,350,350,backgroundArcStart*animation.wave(5)*1, backgroundArcEnd*animation.wave(5)*2 ,backgroundArcStart*animation.wave(5)*2,backgroundArcStart*animation.wave(5)*1); // draws "pizza slice" in the background
  
  strokeWeight(10*animation.wave(25)*5)
  stroke( 155*animation.wave(10)*3, 20*animation.wave(1)*3, 150*animation.wave(1000)*3)
  fill (65*animation.wave(50)*5, 150*animation.wave(5)*2, 210 *animation.wave(5)*1, 250*animation.wave(.6)*1.5)
  rotate(10*animation.wave(1)*1)
  rect(2500,5000,x+500,y+animation.wave(5)*500,backgroundArcStart*animation.wave(200)*1, backgroundArcEnd*animation.wave(5)*1 ,backgroundArcStart,backgroundArcStart); // draws "pizza slice" in the background
  }



function faces(x, y, animation, pScope){
  //jutting rectangles
  stroke(200*animation.wave(20)*5, 10*animation.wave(5)*1, 150*animation.wave(10)*2)
  strokeWeight(2-animation.frame*1.5)
  scale(animation.frame*6);
  fill (100*animation.wave(20)*5, 100*animation.wave(5)*1, 100*animation.wave(10)*12, 100/animation.wave(10)*2);
  rect(x, y, x+animation.wave(10)*100, y+20);
  rotate(180)
  rect(x, y, x+animation.wave(10)*100, y+20)


}



  function squares(x, y, animation, pScope){
    
    // Middle circle
    let angleOffset = (360 / SLICE_COUNT) / 1
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
  strokeWeight(8*animation.wave(1)*1)
    //fill(0*animation.wave(.5)*1, 150*animation.wave(5)*1.5, 245*animation.wave(5)*5)
    //arc(x,y,15,200,backgroundArcStart *animation.wave(5),backgroundArcEnd); // draws "pizza slice" in the background
     fill(200 *animation.wave(5)*5, 60*animation.wave(.5)*2, 150*animation.wave(.5)*2) //white squares
    rect(0,9*animation.wave(5)*10,20*animation.wave(5)*1,20*animation.wave(5)*10) // .wave is a cosine wave btw
    //rect(10-animation.wave(.5)*100, 270, 20*animation.wave(5)*1,20*animation.wave(5)*10)
  }


  //function background(x,y, animation, pScope){
    //pScope.background(Random(200))
    //pScope.fill_background(105*animation.wave(5)*2, 10*animation.wave(10)*1, 110*animation.wave(10)*5, 155*animation.wave(10)*2)

  //}