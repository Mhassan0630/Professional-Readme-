// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase().replace(/ /g, '-')}/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == "None"){
    return "";
  } else {
    return '### license: Copyright'
  }



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge}
          ${data.description}
          ## Table of Contents:
          - [Installation](#installation)
          - [Usage](#usage)
          - [Credits](#credits)
          - [License](#license)
          -[Questions](#questions)
          To install the required prerequisites, access the console and execute the following command:
          \'\'\'
          ${data.installation}
          \'\'\'
          ## Usage:
          ${data.usage}
          ## Credits:
          ${data.credits}
          ## Tests:
          to test, access the console and execute the following command
          \'\'\'${data.test}\'\'\'
          ${renderLicenseSection(data.license)}
          ### Questions:
          You can always reach out to me if you have any questions on [Github] (https://github.com/${data.github}
          You can always reach out to me if you have any questions on [Email] ${data.email}




`;
}

module.exports = generateMarkdown;
