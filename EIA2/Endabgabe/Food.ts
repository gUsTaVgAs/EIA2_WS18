namespace endabgabe {
    export class Food extends Moveable {
        
        private radius: number = 20;
        constructor() {
            super();
        }
        draw(): void {
            console.log();

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.posiX, this.posiY);
            
            crc2.arc(0, 0, this.radius, 0, 2 * Math.PI);
            crc2.fillStyle = randomColorpicker();
            crc2.fill();
            if (this.radius > 0.8) {
                this.radius -= 0.8;
                if (this.radius < 1.8) {
                    this.radius = 0;
                }
            }

            crc2.restore();

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.posiX, this.posiY);
            
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.posiX + 4, this.posiY + 4);
           
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.posiX - 4, this.posiY + 4);
            
            crc2.arc(0, 0, 3, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.restore();



        }

        dissapear(): void {

            crc2.restore();
        }


    }
}
