class Word {

    constructor(x, y, w, h, word, direction) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.word = word;
        this.direction = direction;
        this.yDirection = floor(random(-5,5)) + 1;
        this.xDirection = floor(random(-5,5)) + 1;
        
       
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    update()
    {
        if(this.xDirection == 0)
        {
            this.xDirection = 1;
        }
        if(this.yDirection == 0)
        {
            this.yDirection = 1;
        }
        this.y += this.yDirection;
        this.x += this.xDirection;
    }
    draw() {
        rectMode(CENTER);

        fill(255,10,10);
        rect(this.x, this.y, this.w, this.h,20);
        fill(0);
        text(this.word, this.x, this.y+10);
       
    }

}