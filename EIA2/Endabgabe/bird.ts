namespace endabgabe {
    export class Bird extends Moveable {


        constructor() {
            super();

            let xBird: number = (3 * Math.random()) - 5;



            this.velocity = new Vector(xBird, 0);
        }


        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
            crc2.fillStyle = randomColorpicker();
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //head
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 11, 0, 2 * Math.PI);
            crc2.fillStyle = randomColorpicker();
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //eye
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //beak
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(-11, -2);
            crc2.lineTo(-26, 4);
            crc2.lineTo(-9, 6);
            crc2.fillStyle = "gold";
            crc2.fill();
            crc2.restore();
            crc2.closePath();

            //wings
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(13, -4);
            crc2.lineTo(30, -35);
            crc2.lineTo(47, -4);
            crc2.fillStyle = randomColorpicker();
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }



        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 32;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);

        }
        isFoodNear(_hotspot: Vector): boolean {

            let foodSize: number = 200;

            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < foodSize && Math.abs(difference.y) < foodSize);

        }
        moveToFood(): void {
            let ySnow: Vector = new Vector(0, 0);
            ySnow.random(1, 1);

            this.position.add(ySnow);
        }



        

    }

    export function randomColorpicker(): string {
        let r: number = 255 * Math.random(),
            g: number = 255 * Math.random(),
            b: number = 255 * Math.random();
        return "rgb(" + r + "," + g + "," + b + ")";
    }
}