// Function that returns a license badge based on which license is passed in

let license;
let badge; 

function renderLicenseBadge(license) {
  switch (data.license){
    case 'Github':
      badge = '[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)';
      break;
    case 'MIT':
      badge = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
      break;
    case 'GPLv3':
      badge = '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)'
      break;
  }

  // if (data.license = 'Github'){
  //   let license = 'Github';
  //   let badge = '[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)';
  // } else if (data.license = 'MIT'){
  //   let license = 'MIT';
  //   let badge = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
  // } else {
  //   let license= 'GPLv3';
  //   let badge =  '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
  // }
}

// Github
//[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
//Mit license
//[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
// GPLv
// [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

// Function to generate markdown for README
const generateMarkdown = function(data) {
  return `# ${data.title}

  ## Description
  ${badge}
  
  - ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  - ${data.installation}
  
  ## Usage
  
  - ${data.usage}
  
  ## License
  
  - ${license}
  
  ## How to Contribute
  
  - ${data.contribution}
  
  ## Tests
  
  - ${data.test}

  ## Questions

  - Need to ask a question? 
  - Check out my github: [Git Hub Profile](https://github.com/${data.github})
  - Send me an email: ${data.email}
`;
}

module.exports = generateMarkdown;
