function init() {
	canvas = document.getElementById('game_canvas');

	if (canvas.getContext) {
		ctx = canvas.getContext('2d');

		img = new Image();
		img.onload = function() {
  			ctx.drawImage(img, 317, 0, 463, 138, 0, 0, 463, 138);

  			img_mspacman = new Image();
			img_mspacman.onload = function() {
	  			ctx.drawImage(img, 77, 20, 20, 20, 36, 30, 20, 20);
			}
			img_mspacman.src = 'pacman10-hp-sprite.png';
		}
		img.src = 'pacman10-hp-sprite.png';
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}