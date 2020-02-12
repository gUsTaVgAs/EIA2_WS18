"use strict";
var endabgabe;
(function (endabgabe) {
    let golden = 0.62;
    function background() {
        let canvasGradient = endabgabe.crc2.createLinearGradient(0, 0, 0, endabgabe.crc2.canvas.height);
        canvasGradient.addColorStop(0, "#99ccff");
        canvasGradient.addColorStop(0.5, "#99ccff");
        canvasGradient.addColorStop(0.62, "#FAF6F5");
        endabgabe.crc2.fillStyle = canvasGradient;
        endabgabe.crc2.fillRect(0, 0, endabgabe.crc2.canvas.width, endabgabe.crc2.canvas.height);
        let horizon = golden * endabgabe.crc2.canvas.height;
        let sunPosition = new endabgabe.Vector(200, 100);
        let birdhousePosition = new endabgabe.Vector(200, 400);
        let cloudPosition = new endabgabe.Vector(400, 100);
        let cloudSize = new endabgabe.Vector(300, 50);
        let houseSize = new endabgabe.Vector(200, 50);
        let mountainPosition = new endabgabe.Vector(0, horizon);
        //let treePosition: Vector = new Vector(745, 450);
        //let treeScale: Vector = new Vector(2, 5);
        drawSun(sunPosition);
        drawCloud(cloudPosition, cloudSize);
        drawMountains(mountainPosition, 75, 200, "grey", "white");
        drawMountains(mountainPosition, 50, 150, "#525252", "lightgrey");
        drawBirdhouse(birdhousePosition, houseSize);
        drawSnowman();
        //drawTree(treePosition);
    }
    endabgabe.background = background;
    function drawSun(_position) {
        //console.log("Sun");
        let innerradius = 80;
        let outerradius = 160;
        let gradient = endabgabe.crc2.createRadialGradient(0, 0, outerradius, 0, 0, innerradius);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 1)");
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_position.x, _position.y);
        endabgabe.crc2.fillStyle = gradient;
        endabgabe.crc2.arc(0, 0, outerradius, 0, 2 * Math.PI);
        endabgabe.crc2.fill();
        endabgabe.crc2.restore();
    }
    endabgabe.drawSun = drawSun;
    function drawCloud(_position, _size) {
        let xparticles = 30;
        let rparticles = 60;
        let particle = new Path2D();
        let gradient = endabgabe.crc2.createRadialGradient(0, 0, 0, 0, 0, rparticles);
        particle.arc(0, 0, rparticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_position.x, _position.y);
        endabgabe.crc2.fillStyle = gradient;
        //crc2.fill(particle);
        for (let amount = 0; amount < xparticles; amount++) {
            endabgabe.crc2.save();
            let x = (Math.random() * _size.x);
            let y = -(Math.random() - 0.5 * _size.y);
            endabgabe.crc2.translate(x, y);
            endabgabe.crc2.fill(particle);
            endabgabe.crc2.restore();
        }
        endabgabe.crc2.restore();
    }
    endabgabe.drawCloud = drawCloud;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        endabgabe.crc2.save();
        endabgabe.crc2.translate(_position.x, _position.y);
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(0, 0);
        endabgabe.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            endabgabe.crc2.lineTo(x, y);
        } while (x < endabgabe.crc2.canvas.width);
        endabgabe.crc2.lineTo(endabgabe.crc2.canvas.width, 0);
        endabgabe.crc2.closePath();
        let gradient = endabgabe.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        endabgabe.crc2.fillStyle = gradient;
        endabgabe.crc2.fill();
        endabgabe.crc2.restore();
    }
    endabgabe.drawMountains = drawMountains;
    function drawBirdhouse(_position, _size) {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(180, 600);
        endabgabe.crc2.lineTo(180, 355);
        endabgabe.crc2.lineTo(190, 355);
        endabgabe.crc2.lineTo(190, 600);
        endabgabe.crc2.moveTo(185, 355);
        endabgabe.crc2.lineTo(160, 355);
        endabgabe.crc2.lineTo(160, 315);
        endabgabe.crc2.lineTo(185, 305);
        endabgabe.crc2.lineTo(210, 315);
        endabgabe.crc2.lineTo(210, 355);
        endabgabe.crc2.save();
        endabgabe.crc2.stroke();
        endabgabe.crc2.fillStyle = "brown";
        endabgabe.crc2.fill();
        endabgabe.crc2.beginPath();
        //crc2.moveTo(185, 335);
        endabgabe.crc2.arc(185, 340, 7, 0, 2 * Math.PI);
        endabgabe.crc2.moveTo(160, 315);
        endabgabe.crc2.lineTo(210, 315);
        endabgabe.crc2.lineTo(185, 305);
        endabgabe.crc2.lineTo(160, 315);
        endabgabe.crc2.restore();
        endabgabe.crc2.stroke();
        endabgabe.crc2.closePath();
    }
    endabgabe.drawBirdhouse = drawBirdhouse;
    function drawSnowman() {
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(400, 485, 35, 0, 2 * Math.PI);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fillStyle = "white";
        endabgabe.crc2.fill();
        endabgabe.crc2.stroke();
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(400, 430, 30, 0, 2 * Math.PI);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fillStyle = "white";
        endabgabe.crc2.fill();
        endabgabe.crc2.stroke();
        endabgabe.crc2.beginPath();
        endabgabe.crc2.arc(400, 375, 35, 0, 2 * Math.PI);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fillStyle = "white";
        endabgabe.crc2.fill();
        endabgabe.crc2.stroke();
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(430, 430);
        endabgabe.crc2.lineTo(470, 415);
        endabgabe.crc2.moveTo(370, 430);
        endabgabe.crc2.lineTo(330, 420);
        endabgabe.crc2.closePath();
        endabgabe.crc2.stroke();
        endabgabe.crc2.beginPath();
        endabgabe.crc2.moveTo(400, 350);
        endabgabe.crc2.lineTo(355, 350);
        endabgabe.crc2.lineTo(355, 340);
        endabgabe.crc2.lineTo(380, 340);
        endabgabe.crc2.lineTo(380, 300);
        endabgabe.crc2.lineTo(425, 300);
        endabgabe.crc2.lineTo(425, 340);
        endabgabe.crc2.lineTo(450, 340);
        endabgabe.crc2.lineTo(450, 350);
        endabgabe.crc2.closePath();
        endabgabe.crc2.fillStyle = "black";
        endabgabe.crc2.fill();
        endabgabe.crc2.stroke();
    }
    endabgabe.drawSnowman = drawSnowman;
    /*export function drawTree(_position: Vector): void {

        crc2.translate(_position.x, _position.y);
        //crc2.scale(_scaling.x, _scaling.y);
        crc2.beginPath();
        crc2.lineTo(-70, 0);
        crc2.lineTo(-70, -15);
        crc2.lineTo(-55, -15);
        crc2.lineTo(-55, 0);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.stroke();
        crc2.fill();



        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.moveTo(-100, -10);
        crc2.lineTo(-65, -50);
        crc2.lineTo(-25, -10);
        crc2.fillStyle = "green";
        crc2.restore();
        crc2.fill();
        crc2.closePath();
        crc2.stroke();



    } */
    function createSnow(_nSnow) {
        for (let i = 0; i < _nSnow; i++) {
            let snow = new endabgabe.Snow();
            endabgabe.moveables.push(snow);
        }
    }
    endabgabe.createSnow = createSnow;
    function createBird(_nBirds) {
        for (let i = 0; i < _nBirds; i++) {
            let bird = new endabgabe.Bird();
            endabgabe.moveables.push(bird);
        }
    }
    endabgabe.createBird = createBird;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=background.js.map