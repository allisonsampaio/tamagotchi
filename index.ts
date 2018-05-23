class Progress {
	private p: number;
	private bar = document.querySelectorAll('.status-hunger')[0];

	constructor (p: number) {
  	this.p = p;
    this.update();
  }
  private update() {
  	this.bar.style.width = this.p + '%';
  }
  countup() {
  	if (this.p < 100) { this.p += 10; }
    this.update();
  }
  countdown() {
  	if (0 < this.p) { this.p -= 10; }
    this.update();
  }
}

var up = document.getElementById('up-hunger');
var down = document.getElementById('down-hunger');
var p = new Progress(0);

up.addEventListener('click', () => { p.countup(); });
down.addEventListener('click', () => { p.countdown(); });