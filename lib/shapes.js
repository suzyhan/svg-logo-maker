// Create and define a 'Shape' class that has constructor properties for color, text, text color
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

// Triangle class inherits properties defined in Shape class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
  
// Circle class inherits properties defined in Shape class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

// Square class inherits properties defined in Shape class
class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// Exports classes (Triangle, Circle, Square)
module.exports = { Triangle, Circle, Square };