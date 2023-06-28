// Import file system and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./utils/generateLogo');

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
        message: "What color would you like the text to be? Enter a color (OR a hexadecimal number)."
    },
    // WHEN I am prompted for a shape
    // THEN I am presented with a list of shapes to choose from: circle, triange, and square
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like the logo to be?",
        choices: [
            "Triangle",
            "Square",
            "Circle"
        ]
    },
    // WHEN I am prompted for the shape's color
    // THEN I am can enter a color keyword (OR a hexadecimal number)
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like the shape to be? Enter a color (OR a hexadecimal number)"
    },
];

// Create a function to generate an SVG file named 'logo.svg' when user input for all prompts are entered
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg");
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput);
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
};

// Function call to initialize app
init();