namespace endabgabe {

    let golden: number = 0.62;

    export function background(): void {

        let canvasGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        canvasGradient.addColorStop(0, "#99ccff");
        canvasGradient.addColorStop(0.5, "#99ccff");
        canvasGradient.addColorStop(0.62, "#FAF6F5");

        crc2.fillStyle = canvasGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


        let horizon: number = golden * crc2.canvas.height;

        let sunPosition: Vector = new Vector(200, 100);
        let birdhousePosition: Vector = new Vector(200, 400);
        let cloudPosition: Vector = new Vector(400, 100);
        let cloudSize: Vector = new Vector(300, 50);
        let houseSize: Vector = new Vector(200, 50);
        let mountainPosition: Vector = new Vector(0, horizon);
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
    export function drawSun(_position: Vector): void {
        //console.log("Sun");

        let innerradius: number = 80;
        let outerradius: number = 160;

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, outerradius, 0, 0, innerradius);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 1)");


        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, outerradius, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawCloud(_position: Vector, _size: Vector): void {
       
        let xparticles: number = 30;
        let rparticles: number = 60;

        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rparticles);

        particle.arc(0, 0, rparticles, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        //crc2.fill(particle);


        for (let amount: number = 0; amount < xparticles; amount++) {

            crc2.save();
            let x: number = (Math.random() * _size.x);
            let y: number = -(Math.random() - 0.5 * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }

        crc2.restore();
    }
    export function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(crc2.canvas.width, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    export function drawBirdhouse(_position: Vector, _size: Vector): void {


        crc2.beginPath();
        crc2.moveTo(180, 600);
        crc2.lineTo(180, 355);
        crc2.lineTo(190, 355);
        crc2.lineTo(190, 600);
        crc2.moveTo(185, 355);
        crc2.lineTo(160, 355);
        crc2.lineTo(160, 315);
        crc2.lineTo(185, 305);
        crc2.lineTo(210, 315);
        crc2.lineTo(210, 355);
        crc2.save();

        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        //crc2.moveTo(185, 335);
        crc2.arc(185, 340, 7, 0, 2 * Math.PI);
        crc2.moveTo(160, 315);
        crc2.lineTo(210, 315);
        crc2.lineTo(185, 305);
        crc2.lineTo(160, 315);
        crc2.restore();
        crc2.stroke();
        crc2.closePath();


    }
   
    
    export function drawSnowman(): void {

        crc2.beginPath();
        crc2.arc(400, 485, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(400, 430, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(400, 375, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(430, 430);
        crc2.lineTo(470, 415);
        crc2.moveTo(370, 430);
        crc2.lineTo(330, 420);
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(400, 350);
        crc2.lineTo(355, 350);
        crc2.lineTo(355, 340);
        crc2.lineTo(380, 340);
        crc2.lineTo(380, 300);
        crc2.lineTo(425, 300);
        crc2.lineTo(425, 340);
        crc2.lineTo(450, 340);
        crc2.lineTo(450, 350);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();




        crc2.stroke();

    }

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

    export function createSnow(_nSnow: number): void {


        for (let i: number = 0; i < _nSnow; i++) {
            let snow: Snow = new Snow();
            moveables.push(snow);

        }
    }
    export function createBird(_nBirds: number): void {

        for (let i: number = 0; i < _nBirds; i++) {
            let bird: Bird = new Bird();
            moveables.push(bird);

        }
    }

}