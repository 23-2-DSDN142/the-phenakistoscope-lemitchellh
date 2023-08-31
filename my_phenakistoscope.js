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
  layer1.mode( RING );
  layer1.set_boundary( 0, 400);

  //var layer10 = new PLayer(faces3); //rainbow squares squares
  //layer10.mode( SWIRL(5) );
  //layer10.set_boundary( 400, 950);


  var layer4 = new PLayer(faces2); //inner rainbow squares
  layer1.mode( SWIRL(2) );
  layer1.set_boundary( 10, 400);

  var layer2 = new PLayer(squares); //blue circle
  layer2.mode( SWIRL(12) );
  layer2.set_boundary( 50, 850 );

  var layer3 = new PLayer(diamonds); //pink jags
  layer3.mode( RING );
  layer3.set_boundary( 50, 850 );

  var layer9 = new PLayer(diamonds2); //pink jags
  layer9.mode( RING);
  layer9.set_boundary( 500, 1050 );

  var layer4 = new PLayer(circles1); //circleboys outer rim
  layer4.mode( SWIRL(12) );
  layer4.set_boundary( 850, 1000 );

  var layer5 = new PLayer(whatever); //circleboys outer
  layer5.mode( SWIRL(10) );
  layer5.set_boundary( 450, 850 );

  //var layer6 = new PLayer(triangles); //circleboys
  //layer6.mode( SWIRL(1) );
  //layer6.set_boundary( 550, 850, );

  //var layer7 = new PLayer(triangles2); //circleboys
  //layer7.mode( SWIRL(10) );
  //layer7.set_boundary( 50, 950, );

  var layer8 = new PLayer(Squarez); //circleboys innner
  layer8.mode (SWIRL(10));
  layer8.set_boundary (50,400);

  var layer11 = new PLayer(Squaret); //circleboys innner
  layer11.mode (SWIRL(1));
  layer11.set_boundary (500,850);

  var layer8 = new PLayer(Circlez); //circleboys innner
  layer8.mode (SWIRL(10));
  layer8.set_boundary (380, 680);

}


function Circlez(x, y, animation, pScope){
  noStroke()
  scale (animation.frame*2);
fill (10*animation.wave(1)*1 , 50 *animation.wave(5)*40,  10 *animation.wave(5)*20, 155*animation.wave(9)/1)
triangle (120, 160, 140, 100, 200, 150)
}

function Squaret(x, y, animation, pScope){
  noStroke()
    scale (animation.frame*1);
  fill (2*animation.wave(1)*100 , 20*animation.wave(1)*6,  10 *animation.wave(5)*10,)
  ellipse (x, y , 50*animation.wave(5)*3,)
  }



function Squarez(x, y, animation, pScope){ //not really squarez
  noStroke()
    scale (animation.frame*1.9);
  fill (200*animation.wave(1)*100 , 20*animation.wave(11)*6,  10 *animation.wave(5)*10, 205*animation.wave(9)*1)
  ellipse (x, y, 50*animation.wave(5)*3,)
  }
  
  function Circlez(x, y, animation, pScope){ //not really squarez
    noStroke()
      scale (animation.frame*.9);
    fill (200*animation.wave(100)*10 , 20*animation.wave(11)*16,  10 *animation.wave(5)*100, 205*animation.wave(9)*1)
    ellipse (x, y, 50*animation.wave(5)*3,)
    }



function whatever(x, y, animation, pScope){
  strokeWeight(animation.frame/5)
  scale (animation.frame*3.5);
fill (100*animation.wave(1)*10 , 50,  10 *animation.wave(5)*10, 255*animation.wave(9)*1)
ellipse (x, y, 50*animation.wave(5)*3,)
}


function faces(x, y, animation, pScope){
  //rainbow squares
  noStroke()
  scale(animation.frame*60);
  fill (100*animation.wave(2)*15, 10*animation.wave(5)*1, 100*animation.wave(10)*12, 100/animation.wave(10)*2);
  rect(x, y, x+2, y+2); // draw head

}
//function faces3(x, y, animation, pScope){
  //rainbow squares
  //noStroke()
  //scale(animation.frame-40);
  //fill (100*animation.wave(2)*15, 10*animation.wave(5)*1, 100*animation.wave(10)*12, 100/animation.wave(10)*2);
  //rect(x, y, x+2, y+2); // draw head

//}



function faces2 (x, y, animation, pScope){
  //Rainbow boys
  noStroke()
  scale( animation.frame*30.5);
  fill (50*animation.wave(2)*1.5, 90*animation.wave(2)*2, 90*animation.wave(2)*2);
  rect(50*animation.wave(.5)*20 ,20*animation.wave(.5)*100, 500,2)
}

function squares(x, y, animation, pScope){
  noStroke()
  // Middle circle
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(150*animation.wave(.5)*1, 150*animation.wave(5)*1.5, 245*animation.wave(5)*5)
  arc(x,y,15,200,backgroundArcStart *animation.wave(5),backgroundArcEnd); // draws "pizza slice" in the background

  //fill(100 *animation.wave(.5)*5,) //white squares
  //rect(70,30-animation.wave(.5)*10,20*animation.wave(5)*10,20*animation.wave(5)*10) // .wave is a cosine wave btw
}
  
function diamonds(x, y, animation, pScope){
  
  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;

scale (animation.frame*1.7);

  fill (165 *animation.wave(50)*5, 150*animation.wave(5)*2, 110 *animation.wave(5)*2, 150*animation.wave(.6)*1.5)
  arc(x + 250,y + 250,700,700,backgroundArcEnd,backgroundArcStart); // draws "pizza slice" in the background
}

function diamonds2(x, y, animation, pScope){
  
  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;

scale (animation.wave*.5);

  fill (200 *animation.wave(5)*10, 10 *animation.wave(5)*2, 110 *animation.wave(5)*3, 100*animation.wave(6)*1.5)
  arc(x,y - 250,700,700,backgroundArcEnd,backgroundArcStart); // draws "pizza slice" in the background
}
  function circles1(x, y, animation, pScope){
noStroke()
    scale (animation.frame*1);
fill (10 *animation.wave(5)*20, 10 *animation.wave(5)-10, 10 *animation.wave(5)+50, 100*animation.wave(5)*10)
ellipse (x, y, 100*animation.wave(.5)*5, 75*animation.wave(3)*3)

  
  }



  //function triangles2(x, y, animation, pScope){
    //noStroke()
    //scale (animation.frame*2.5);
  //fill (10*animation.wave(1)*10 , 150 *animation.wave(5)*4,  10 *animation.wave(5)*10, 255*animation.wave(9)*1)
  //triangle (100, 200, 150, 120, 160, 140)
  //}