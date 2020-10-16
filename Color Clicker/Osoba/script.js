"use strict";
document.addEventListener('DOMContentLoaded', () => {

  const WIDTH = 10, HEIGHT = 12, BOX_SIDE = 48, NUM_OF_COLORS = 7;

  // creates a random array of colors
  const COLORS = Array(NUM_OF_COLORS).fill().map(
    () => '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)
  );

  // creates a random WIDTH*HEIGHT matrix
  const data = Array(WIDTH).fill().map(
    () => 
      Array.from( {length: HEIGHT}, () => random_number() )
  );

  const canvas = document.getElementById('game');
  const context = canvas.getContext('2d', { alpha: false });
  draw_canvas();
  
  
	
	function random_number() {
    return Math.floor(Math.random() * COLORS.length);
  }
	
	function draw_canvas() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		for(let i=0; i<WIDTH; i++ ) {
      for(let j=0; j<HEIGHT; j++ ) {
        context.beginPath();
        context.rect(i*BOX_SIDE, j*BOX_SIDE, BOX_SIDE, BOX_SIDE);
        context.fillStyle = COLORS[ data[i][j] ];
        context.fill();
        context.closePath();	
      }
    }
	}

	function clear_block( x, y, value ) {
		if ( data[x][y] != -1 && data[x][y] === value ) {
			data[x][y] = -1;
			if ( x > 0 ) clear_block( x-1, y, value );
			if ( x < WIDTH-1 ) clear_block( x+1, y, value );
			if ( y > 0 ) clear_block( x, y-1, value );
			if ( y < HEIGHT-1 ) clear_block( x, y+1, value );
		}
	}
	
	function slide_blocks(){
		for(let i=0; i<WIDTH; i++)
      for(let j=HEIGHT; j>0; j-- )
        if( data[i][j] == -1)
          [ data[i][j], data[i][j-1] ] = [ data[i][j-1], data[i][j] ];

    for(let i=0; i<WIDTH; i++)
			for(let j=0; j<HEIGHT; j++ )
				if( data[i][j] == -1 )
					data[i][j] = random_number();
	}

	function canvas_get_block_coords(e){
		let rect = canvas.getBoundingClientRect(),
		  scaleX = canvas.width / rect.width,
		  scaleY = canvas.height / rect.height;

		let x = Math.floor(e.offsetX * scaleX / BOX_SIDE),
		    y = Math.floor(e.offsetY * scaleY / BOX_SIDE);
		return [x, y];
	}
	
	function canvas_click(e){
		let [x, y] = canvas_get_block_coords(e);
		//console.log('click', x, y);

		clear_block( x, y, data[x][y] );
		slide_blocks();
		draw_canvas();	
	}
	
  
  
	function print_data(){
		let s = '';
		for(let j=0; j<HEIGHT; j++ ) {
			for(let i=0; i<WIDTH; i++ )
				s = s + ' ' + data[i][j];			
			console.log(s);
			s = '';
		}
	}
  //print_data()

	canvas.addEventListener('mouseup', function(e){ canvas_click(e); }, false);
	canvas.addEventListener('touchend', function(e){ canvas_click(e); }, false);
	
});
