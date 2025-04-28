async function main() {
  class AbstractShape {
    constructor(color, perimeter, area){
      if(new.target === AbstractShape){
        throw new Error ("Can't instantiage Abstract Class Abstract Shape");
      }
      this.color = color;
      this.perimeter = perimeter;
      this.area = area;
    }
    Contain(){
      throw new Error ('Abstract method Contain() must be implemented')
    }
  }
  class Rectangle extends AbstractShape{ //ADD isSquare
    constructor(length, width, isSquare){
      super(color, perimeter, area);
      this.length = length;
      this.width = width;
      this.isSquare = isSquare;
      this.color = color;
      this.perimeter = length + length + width + width;
      this.area = length * width;
    }
    //Getters
    get color(){
      return this._color;
    }
    get length(){
      return this._length;
    }
    get width(){
      return this._width; 
    }
    get isSquare(){
      if(this.length != this.width){
        output('This is not a square!');
        return this._isSquare = false;
      } else {
        return this._isSquare = true;
      }
      
    }
    //Setters
    set length(value){
      this._length = value;
    }
    set width(value){
      this._width = value;
    }
    set isSquare(value){
      this._isSquare = value;
    }
    set color(value){
      this._color = value;
    }
    Contain(){

    }
  }
  class Triangle extends AbstractShape{
    constructor(base, height){
      super(color, perimeter, area);
      this.base = base;
      this.height = height;
      this.color = color;
      this.perimeter = base + base + base;
      this.area = (base*height)/2;
    }
    //Getters
    get color(){
      return this._color;
    }
    get base() {
      return this._base;
    }
    get height(){
      return this._height;
    }
    //Setters
    set color(value){
      this._color = value;
    }
    set base(value){
      this._base = value;
    }
    set height(value){
      this._height = value;
    }
    Contain(){

    }
  }
  class Circle extends AbstractShape{ //ADD CIRCUMFERENCE ALIAS
    constructor(radius, circumference){
      super(color, perimeter, area);
      this.radius = radius;
      this.circumference = circumference;
      this.diameter = radius + radius;
      this.color = color;
      this.perimeter = 3.14 *this.diameter;
      this.area = 3.14*(radius*radius);
    }
    //Getters
    get color(){
      return this._color;
    }
    get perimeter (){
      return this._circumference;
    }
    get radius (){
      return this._radius;
    }
    get circumference(){
      return this._circumference;
    }
    get diameter(){
      return this._diameter;
    }
    //Setters
    set color(value){
      this._color = value;
    }
    set perimeter(value){
      this.circumference = value;
    }
    set radius (value){
      this._radius = value;
    }
    set circumference(value){
      this._circumference = value;
    }
    set diameter(value){
      this._diameter = value;
    }
    Contain(){
      
    }
  }
  class Hexagon extends AbstractShape{
    constructor(side){
      super(color, perimeter, area);
      this.side = side;
      this.apothem = side*(1.732/2);
      this.color = color;
      this.perimeter = (side*6);
      this.area = this.apothem*(this.perimeter/2);
    }
    //Getters
    get side (){
      return this._side;
    }
    get apothem (){
      return this._apothem;
    }
    get color(){
      return this._color;
    }
    //Setters
    set color (value){
      this._color = value;
    }
    set side (value){
      this._side = value;
    }
    set apothem(value){
      this._apothem = value;
    }
    Contain(){
      
    }
  }
  //CREATE MENU
  /* let color;
  let perimeter;
  let area;
  const shapeSelector = await input("Select a Shape to Create: ");
  for(let i = 0; i < shapeSelector; i++){
    switch(shapeSelector){
      case '1':
        const length = parseInt(await input("Length? "));
        const width = parseInt(await input("Width? "));
        myShape = new Rectangle(color, length, width);
        output(`My ${myShape.color} Rectangle is ${myShape.perimeter} units around, and has an area of ${myShape.area}`)
        break;
      case '2':
        const base = await input("Base? ");
        const height = await input("Height? ");
        myShape = new Triangle(base, height);
        break;
      case '3':
        myShape = new Circle(radius);
        break;
      case '4':
        myShape = new Hexagon(side);
        break;
      case '0':
        output ('Exit Message');
      default:
        output("Selection Invalid, Try again.");
        continue; 
    }*/
  //... TESTERS
  let color;
  let perimeter;
  let area;
  let myShape = new Rectangle(10, 10);
  let myShape1 = new Triangle(10, 10);
  let myShape2 = new Circle(8);
  let myShape3 = new Hexagon (10);
  output(`Testing rectangle perimeter: ${myShape.perimeter} units.`);
  output(`Testing rectangle area: ${myShape.area} units.`);
  output(`Testing rectangle length: ${myShape.length} units.`);
  output(`Testing rectangle width: ${myShape.width} units.`);
  output(`Testing rectangle isSquare: ${myShape.isSquare}`);
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
  //...
  output(`Testing Hexagon perimeter: ${myShape3.perimeter} units.`);
  output(`Testing Hexagon area: ${myShape3.area} units.`);
  output(`Testing Hexagon apothem: ${myShape3.apothem} units`)
}