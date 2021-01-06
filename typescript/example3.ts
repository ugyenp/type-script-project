class Rectangle {
    name:string;
    length:number;
    breadth:number;

    constructor(shapeName:string, width:number, height:number){
        this.name = shapeName;
        this.length = width;
        this.breadth = height;
    }

    shapeName(){
        // this.name = "rectangle";
        console.log("Shape name is:" + this.name);
    }

    shapeArea(){
        // this.length = 4;
        // this.breadth = 2;
        let area:number = this.length * this.breadth;
        console.log("area:" + area);
    }
}

let rect = new Rectangle('Rectangle', 4, 2);
rect.shapeName();
rect.shapeArea();