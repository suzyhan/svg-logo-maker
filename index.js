// Import file system and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

// Import classes from shapes library
const { Triangle, Circle, Square } = require('./lib/shapes')

// Create an array of questions for user input that specifies properties for generated svg logo
const questions = [
    // WHEN I am prompted for text
    // THEN I can enter up to three characters
    {
        type: "input",
        name: "text",
        message: "Please type in a character set of up to three letters."
    },
    // WHEN I am prompted for the text color
    // THEN I can enter a color keyword (OR a hexadecimal number)
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be? (Enter a color OR a hexadecimal number)."
    },
    // WHEN I am prompted for a shape
    // THEN I am presented with a list of shapes to choose from: circle, triange, and square
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like the logo to be?",
        choices: [
            "Triangle",
            "Circle",
            "Square"
        ]
    },
    // WHEN I am prompted for the shape's color
    // THEN I am can enter a color keyword (OR a hexadecimal number)
    {
        type: "input",
        name: "color",
        message: "What color would you like the shape to be? (Enter a color OR a hexadecimal number)"
    }
];

// Create a function to generate an SVG file named 'logo.svg' when user answers all prompts
function writeToFile(fileName, answers) {
    let svgString = "";
    // Sets width and height of logo container
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that user text input displays on shape
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;
    
    // Check user input from choices and adds properties to svg string
    let userShape;
    if (answers.shape === "Triangle") {
        userShape = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}"/>`;
    } else if (answers.shape === "Square") {
        userShape = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.color}"/>`;
    } else {
        userShape = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.color}"/>`;
    }

    // Takes in user input for text content and text color
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    // Closing </g> tag
    svgString += "</g>";
    // Closing </svg> tag
    svgString += "</svg>";
    
     // Using file system to generate svg logo
    fs.writeFile(fileName, svgString, (err) => {
        if (err) {
            return console.log(err);
        }
        // Output text printed in the command line
        console.log("Generated logo.svg");
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        var fileName = 'logo.svg';
        writeToFile(fileName, answers);
    });
};

// Function call to initialize app
init();