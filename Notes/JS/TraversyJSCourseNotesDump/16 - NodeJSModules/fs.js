// const fs = require('fs'); // for sync and async-callback version
const fs = require('fs/promises'); // for async-promise and async-await version

// Write to a file

// async-callback
// fs.writeFile('file1.txt', 'Hello World', (err) => {
// 	if (err) throw err;
// 	console.log('File Created');
// });

// async-promise
// fs.writeFile('file2.txt', 'Hello World 2')
// 	.then(() => {
// 		console.log('File created');
// 	})
// 	.catch((err) => console.log(err));

// async-promise async-await
async function createFile(filename, content) {
	try {
		await fs.writeFile(filename, content);
		console.log('File created');
	} catch (err) {
		console.log(err);
	}
}
// createFile('file4.txt', 'Hello World 4');

// sync
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File created');

// Read from a file

async function readFile(filename) {
	try {
		const data = await fs.readFile(filename, 'utf8');
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}
// readFile('file1.txt')
// readFile('file2.txt')
// readFile('file3.txt')
// readFile('file4.txt')

// Delete a file

async function deleteFile(filename) {
	try {
		await fs.unlink(filename);
		console.log('File deleted successfully');
	} catch (err) {
		console.log(err);
	}
}
// deleteFile('file2.txt')

// Rename a file

async function renameFile(oldname, newname) {
	try {
		await fs.rename(oldname, newname);
		console.log('File renamed successfully');
	} catch (error) {
		console.log(error);
	}
}
// renameFile('file1.txt', 'file.txt');

// For creating folder :- fs.mkdir(foldername)