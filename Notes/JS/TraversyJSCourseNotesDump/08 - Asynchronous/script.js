// setTimeout & clearTimeout

setTimeout(function () {
    console.log('Hello from callback');
}, 2000);

console.log('Hello from globalScope');

function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('timerCancelled');
});

// setInterval & clearInterval

// function myCallback(a) {
//     console.log(a, Date.now());
// }

// function stopChange() {
//     clearInterval(intervalId);
//     console.log('Interval Stopped');
// }

// const intervalId = setInterval(myCallback, 1000, 'Hello');

// document.getElementById('stop').addEventListener('click', stopChange);

let intervalId;

function startChange() {
    if (!intervalId) {
        intervalId = setInterval(changeRandomColor, 1000);
    }
}

// function changeColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

function changeRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    clearInterval(intervalId);
    intervalId = null;
    console.log('Interval Stopped');
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

// CallBacks

function toggle(e) {
    e.target.classList.toggle('danger');
}

document.querySelector('.callback').addEventListener('click', toggle);

const posts = [
    { title: 'Post One', body: 'This is post One' },
    { title: 'Post Two', body: 'This is post Two' },
];

function createPost(post, cb) {
    // setTimeout(() => {
    posts.push(post);
    cb();
    // }, 2000);
}

function getPosts() {
    // setTimeout(() => {
    posts.forEach(function (post) {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#posts').appendChild(div);
    });
    // }, 1000);
}

createPost({ title: 'post three', body: 'This is post three' }, getPosts);

// AJAX And XHR object

const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');
// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        data.forEach((movie) => {
            const li = document.createElement('li');

            console.log('object');
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
            document.querySelector('#results').appendChild(li);
        });
    }
};
// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.send();

const xhr2 = new XMLHttpRequest();

xhr2.open('GET', 'https://api.github.com/users/biswadip-saha/repos');
xhr2.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);

        data.forEach((repo) => {
            const li = document.createElement('li');
            console.log('object2');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
            document.querySelector('#results').appendChild(li);
        });
    }
};

xhr2.send();

// Callback Hell

function getData(endpoint, cb) {
    const xhr3 = new XMLHttpRequest();

    xhr3.open('GET', endpoint);
    xhr3.onreadystatechange = function () {
        if ((this.readyState === 4) & (this.status === 200)) {
            cb(JSON.parse(this.responseText));
        }
    };

    setTimeout(() => {
        xhr3.send();
    }, Math.floor(Math.random() * 2000) + 1000);
}

getData('./movies.json', (data) => {
    console.log(data);
    getData('./actors.json', (data) => {
        console.log(data);
        getData('./actors.json', (data) => {
            console.log(data);
        });
    });
});

// Promises

const promise = new Promise((resolve, reject) => {
    // Do some async Task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise consumed..');
});

// OR

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'Jhon', age: 18 });
    }, 1000);
}).then((user) => {
    console.log(user);
});

const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve({ name: 'JhonDoe', age: 34 });
        } else {
            reject('Error: Something went wrong');
        }
    });
});

getUser
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('The promise is completed');
    });

// callback to promise refactor

function createPostPromisified(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;

            if (!err) {
                posts.push(post);
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });
}

function getPostsPromisified() {
    setTimeout(() => {
        posts.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body} (promisified version)`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

function showErr(err) {
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${err}</strong>`;
    document.getElementById('posts').appendChild(h3);
}

createPostPromisified({ title: 'post three', body: 'This is post three' })
    .then(getPostsPromisified)
    .catch(showErr);

// Promise chaining

const promiseChain = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;

        if (!err) {
            resolve({ name: `Jhon PromiseChain`, age: 21 });
        } else {
            reject(`Error: Something went wrong in Promise chain`);
        }
    });
});

promiseChain
    .then((user) => {
        console.log(user);
        return user.name;
    })
    .then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        console.log(`This will run no matter what`);
    });

// Callback Hell Promisified

function getDataPromisified(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr4 = new XMLHttpRequest();

        xhr4.open('GET', endpoint);
        xhr4.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject(`Something went wrong`);
                }
            }
        };

        setTimeout(() => {
            xhr4.send();
        }, Math.floor(Math.random() * 3000) + 2000);
    });
}
getDataPromisified(`./movies.json`)
    .then((movies) => {
        console.log(movies);
        return getDataPromisified(`./actors.json`);
    })
    .then((actors) => {
        console.log(actors);
        return getDataPromisified(`./directors.json`);
    })
    .then((directors) => {
        console.log(directors);
    })
    .catch((err) => {
        console.log(err);
    });

// promise.all()

const moviesPromise = getDataPromisified(`./movies.json`);
const actorsPromise = getDataPromisified(`./actors.json`);
const directorsPromise = getDataPromisified(`./directors.json`);

Promise.all([moviesPromise, actorsPromise, directorsPromise])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
