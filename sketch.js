$(document).ready(function(){
  // Creating grid
    var gridSize = prompt("Enter grid size from 16-64","16");
    if(gridSize>15&&gridSize<=64){
      //$('#canvas').empty();
      for(var i = 0; i<gridSize; i++){
        $('#canvas').append('<div class="row"></div>');
      }
      for(var j = 0; j<gridSize; j++){
        $('.row').append('<div class="column"></div>');
      }
      $('.row').height(500/gridSize);
      $('.column').height(500/gridSize);
      $('.column').width(500/gridSize);
    }
    else {
      alert('Please pick a valid grid size from 16-64');
    }
/* Button Implementations */
// Clear button clears canvas
  $('#clear').on('click',function(){
    $('.column').css('background-color','#D1D1D1');
  });
// Erase button
  $('#erase').on('click',function(){
    $('.column').on('mouseenter',function(){
      $(this).css('background-color','#D1D1D1');
    });
  });
// Rainbow button
  $('#rainbow').on('click',function(){
    // Create random HEX color code
    function colorGenerator(){
      var color = '#';
      var hex = '0123456789ABCDEF';
      for(var i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
      }
      return color;
    }
    $('.column').on('mouseenter',function(){
      $(this).css('background-color',colorGenerator());
    });
  });

// Black button
  $('#black').on('click',function(){
    $('.column').on('mouseenter',function(){
      $(this).css('background-color','black');
    });
  });
// Square button
  $('#square').on('click',function(){
    $('.column').css('border-radius','0px');
  });
// Circle button
  $('#circle').on('click',function(){
    $('.column').css('border-radius','50px');
  });

});
