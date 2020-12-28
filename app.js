var num=Math.floor(Math.random()*3)+1;

$("#card").wScratchPad({
  size        : 100,          // The size of the brush/scratch.
  bg          : `image/silver/Offer ${num}.jpg`,  // Background (image path or hex color).
  fg          : 'image/Logo.jpeg',  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : 'pointer' // Set cursor.
});


$("#silver").wScratchPad({
  size        : 100,          // The size of the brush/scratch.
  bg          : `image/silver/Offer ${num}.jpg`,  // Background (image path or hex color).
  fg          : 'image/Logo.jpeg',  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : 'pointer' // Set cursor.
});

$("#gold").wScratchPad({
  size        : 100,          // The size of the brush/scratch.
  bg          : `image/gold/Offer ${num}.jpg`,  // Background (image path or hex color).
  fg          : 'image/Logo.jpeg',  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : 'pointer' // Set cursor.
});

$("#platinum").wScratchPad({
  size        : 100,          // The size of the brush/scratch.
  bg          : `image/platinum/Offer ${num}.jpg`,  // Background (image path or hex color).
  fg          : 'image/Logo.jpeg',  // Foreground (image path or hex color).
  realtime    : true,       // Calculates percentage in realitime.
  scratchDown : null,       // Set scratchDown callback.
  scratchUp   : null,       // Set scratchUp callback.
  scratchMove : null,       // Set scratcMove callback.
  cursor      : 'pointer' // Set cursor.
});
