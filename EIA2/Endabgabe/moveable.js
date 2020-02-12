"use strict";
var endabgabe;
(function (endabgabe) {
    class Moveable {
        constructor() {
            let x = endabgabe.crc2.canvas.width * Math.random();
            let y = endabgabe.crc2.canvas.height * Math.random();
            this.position = new endabgabe.Vector(x, y);
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += endabgabe.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += endabgabe.crc2.canvas.height;
            if (this.position.x > endabgabe.crc2.canvas.width)
                this.position.x -= endabgabe.crc2.canvas.width;
            if (this.position.y > endabgabe.crc2.canvas.height)
                this.position.y -= endabgabe.crc2.canvas.height;
        }
        getClick(_positionX, _positionY) {
            this.posiX = _positionX;
            this.posiY = _positionY;
        }
    }
    endabgabe.Moveable = Moveable;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=moveable.js.map