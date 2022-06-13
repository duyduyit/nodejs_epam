const fs = require('fs');

fs.writeFile('content.txt', 'This is my first file!', (err) => {
    if (err) {
        throw err;
    };

    console.log('File created successfully!');
});

const filePath = path.join(process.cwd(), 'content.txt');
fs.readFile(filePath, (error, content) => {
  if (error) throw error;

  console.log(content);
});

var modifiedContent = prompt('Write your modified content: ')
fs.writeFile('content.txt', modifiedContent, function (err) {
  if (err) throw err;
  console.log('Replaced!');
});