// Create and define a 'Shape' class that has constructor properties for color, text, text color
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color
    }

    setText(text) {
        this.text = text
    }

    setTextColor(textColor) {
        this.textColor = textColor
    }
}

// Create a 'Triangle' class
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
    }
}

// Create a 'Circle' class
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
}

// Create a 'Square' class
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}">`
    }
}

module.exports = Shape;
module.exports = Triangle;
module.exports = Circle;
module.exports = Square;