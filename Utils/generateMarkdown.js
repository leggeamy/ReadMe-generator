// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)
${renderLicenseLink(data.license)}
* [Contribution](#contribution)

* [Tests](#tests)

* [Questions](#questions)

## Installation

\`\`\`
