const message = {
	id: 1,
	text: 'Hello World',
};

// module.exports = message;

function capitaliseWords(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.substr(1))
		.join(' ');
}

// module.exports = capitaliseWords

module.exports = {
    message, 
    capitaliseWords,
}