const canvasAnimation = (function(){
	const canvas = document.querySelector('.contex-js');
	const canvasContext = canvas.getContext('2d');
	function setSize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	window.addEventListener('resize', setSize)
	setSize();
	class object {
		constructor(x, y, r, v) {
			this.x = x;
			this.y = y;
			this.r = r;
			this.v = v;
		}
		draw() {
			canvasContext.beginPath()
			canvasContext.arc(this.x, this.y, 20,  this.r, false);
			canvasContext.fillStyle = "#014a74";
			canvasContext.fill();
			canvasContext.closePath();
		}
		move() {
			this.x += this.v;
			this.y += this.v;
			if(this.y + this.r > window.innerHeight || this.y  - this.r < 200 ){
        this.y =-this.v
      } 
			if(this.x + this.r > window.innerWidth || this.x - this.r < 220 ){
        this.x =-this.v
      } 
			this.draw()
		}
	}

	function create() {
		let array = [];
		for (let i = 0; i <= 4; i++) {
			let x = Math.random() * window.innerWidth;
			let y = Math.random() * window.innerHeight;
			let velocity = Math.random() * 5;
			let character = new object(x, y, 0.5, velocity);
			array.push(character);
		}
		return item = array;
	}
	let newarray = create();

	function IteracionDraw() {
		requestAnimationFrame(IteracionDraw)
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		newarray.forEach(element => {
			//console.log(element)
			element.move()
		});
	}
	IteracionDraw()
}())
