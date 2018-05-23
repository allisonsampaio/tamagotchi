var Progress = /** @class */ (function () {
    function Progress(p) {
        this.bar = document.querySelectorAll('.status-hunger')[0];
        this.p = p;
        this.update();
    }
    Progress.prototype.update = function () {
        this.bar.style.width = this.p + '%';
    };
    Progress.prototype.countup = function () {
        if (this.p < 100) {
            this.p += 10;
        }
        this.update();
    };
    Progress.prototype.countdown = function () {
        if (0 < this.p) {
            this.p -= 10;
        }
        this.update();
    };
    return Progress;
}());
var up = document.getElementById('up-hunger');
var down = document.getElementById('down-hunger');
var p = new Progress(0);
up.addEventListener('click', function () { p.countup(); });
down.addEventListener('click', function () { p.countdown(); });
