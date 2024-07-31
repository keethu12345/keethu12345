const fs = require('fs');
const countFile = 'count.txt';

// Read the current count
fs.readFile(countFile, 'utf8', (err, data) => {
  if (err) throw err;
  let count = parseInt(data, 10);

  // Increment the count
  count += 1;

  // Write the new count back to the file
  fs.writeFile(countFile, count.toString(), (err) => {
    if (err) throw err;
    console.log(`Count updated to ${count}`);
  });
});
