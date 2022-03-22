class Word {

    constructor(x, y, w, h, word, direction) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.word = word;
        this.direction = direction;
        
       
    }

  /* moveDiagonalDownRight() {
       
        this.x += random(1,10);
        this.y += random(1,10);
    }

    moveDiagonalDownLeft() {
        this.x -= random(1,10);
        this.y += random(1,10);
    }

    moveDiagonalUpRight() {
        this.x += random(1,10);
        this.y -= random(1,10);
    }

    moveDiagonalUpLeft() {
        this.x -= random(1,10);
        this.y -= random(1,10);
    }

    moveLeft() {
        this.x -= random(1,10);
        
    }

    moveRight() {
        this.x += random(1,10);
    }

    moveUp() {
        this.y -= random(1,10);
    }

    moveDown() {
        this.y += random(1,10);
    }*/

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    update()
    {
        this.y += random(1,10);
     //   this.x -= random(-1,-5);
    }
    draw() {
        //translate(400,350);
        rectMode(CENTER);

        fill(255,10,10);
        rect(this.x, this.y, this.w, this.h,20);
        fill(0);
        text(this.word, this.x, this.y+10);
       /* switch (this.direction) {
            case 1:
                this.moveDown();
                break;
            case 2:
                this.moveDiagonalDownRight();
                break;
            case 3:
                this.moveDiagonalUpLeft();
                break;
            case 4:
                this.moveDiagonalUpRight();
                break;
            case 5:
                this.moveRight();
                break;
            case 6:
                this.moveUp();
                break;
            case 7:
                this.moveDown();
                break;
            case 8:
                this.moveLeft();
                break;
        }*/
    }

}