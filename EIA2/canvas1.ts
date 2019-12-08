namespace canvas1 {


    interface Vector {

        x: number;
        y: number;
    }


    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let posMountains: Vector = ({ x: -200, y: crc2.canvas.height * 0.62 });

        drawBackground();
        drawSun({ x: 150, y: 75 });
        drawCloud({ x: 450, y: 100 }, { x: 100, y: 80 });

        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "#525252", "lightgrey");

        drawBirdshouse();
        drawSnowman();
        //drawMountains(mountainPos, 75, 200, "grey", "white");


        /*crc2.fillRect(10, 15, crc2.canvas.width, crc2.canvas.height);

        crc2.beginPath();
        crc2.arc(100, 75, 50, 0, 2 * Math.PI);
        crc2.ellipse(150, 80, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        crc2.stroke(); */

        //crc2.fillStyle = "black";
        /*crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(150, 50);
        crc2.lineTo(125, 25);
        crc2.lineTo(100, 50);
        crc2.stroke();

        /* let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
 
         gradient.addColorStop(0, "black");
         gradient.addColorStop(.2, "black");
         gradient.addColorStop(.3, "black");
         gradient.addColorStop(.4, "red");
         gradient.addColorStop(.6, "red");
         gradient.addColorStop(.7,"gold");
         gradient.addColorStop(1, "gold");
 
         crc2.fillStyle = gradient;
         crc2.fillRect(0, 0, 200, 100);*/

        /*let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "#fec";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height); */
    }


    function drawBackground(): void {

        console.log("Background");

        let canvasGradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        canvasGradient.addColorStop(0, "#99ccff");
        canvasGradient.addColorStop(0.5, "#99ccff");
        canvasGradient.addColorStop(0.62, "#FAF6F5");

        crc2.fillStyle = canvasGradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }


    function drawSun(_position: Vector): void {

        console.log("Sun");

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
        //crc2.restore();



    }

    function drawCloud(_position: Vector, _size: Vector): void {

        console.log("Cloud", _position, _size);

        let xparticles: number = 20;
        let rparticles: number = 50;

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
            let x: number = (Math.random() - 0.5 * _size.x);
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }

        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
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

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawBirdshouse(): void {

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



    function drawSnowman(): void {

        crc2.beginPath();
        crc2.arc(400, 485, 35, 0, 2 * Math.PI);
        crc2.closePath();
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




}