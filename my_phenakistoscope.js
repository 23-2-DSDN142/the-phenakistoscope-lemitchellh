const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(800));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 80, 50, 90);  //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(faces); //rainbow squares squares
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 0, 500);


  //var layer15 =new PLayer(background);
  //layer15.mode(SWIRL(2));
  //layer15.set_boundary(1,1000);

  //var layer4 = new PLayer(faces2); //inner rainbow squares
  layer1.mode( SWIRL(20) );
  layer1.set_boundary( 10, 400);

  var layer2 = new PLayer(squares); //blue circle
  layer2.mode( SWIRL(12) );
  layer2.set_boundary( 150, 850 );

  var layer3 = new PLayer(diamonds); //pink jags
  layer3.mode( SWIRL(6) );
  layer3.set_boundary( 50, 550 );

  //var layer13 = new PLayer(diamonds3); //pink jags
  //layer13.mode( SWIRL(6) );
  //layer13.set_boundary( 50, 950 );

  //var layer9 = new PLayer(diamonds2); //pink jags
  //layer9.mode( SWIRL(4));
  //layer9.set_boundary( 500, 1050 );

  var layer4 = new PLayer(circles1); //circleboys outer rim
  layer4.mode( SWIRL(12) );
  layer4.set_boundary( 850, 1000 );

  //var layer5 = new PLayer(whatever); //circleboys outer
  //layer5.mode( SWIRL(10) );
  //layer5.set_boundary( 450, 830 );

  //var layer6 = new PLayer(triangles); //circleboys
  //layer6.mode( SWIRL(1) );
  //layer6.set_boundary( 550, 850, );


  //var layer8 = new PLayer(Squarez); //Orangey circles
  //layer8.mode (SWIRL(12));
  //layer8.set_boundary (50,1000);

  var layer11 = new PLayer(Squaret); //dark circle
  layer11.mode (SWIRL(2));
  layer11.set_boundary (500,850);

  var layer8 = new PLayer(Circlez); //circleboys innner
  layer8.mode (SWIRL(10));
  layer8.set_boundary (800, 980);

}


function diamonds(x, y, animation, pScope){

  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;
  
  strokeWeight(50)
scale (animation.frame*.4);
  fill (165 *animation.wave(50)*5, 150*animation.wave(5)*2, 110 *animation.wave(5)*5, 250*animation.wave(.6)*1.5)
  rect(x,y,500,500,backgroundArcStart, backgroundArcEnd ,backgroundArcStart,backgroundArcStart); // draws "pizza slice" in the background
  }

//function diamonds3(x, y, animation, pScope){

  //pink jags
  //let angleOffset = (360 / SLICE_COUNT) / 1
  //let backgroundArcStart = 90 - angleOffset;
  //let backgroundArcEnd = 360 + angleOffset;
//noStroke();
//rotate(105)
//scale (animation.frame*.3);
  //fill (5 *animation.wave(50)*5, 150*animation.wave(5)*2, 10 *animation.wave(5)*5, 50*animation.wave(.6)*1.5)
  //rect(x + 50,y + 50,400,400,backgroundArcStart, backgroundArcEnd ,backgroundArcStart/2,backgroundArcStart/2); // draws "pizza slice" in the background
//}

function Circlez(x, y, animation, pScope){
  strokeWeight(4)
  scale (animation.frame*1.8);
fill (10*animation.wave(1)*1 , 50 *animation.wave(5)*40,  10 *animation.wave(5)*20, 250*animation.wave(9)/1)
ellipse (120, 160, 140)
rotate(75)
ellipse (120, 160, 140)
}

function Squaret(x, y, animation, pScope){ //dark circle
  strokeWeight(2)
    scale (animation.frame*1);
  fill (2*animation.wave(1)*10 , 20*animation.wave(1)*2,  100 *animation.wave(15)*2,)
  ellipse (x, y , 50*animation.wave(5)*3,)
  }



