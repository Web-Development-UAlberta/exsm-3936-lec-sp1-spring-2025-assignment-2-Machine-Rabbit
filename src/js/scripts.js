async function main() {
  class AbstractShape {
    constructor(color, perimeter, area){
      if(new.target===AbstractShape){
        throw new Error ("Can't instantiage Abstract Class Abstract Shape");
      }
      color = "string";
      this.perimeter = perimeter;
      this.area = area;
    }
  }
  class Rectangle extends AbstractShape{
    constructor(length, width){
      super(color, perimeter, area);
      this.length = length;
      this.width = width;
      this.perimeter = length + length + width + width;
      this.area = length * width;
    }
    get length(){
      return this._length;
    }
    get width(){
      return this._width; 
    }
    set length(value){
      this._length = value;
    }
    set width(value){
      this._width = value;
    }
  }
  class Triangle extends AbstractShape{
    constructor(base, height){
      super(color, perimeter, area);
      this.base = base;
      this.height = height;
      this.perimeter = base + base + base;
      this.area = (base*height)/2;
    }
    get base() {
      return this._base;
    }
    get height(){
      return this._height;
    }
    set base(value){
      this._base = value;
    }
    set height(value){
      this._height = value;
    }
  }
  class Circle extends AbstractShape{ //ADD CIRCUMFERENCE ALIAS
    constructor(radius){
      super(color, perimeter, area);
      this.radius = radius;
      this.diameter = radius + radius;
      this.perimeter = 3.14 *this.diameter;
      this.area = 3.14*(radius*radius);
    }
    get radius (){
      return this._radius;
    }
    get diameter(){
      return this._diameter;
    }
    set radius (value){
      this._radius = value;
    }
    set diameter(value){
      this._diameter = value;
    }
  }
  //... ADD HEXAGON 
  let color;
  let perimeter;
  let area;
  let myShape = new Rectangle(10, 10);
  let myShape1 = new Triangle(10, 10);
  let myShape2 = new Circle(8);
  output(`Testing rectangle perimeter: ${myShape.perimeter} units.`);
  output(`Testing rectangle area: ${myShape.area} units.`);
  output(`Testing rectangle length: ${myShape.length} units.`);
  output(`Testing rectangle width: ${myShape.width} units.`);
  //...
  output(`Testing triangle perimeter: ${myShape1.perimeter} units.`);
  output(`Testing triangle area: ${myShape1.area} units.`);
  output(`Testing triangle base: ${myShape1.base} units.`);
  output(`Testing triangle height: ${myShape1.height} units.`);
  //...
  output(`Testing circle perimeter: ${myShape2.perimeter} units.`);
  output(`Testing circle area: ${myShape2.area} units.`);
  output(`Testing circle radius: ${myShape2.radius} units.`);
  output(`Testing circle diameter: ${myShape2.diameter} units.`);
  output(`Testing circle circumference: ${myShape2.circumference} units.`);
}