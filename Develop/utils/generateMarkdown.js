// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  - ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions]{#questions}

  ## Installation
  
  - ${data.installation}
  
  ## Usage
  
  - ${data.usage}
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  - ${data.license}
  
  ## How to Contribute
  
  - ${data.contribution}
  
  ## Tests
  
  - ${data.test}

  ##Questions

  - Need to ask a question? 
  - Check out my github: [Git Hub Profile](https://github.com/${data.github})
  - Send me an email: ${data.email}
`;
}

module.exports = {
  generateMarkdown
};
