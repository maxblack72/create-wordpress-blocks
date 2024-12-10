const fs = require('fs');
const path = require('path');

// Get the argument from the command line
const inputString = process.argv[2];

if (!inputString) {
  console.error('Please provide a string as an argument in double quotes if it contains spaces.');
  process.exit(1);
}
// Transform the input string to kebab-case
const transformedString = inputString
  .toLowerCase()
  .replace(/\s+/g, '-')  // Replace spaces with hyphens
  .replace(/[^a-z0-9\-]/g, '');  // Remove any non-alphanumeric characters except hyphens

const sourceDir = path.join(__dirname, './src/new-block-templates');
const destinationDir = path.join(__dirname, './../src/'+transformedString);

// Ensure destination directory exists
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir);
}

// Define the words to replace as key-value pairs
const replacements = {
  'block-name-dashed': transformedString,
  'block-name-standard': inputString,
};

// Function to perform replacements
function replaceText(content) {
  let modifiedContent = content;
  for (const [oldText, newText] of Object.entries(replacements)) {
    const regex = new RegExp(oldText, 'g'); // Global replacement
    modifiedContent = modifiedContent.replace(regex, newText);
  }
  return modifiedContent;
}

// Function to copy and modify files
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  files.forEach(file => {
    const sourceFilePath = path.join(sourceDir, file);
    const destinationFilePath = path.join(destinationDir, file);

    // Read the file
    fs.readFile(sourceFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      // Replace 'PLACEHOLDER' with the transformed string
      const modifiedData = replaceText(data);

      // Write the modified content to the destination folder
      fs.writeFile(destinationFilePath, modifiedData, err => {
        if (err) {
          console.error(`Error writing file ${file}:`, err);
          return;
        }
        console.log(`Copied and modified: ${file}`);
      });
    });
  });
});
