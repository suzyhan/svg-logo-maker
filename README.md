# SVG Logo Maker

## Description
This is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)  
  
## Installation
1. Open VS Code. 
2. Using the terminal, install the following:
    - Node.JS [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
    - Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
    - Jest [Version 29.4.3](https://www.npmjs.com/package/jest)
3. Use the command node index.js to run the application.

## Usage
Run the command npm i to install dependencies. Use the node index.js command to invoke the application. Follow the prompts to answer the questions. Upon completion, you will see a console log displaying a message indicating your logo has been generated. Navigate to the 'logo.svg' file to view the generated SVG logo.

The following image is an example of the application use and appearance:
![Screenshot of application invoked with user prompts](/assets/svg-user-prompts.png)

## Video
The following walkthrough video demonstrates the functionality of the SVG Logo Maker and how a user would invoke the application from the command line:

https://github.com/suzyhan/svg-logo-maker/assets/129558186/d443e5ee-63e2-4942-9a71-fcc3bcdbfda4

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="path/to/poster_image.png" muted="" loop="" autoplay="">
    <source src="assets/SVG-Logo-Maker.mp4" type="video/mp4">
  </video>
</figure>

## License
None

## Contributing
Please contact me to help contribute.

## Testing
Each shape class (Triangle, Circle, Square) is tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color. Open the terminal, use the command 'npm run test' to test for all shape classes.

![Screenshot of application testing](/assets/svg-test.png)

## Questions
Please email me with any questions or visit my GitHub profile using the links provided below.
* GitHub: [suzyhan](https://github.com/suzyhan)
* Email: [suzyahan@gmail.com](mailto:suzyahan@gmail.com)