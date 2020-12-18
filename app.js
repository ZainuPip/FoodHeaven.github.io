var num=Math.floor(Math.random()*4)+1;

$("#card").wScratchPad({
  size        : 100,          // The size of the brush/scratch.
  function bgR(){
if(num==1){
    bg          : 'images/offer 1.jpg',  // Background (image path or hex color).
  }
  else if(num==2){
      bg          : 'images/offer_2.jpg',  // Background (image path or hex color).
    }
  else if(num==3){
        bg          : 'images/offer_3.jpg',  // Background (image path or hex color).
      }
  else{
    bg          : 'images/offer_4.jpg',  // Background (image path or hex color).
  }
  return bg;
  }
  bg:bgR();
  fg          : 'images/Scrath Image.jpg',  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : 'pointer' // Set cursor.
});
