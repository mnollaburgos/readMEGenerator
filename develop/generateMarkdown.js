// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generate(data) {
  return `# ${data.project}
  ![GitHub license](https://img.shields.io/badge/license-${data.licenses}-blue.svg)
##Description
${data.Description}
##TableOfContents
*[Dependencies](#Dependencies)
*[Usage](#Usage)
*[Contributions](#Contributions)
*[Tests](#Tests)
*[email](#email)
*[Github](#Github)
*[Licences](#Licenses)

## Dependencies
${data.Dependencies}
## Usage
${data.Usage}
## Contributions
${data.Contributions}
## Tests
${data.Tests}
## Email
${data.email}
## Github
${data.username}
## Licenses
${data.Licenses}
`;
}

module.exports = generate;
