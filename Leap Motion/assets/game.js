 


 var canvas = document.getElementById("theCanvas");
      var ct = canvas.getContext("2d");
      var x = canvas.width/2;
      var y = canvas.height/2 - 75;
      var dy= 0;
      var randomX;


      var TIME_OF_CALL = 2000;

      var img=document.getElementById("cartoonImg");
      var ball = document.getElementById("cartoonBallImg");


      


      var FRAMES_PER_SECOND = 50;
      var RATIO_CANVAS_TO_LEAP = 2.45;
      var OFFSET = 350;
    

      function moveObj(){
        if(x < 0){
          x = 0;
        }else if(x > 1100){
          x = 1100;
        }

        if(y < 20){
          y = 20;
        }else if(y > 1200){
          y = 1200;
        }

        ct.drawImage(cartoonImg, x, y);
        
      }


      function spawnBall(){



        


        ct.drawImage(cartoonBallImg,randomX, dy);

      }



      function draw(){
        ct.clearRect(0,0,canvas.width, canvas.height); 
        moveObj();
        
        console.log(dy)



          Leap.loop({enableGestures: true}, function(frame) {

              frame.pointables.forEach(function(pointable) {
              var position = pointable.stabilizedTipPosition;
              normalized = frame.interactionBox.normalizePoint(position);
              hand = frame.hands.length;

               var dataX = (normalized[0]* 900);

               x=dataX;

           });
          });
      }

      setInterval(draw, FRAMES_PER_SECOND);


window.setInterval(function(){

randomX = Math.floor((Math.random() * canvas.width) + 1);


    window.setInterval(function(){
  spawnBall(dy += 10, randomX);
}, 25);

  
}, 2500);



