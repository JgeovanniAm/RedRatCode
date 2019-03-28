const canvasAnimation = (function () {
	const canvas = document.querySelector('.contex-js');
	const canvasContext = canvas.getContext('2d');
	
	function setSize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	window.addEventListener('resize', setSize)
	setSize();
	class object {
		constructor(x, y, r) {
			this.x = x;
			this.y = y;
			this.r = r;
			this.dx =  Math.random() * 2;
			this.dy =  Math.random() * 2.5;
		}
		draw() {
			canvasContext.beginPath()
			canvasContext.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
			canvasContext.fillStyle = "red";
			canvasContext.fill();
			canvasContext.closePath();
		}
		//array of create item circle
		move( array = []) {
			for (let index = 0; index < array.length; index++) {
				canvasContext.beginPath();
				canvasContext.globalAlpha = 0.25;
				canvasContext.moveTo(this.x,this.y);
				canvasContext.lineTo(array[index].x,array[index].y);
				canvasContext.strokeStyle = 'green';
				canvasContext.stroke()
				canvasContext.closePath();
			}
			if (this.y + this.r > canvas.height || this.y - this.r <0) {
				this.dy = -this.dy
			}
			if (this.x + this.r > canvas.width  || this.x - this.r < 0) {
				this.dx = -this.dx
			}
			this.x += this.dx;
			this.y += this.dy;
			this.draw()
		}
	}

	function create() {
		let array = [];
		for (let i = 0; i < 10; i++) {
			let x = Math.random() *  canvas.width;
			let y = Math.random() *  canvas.height;
			let character = new object(x, y, 5);
			array.push(character);
		}
		return item = array;
	}
	let newarray = create();

	function IteracionDraw() {
		requestAnimationFrame(IteracionDraw)
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		newarray.forEach(element => {
			element.move(newarray);
		});
	}
	IteracionDraw()
}())