//function Squarez(x, y, animation, pScope){ //orangey circles
  noStroke()
    scale (animation.frame*1);
  fill (200*animation.wave(1)*100 , 20*animation.wave(11)*6,  10 *animation.wave(5)*10, 105*animation.wave(9)*1)
  ellipse (x, y, 50*animation.wave(5)*2,)
  //}
  
  //function Circlez(x, y, animation, pScope){ //not really squarez
    strokeWeight(2)
      scale (animation.frame*.9);
   
    fill (2*animation.wave(100)*10 , 20*animation.wave(11)*16,  10 *animation.wave(5)*100, 205*animation.wave(9)*1)
    ellipse (x, y, 50*animation.wave(5)*300,)
    //}



//function whatever(x, y, animation, pScope){
  //strokeWeight(animation.frame+5)
  //scale (animation.frame*2.5);
//fill (100*animation.wave(1)*10 , 50,  10 *animation.wave(5)*10, 255*animation.wave(9)*1)
//ellipse (x, y, 50*animation.wave(5)*3,)
//}


function faces(x, y, animation, pScope){
  //little rectangles
  strokeWeight(2)
  scale(animation.frame*6);
  fill (100*animation.wave(20)*5, 100*animation.wave(5)*1, 100*animation.wave(10)*12, 100/animation.wave(10)*2);
  rect(x, y, x+animation.wave(10)*100, y+20); // draw head
  

}




//function faces2 (x, y, animation, pScope){
  //Rainbow boys
  strokeWeight(2)
  scale( animation.frame*.5);
  fill (50*animation.wave(2)*1.5, 90*animation.wave(2)*2, 90*animation.wave(2)*2);
  rect(50*animation.wave(5)*20 ,20*animation.wave(.5)*100, 500,2)
//}

  

//function diamonds2(x, y, animation, pScope){
  
  //pink jags
  let angleOffset = (360 / SLICE_COUNT) / 1
  let backgroundArcStart = 90 - angleOffset;
  let backgroundArcEnd = 360 + angleOffset;
 noStroke();
scale (animation.wave*1);

  fill (0 *animation.wave(5)*10, 10 *animation.wave(5)*2, 110 *animation.wave(5)*3, 100*animation.wave(6)*1.5)
  rect(x,y,500,500,backgroundArcEnd,backgroundArcStart); // draws "pizza slice" in the background
//}
  function circles1(x, y, animation, pScope){ //outer rim circles
strokeWeight(10);
    scale (animation.frame*1);
fill (10 *animation.wave(5)*20, 10 *animation.wave(5)-10, 10 *animation.wave(5)+50, 200*animation.wave(5)*10)
ellipse (x, y, 100*animation.wave(.5)*5, 75*animation.wave(3)*3)

  
  }

  function squares(x, y, animation, pScope){
    
    // Middle circle
    let angleOffset = (360 / SLICE_COUNT) / 1
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;
  strokeWeight(3)
    //fill(0*animation.wave(.5)*1, 150*animation.wave(5)*1.5, 245*animation.wave(5)*5)
    //arc(x,y,15,200,backgroundArcStart *animation.wave(5),backgroundArcEnd); // draws "pizza slice" in the background
     fill(200 *animation.wave(5)*5, 60*animation.wave(.5)*2, 150*animation.wave(.5)*2) //white squares
    rect(0,9*animation.wave(5)*10,20*animation.wave(5)*1,20*animation.wave(5)*10) // .wave is a cosine wave btw
    //rect(10-animation.wave(.5)*100, 270, 20*animation.wave(5)*1,20*animation.wave(5)*10)
  }

  //function triangles2(x, y, animation, pScope){
    noStroke()
    scale (animation.frame*2.5);
  fill (10*animation.wave(1)*10 , 150 *animation.wave(5)*4,  10 *animation.wave(5)*10, 255*animation.wave(9)*1)
  triangle (100, 200, 150, 120, 160, 140)
  
  //}

  //function background(x,y, animation, pScope){
    //pScope.background(Random(200))
    //pScope.fill_background(105*animation.wave(5)*2, 10*animation.wave(10)*1, 110*animation.wave(10)*5, 155*animation.wave(10)*2)

  //}