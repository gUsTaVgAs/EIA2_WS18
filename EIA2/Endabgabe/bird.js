"use strict";
var endabgabe;
(function (endabgabe) {
    class Bird extends endabgabe.Moveable {
        constructor() {
            super();
            let xBird = (3 * Math.random()) - 5;
            this.velocity = new endabgabe.Vector(xBird, 0);
        }
        draw() {
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.beginPath();
            endabgabe.crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = randomColorpicker();
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.closePath();
            //head
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(0, 0, 11, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = randomColorpicker();
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.closePath();
            //eye
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.beginPath();
            endabgabe.crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
            endabgabe.crc2.fillStyle = "black";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.closePath();
            //beak
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(-11, -2);
            endabgabe.crc2.lineTo(-26, 4);
            endabgabe.crc2.lineTo(-9, 6);
            endabgabe.crc2.fillStyle = "gold";
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.closePath();
            //wings
            endabgabe.crc2.save();
            endabgabe.crc2.translate(this.position.x, this.position.y);
            endabgabe.crc2.beginPath();
            endabgabe.crc2.moveTo(13, -4);
            endabgabe.crc2.lineTo(30, -35);
            endabgabe.crc2.lineTo(47, -4);
            endabgabe.crc2.fillStyle = randomColorpicker();
            endabgabe.crc2.fill();
            endabgabe.crc2.restore();
            endabgabe.crc2.closePath();
        }
        isHit(_hotspot) {
            let hitsize = 32;
            let difference = new endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
        isFoodNear(_hotspot) {
            let foodSize = 200;
            let difference = new endabgabe.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < foodSize && Math.abs(difference.y) < foodSize);
        }
        moveToFood() {
            let ySnow = new endabgabe.Vector(0, 0);
            ySnow.random(1, 1);
            this.position.add(ySnow);
        }
    }
    endabgabe.Bird = Bird;
    function randomColorpicker() {
        let r = 255 * Math.random(), g = 255 * Math.random(), b = 255 * Math.random();
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    endabgabe.randomColorpicker = randomColorpicker;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=bird.js.map