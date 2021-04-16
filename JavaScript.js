          function turnOnOff() {
     
     var image = document.getElementById('Image');
     var image1 = document.getElementById('Image1');
    
     if (image.src.match("bulpon"))
         image.src = "images/bulpof.jpg";
     else
         image.src = "bulpon.jpg";
   
     if (image1.src.match("bulpof"))
         image1.src = "images/bulpon.jpg";
     else
         image1.src = "bulpof.jpg";
    }
