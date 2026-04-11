function capitaliseWords(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.substr(1))
		.join(' ');
}

const message = {
	id: 1,
	text: 'Hello World',
};

// export default capitaliseWords; // if only one function to export
export {
    capitaliseWords,
    message
}