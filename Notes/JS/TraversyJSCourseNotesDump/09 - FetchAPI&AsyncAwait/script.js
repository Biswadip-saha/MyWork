// Fetch API

// JSON file

fetch('./movies.json')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});

// Text file

fetch('./test.txt')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		console.log(data);
	});

// Fetching from API

fetch('https://api.github.com/users/biswadip-saha')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		document.querySelector('h1').textContent = data.login;
	});

// Fetch Options

function createPosts({ title, body }) {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title,
			body,
		}),
		headers: {
			'Content-Type': 'application/json',
			token: 'abc123',
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
}

createPosts({ title: 'myPost', body: 'version  1' });

// Error Handling

fetch('http://httpstat.us/200')
	.then((res) => res)
	.then(() => {
		console.log('Success');
	});

fetch('http://httpstat.us/404')
	.then((res) => {
		if (!res.ok) {
			throw new Error('Request Failed');
		}
		return res;
	})
	.then(() => {
		console.log('Success');
	})
	.catch((err) => {
		console.log(err);
	});

fetch('http://httpstat.us/404')
	.then((res) => {
		if (res.status === 404) {
			throw new Error('Not Found');
		} else if (res.status === 500) {
			throw new Error('Server Error');
		} else if (res.status != 200) {
			throw new Error('Request Failed');
		}
		return res;
	})
	.then(() => {
		console.log('Success');
	})
	.catch((err) => {
		console.log(err);
	});

// Async Await

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'Jhon', age: 30 });
	}, 1000);
});

// promise.then((data)=>console.log(data))

async function getPromise() {
	const response = await promise;
	console.log(response);
}

getPromise();

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	console.log(data);
}

getUsers();

const getPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();

	console.log(data);
};

getPosts();

// Try & Catch

try {
	console.log(x);
} catch (err) {
	console.log('Error: ' + err);
}

function double(number) {
	if (isNaN(number)) {
		throw new Error(number + ' is not a number.');
	}
	return number * 2;
}

try {
	const y = double('hello');
	console.log(y);
} catch (error) {
	console.log(error);
}

//Async Await Error Handling

async function getUsers() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();

		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

getUsers();

const err404 = async () => {
	try {
		const response = await fetch('http://httpstat.us/404');
		const data = await response.text();

		if (!response.ok) {
			throw new Error('Request Failed');
		}

		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

err404();

// OR

// err404().catch((err) => console.log(err));

// Multiple Promises With Async and Await

function getDataPromisifiedAsyncAwait(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', endpoint);
		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText));
				} else {
					reject(`Something went wrong`);
				}
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.floor(Math.random() * 3000) + 1000);
	});
}

async function getAllData() {
	const movies = await getDataPromisifiedAsyncAwait('./movies.json');
	const actors = await getDataPromisifiedAsyncAwait('./actors.json');
	const directors = await getDataPromisifiedAsyncAwait('./directors.json');
	console.log(movies, actors, directors);
}

getAllData();

// OR

async function getAllDataWithFetch() {
	const moviesRes = await fetch('./movies.json');
	const moviesFetch = await moviesRes.json();

	const actorsRes = await fetch('./actors.json');
	const actorsFetch = await actorsRes.json();

	const directorsRes = await fetch('./directors.json');
	const directorsFetch = await directorsRes.json();

	console.log(moviesFetch, actorsFetch, directorsFetch);
}

getAllDataWithFetch();

// OR

async function getAllDataPromiseAll() {
	const [moviesRes, actorsRes, directorsRes] = await Promise.all([
		fetch('./movies.json'),
		fetch('./actors.json'),
		fetch('./directors.json'),
	]);

	const moviesPromiseAll = await moviesRes.json()
	const actorsPromiseAll = await actorsRes.json()
	const directorsPromiseAll = await directorsRes.json()

	console.log(moviesPromiseAll, actorsPromiseAll, directorsPromiseAll);
}

getAllDataPromiseAll()