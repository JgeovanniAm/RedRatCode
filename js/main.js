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
			canvasContext.fillStyle = "#014a74";
			canvasContext.fill();
			canvasContext.closePath();
		}
		move() {
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
		for (let i = 0; i < 4; i++) {
			let x = Math.random() *  canvas.width;
			let y = Math.random() *  canvas.height;
			let character = new object(x, y, 50);
			array.push(character);
		}
		return item = array;
	}
	let newarray = create();

	function IteracionDraw() {
		requestAnimationFrame(IteracionDraw)
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		let i = 0;
		newarray.forEach(element => {
			element.move();
		});
	}
	IteracionDraw()
}())
